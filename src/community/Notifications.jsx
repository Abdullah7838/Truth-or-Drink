import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Notifications({ email, isOpen, onClose }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'likes', 'comments', 'follows'
  const notificationRef = useRef(null);
  const navigate = useNavigate();

  // Close notification panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Fetch notifications data
  useEffect(() => {
    if (!isOpen || !email) return;

    const fetchNotifications = async () => {
      setLoading(true);
      try {
        // Fetch user's posts
        const postsResponse = await axios.get(`http://localhost:3001/api/user/${email}`);
        const userPosts = postsResponse.data;

        // Process likes and comments on user's posts
        let allNotifications = [];

        // Process likes
        for (const post of userPosts) {
          if (post.likes && post.likes.length > 0) {
            for (const likerEmail of post.likes) {
              if (likerEmail !== email) { // Don't notify about your own likes
                allNotifications.push({
                  type: 'like',
                  postId: post._id,
                  postContent: post.post.substring(0, 30) + (post.post.length > 30 ? '...' : ''),
                  userEmail: likerEmail,
                  timestamp: post.updatedAt, // Using post update time as an approximation
                });
              }
            }
          }

          // Process comments
          if (post.comments && post.comments.length > 0) {
            for (const comment of post.comments) {
              if (comment.email !== email) { // Don't notify about your own comments
                allNotifications.push({
                  type: 'comment',
                  postId: post._id,
                  postContent: post.post.substring(0, 30) + (post.post.length > 30 ? '...' : ''),
                  userEmail: comment.email,
                  commentContent: comment.comment.substring(0, 30) + (comment.comment.length > 30 ? '...' : ''),
                  timestamp: comment.createdAt || post.updatedAt,
                });
              }
            }
          }
        }

        // Fetch followers
        const followersResponse = await axios.post('http://localhost:3001/api/followers', { email });
        const followers = followersResponse.data.followers || [];

        // Add followers to notifications
        for (const followerEmail of followers) {
          allNotifications.push({
            type: 'follow',
            userEmail: followerEmail,
            timestamp: new Date().toISOString(), // We don't have the exact follow time
          });
        }

        // Sort by timestamp (newest first)
        allNotifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        // Fetch profile photos for all users in notifications
        const uniqueEmails = [...new Set(allNotifications.map(notif => notif.userEmail))];
        const profilePhotos = {};

        for (const userEmail of uniqueEmails) {
          try {
            const response = await fetch(`http://localhost:3001/api/get-profile?email=${userEmail}`);
            const data = await response.json();
            if (response.ok) {
              profilePhotos[userEmail] = data.profilePhoto;
            }
          } catch (error) {
            console.error(`Error fetching profile for ${userEmail}:`, error);
          }
        }

        // Add profile photos to notifications
        allNotifications = allNotifications.map(notif => ({
          ...notif,
          profilePhoto: profilePhotos[notif.userEmail] || '/profilepic.png'
        }));

        setNotifications(allNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        toast.error("You don't have any notification yet");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [isOpen, email]);

  const handleNotificationClick = (notification) => {
    onClose();
    
    if (notification.type === 'like' || notification.type === 'comment') {
      navigate(`/community/comments/${notification.postId}`);
    } else if (notification.type === 'follow') {
      navigate(`/community/account/${notification.userEmail}`);
    }
  };

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.type === activeTab);

  function timeAgo(dateString) {
    if (!dateString) return "Just now";
    const now = new Date();
    const date = new Date(dateString);
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Notification Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div 
          ref={notificationRef}
          className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all ease-out duration-300 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/80 backdrop-blur-xl z-10 border-b border-gray-200/50">
            <div className="flex justify-between items-center p-6 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🔔</span>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Notifications
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-full hover:bg-gray-100/80 transition-all duration-200 transform hover:scale-110 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Enhanced Tabs */}
            <div className="flex bg-gray-50/80 mx-6 rounded-2xl p-1 mb-4">
              {[
                { key: 'all', label: 'All', icon: '📋' },
                { key: 'like', label: 'Likes', icon: '❤️' },
                { key: 'comment', label: 'Comments', icon: '💬' },
                { key: 'follow', label: 'Follows', icon: '👥' }
              ].map((tab) => (
                <button 
                  key={tab.key}
                  className={`flex-1 py-3 px-4 font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                    activeTab === tab.key 
                      ? 'bg-white text-blue-600 shadow-lg transform scale-105' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 pt-2">
            {loading ? (
              <div className="flex flex-col justify-center items-center h-64">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200"></div>
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent absolute top-0"></div>
                </div>
                <p className="mt-4 text-gray-600 font-medium">Loading notifications...</p>
              </div>
            ) : filteredNotifications.length > 0 ? (
              <div className="space-y-4">
                {filteredNotifications.map((notification, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
                    onClick={() => handleNotificationClick(notification)}
                  >
                    {/* Notification Type Indicator */}
                    <div className={`absolute left-0 top-0 w-1 h-full ${
                      notification.type === 'like' ? 'bg-gradient-to-b from-red-400 to-pink-500' :
                      notification.type === 'comment' ? 'bg-gradient-to-b from-blue-400 to-indigo-500' :
                      'bg-gradient-to-b from-green-400 to-emerald-500'
                    }`}></div>
                    
                    <div className="p-5 pl-8">
                      <div className="flex items-start space-x-4">
                        {/* Profile Picture */}
                        <div className="relative flex-shrink-0">
                          {notification.profilePhoto ? (
                            <img 
                              src={notification.profilePhoto} 
                              alt="User" 
                              className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center border-3 border-white shadow-lg">
                              <span className="text-white text-xl font-bold">
                                {notification.userEmail?.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                          
                          {/* Notification Type Badge */}
                          <div className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-sm ${
                            notification.type === 'like' ? 'bg-gradient-to-r from-red-400 to-pink-500' :
                            notification.type === 'comment' ? 'bg-gradient-to-r from-blue-400 to-indigo-500' :
                            'bg-gradient-to-r from-green-400 to-emerald-500'
                          }`}>
                            <span className="text-white">
                              {notification.type === 'like' ? '❤️' : 
                               notification.type === 'comment' ? '💬' : '👤'}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-bold text-lg text-gray-900 truncate">
                              {notification.userEmail.split('@')[0]}
                            </p>
                            <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                              {timeAgo(notification.timestamp)}
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            {notification.type === 'like' && (
                              <div>
                                <p className="text-gray-700 font-medium mb-1">
                                  Liked your post
                                </p>
                                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 border-l-4 border-red-300">
                                  "{notification.postContent}"
                                </p>
                              </div>
                            )}
                            
                            {notification.type === 'comment' && (
                              <div>
                                <p className="text-gray-700 font-medium mb-1">
                                  Commented on your post
                                </p>
                                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 border-l-4 border-blue-300 mb-2">
                                  "{notification.commentContent}"
                                </p>
                                <p className="text-xs text-gray-500">
                                  On: "{notification.postContent}"
                                </p>
                              </div>
                            )}
                            
                            {notification.type === 'follow' && (
                              <p className="text-gray-700 font-medium">
                                Started following you
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-5xl">📭</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No notifications yet</h3>
                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                  When someone likes your posts, comments, or follows you, you'll see their activity here.
                </p>
              </div>
            )}
          </div>
          
          {/* Footer - Optional */}
          {filteredNotifications.length > 0 && (
            <div className="border-t border-gray-200/50 bg-white/80 backdrop-blur-xl p-4 text-center">
              <p className="text-sm text-gray-500 font-medium">
                Showing {filteredNotifications.length} notification{filteredNotifications.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;