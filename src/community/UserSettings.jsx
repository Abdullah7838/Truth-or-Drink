import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function UserSettings({ email, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [userProfiles, setUserProfiles] = useState({});
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen || !email) return;

    // Fetch profile photo
    const fetchProfilePhoto = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/get-profile?email=${email}`);
        const data = await response.json();
        if (response.ok) {
          setProfilePhoto(data.profilePhoto);
          setPreview(data.profilePhoto);
        }
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    // Fetch followers
    const fetchFollowers = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/followers', { email });
        setFollowers(response.data.followers || []);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    // Fetch following (people the user follows)
    const fetchFollowing = async () => {
      try {
        // Get all users
        const usersResponse = await axios.get('http://localhost:3001/api/admin');
        const allUsers = usersResponse.data.data;
        
        // Filter users where the current user is in their followers list
        const followingList = [];
        
        for (const user of allUsers) {
          if (user.followers && user.followers.includes(email)) {
            followingList.push(user.email);
          }
        }
        
        setFollowing(followingList);
      } catch (error) {
        console.error("Error fetching following:", error);
      }
    };

    fetchProfilePhoto();
    fetchFollowers();
    fetchFollowing();
  }, [isOpen, email]);

  // Fetch profile photos for followers and following
  useEffect(() => {
    const fetchUserProfiles = async () => {
      const uniqueUsers = [...new Set([...followers, ...following])];
      const profiles = {};

      for (const userEmail of uniqueUsers) {
        try {
          const response = await fetch(`http://localhost:3001/api/get-profile?email=${userEmail}`);
          const data = await response.json();
          if (response.ok) {
            profiles[userEmail] = data.profilePhoto;
          }
        } catch (error) {
          console.error(`Error fetching profile for ${userEmail}:`, error);
        }
      }

      setUserProfiles(profiles);
    };

    if (followers.length > 0 || following.length > 0) {
      fetchUserProfiles();
    }
  }, [followers, following]);

  // Handle file selection for profile photo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    
    if (file.size > 300 * 1024) { 
      toast.error("Image is too large! Must be under 300KB.");
      return;
    }
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload profile photo
  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image first!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3001/api/upload-profile", {
        email: email,
        image: image,
      });
      setLoading(false);
      toast.success("Profile photo updated successfully!");
      setImage(null);
      setProfilePhoto(res.data.profilePhoto);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to upload profile photo");
    }
  };
  
  // Update username
  const handleUpdateUsername = async () => {
    if (!username) {
      toast.error("Username cannot be empty");
      return;
    }
    
    if (!usernameAvailable) {
      toast.error(usernameError || "Please choose a valid username");
      return;
    }
    
    setLoading(true);
    try {
      // Call the backend to update username
      await axios.post("http://localhost:3001/api/update-username", {
        email,
        username
      });
      
      // Update username in localStorage
      localStorage.setItem('username', username);
      
      setLoading(false);
      toast.success("Username updated successfully!");
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "Failed to update username");
      } else {
        toast.error("Server error. Please try again later.");
      }
    }
  };

  // Handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All password fields are required");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }
    
    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters");
      return;
    }
    
    setLoading(true);
    try {
      // This endpoint needs to be implemented in the backend
      await axios.post("http://localhost:3001/api/change-password", {
        email,
        currentPassword,
        newPassword
      });
      
      setLoading(false);
      toast.success("Password changed successfully!");
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "Current password is incorrect");
      } else {
        toast.error("Failed to change password");
      }
    }
  };

  // Handle password reset request
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (!resetEmail) {
      toast.error("Email is required");
      return;
    }
    
    setLoading(true);
    try {
      // This endpoint needs to be implemented in the backend
      await axios.post("http://localhost:3001/api/reset-password", {
        email: resetEmail
      });
      
      setLoading(false);
      setResetSent(true);
      toast.success("Password reset instructions sent to your email");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send password reset email");
    }
  };

  // Handle user navigation
  const handleUserClick = (userEmail) => {
    onClose();
    navigate(`/community/account/${userEmail}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">User Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 bg-gray-50 p-4">
            <div className="space-y-1">
              <button 
                className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'profile' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile Settings
              </button>
              <button 
                className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'password' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('password')}
              >
                Change Password
              </button>
              <button 
                className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'followers' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('followers')}
              >
                Followers
              </button>
              <button 
                className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'following' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('following')}
              >
                Following
              </button>
              {/* <button 
                className={`w-full text-left px-4 py-3 rounded-lg font-medium ${activeTab === 'reset' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('reset')}
              >
                Reset Password
              </button> */}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Profile Settings</h3>
                
                <div className="flex flex-col items-center mb-8">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                      <img 
                        src={preview || "/profilepic.png"} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </label>
                    <input 
                      type="file" 
                      id="profile-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-900">{email.split('@')[0]}</h4>
                  <p className="text-gray-600">{email}</p>
                  
                  {image && (
                    <div className="mt-4">
                      <button 
                        onClick={handleUpload}
                        disabled={loading}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Uploading...
                          </span>
                        ) : "Save Profile Photo"}
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                  <h4 className="font-medium text-blue-800 mb-2">Account Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Username</p>
                      <p className="font-medium text-gray-900">{email.split('@')[0]}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Followers</p>
                      <p className="font-medium text-gray-900">{followers.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Following</p>
                      <p className="font-medium text-gray-900">{following.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Change Password */}
            {activeTab === 'password' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Change Password</h3>
                
                <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                  <div>
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input 
                      type="password" 
                      id="current-password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your current password"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input 
                      type="password" 
                      id="new-password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your new password"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input 
                      type="password" 
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Confirm your new password"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : "Change Password"}
                  </button>
                </form>
              </div>
            )}
            
            {/* Followers */}
            {activeTab === 'followers' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Followers</h3>
                
                {followers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {followers.map((followerEmail, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => handleUserClick(followerEmail)}
                      >
                        <img 
                          src={userProfiles[followerEmail] || "/profilepic.png"} 
                          alt={followerEmail.split('@')[0]} 
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{followerEmail.split('@')[0]}</p>
                          <p className="text-sm text-gray-600">{followerEmail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <div className="text-5xl mb-4">👥</div>
                    <p className="text-gray-600 font-medium">No followers yet</p>
                    <p className="text-gray-500 text-sm mt-1">When someone follows you, they'll appear here</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Following */}
            {activeTab === 'following' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">People You Follow</h3>
                
                {following.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {following.map((followingEmail, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => handleUserClick(followingEmail)}
                      >
                        <img 
                          src={userProfiles[followingEmail] || "/profilepic.png"} 
                          alt={followingEmail.split('@')[0]} 
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{followingEmail.split('@')[0]}</p>
                          <p className="text-sm text-gray-600">{followingEmail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <div className="text-5xl mb-4">👤</div>
                    <p className="text-gray-600 font-medium">You're not following anyone yet</p>
                    <p className="text-gray-500 text-sm mt-1">When you follow someone, they'll appear here</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Reset Password */}
            {activeTab === 'reset' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Reset Password</h3>
                
                {!resetSent ? (
                  <form onSubmit={handlePasswordReset} className="space-y-4 max-w-md">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-4">
                      <p className="text-yellow-800">If you've forgotten your password, enter your email address below to receive password reset instructions.</p>
                    </div>
                    
                    <div>
                      <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="reset-email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : "Send Reset Instructions"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-5xl mb-4">✉️</div>
                    <h4 className="text-xl font-medium text-green-800 mb-2">Reset Instructions Sent!</h4>
                    <p className="text-green-700">We've sent password reset instructions to your email address.</p>
                    <p className="text-green-600 text-sm mt-4">Please check your inbox and follow the instructions to reset your password.</p>
                    <button 
                      onClick={() => {
                        setResetSent(false);
                        setResetEmail('');
                      }}
                      className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      Send Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;