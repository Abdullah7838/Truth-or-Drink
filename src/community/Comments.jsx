import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comments({ email }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [Uemail, setUEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mypreview, setmyPreview] = useState(null);
  const [Userpreview, setUserPreview] = useState(null);
  const [preview, setPreview] = useState({});

  const navigate = useNavigate();

  const fetchProfileImage = async (email) => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(`https://twitter-backend-inky.vercel.app/api/get-profile?email=${email}`);
      const data = await response.json();
      if (response.ok) {
        setPreview(prev => ({
          ...prev,
          [email]: data.profilePhoto
        }));
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    const fetchMyProfilePhoto = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(`https://twitter-backend-inky.vercel.app/api/get-profile?email=${email}`);
        const data = await response.json();
        if (response.ok) {
          setmyPreview(data.profilePhoto);
        } else {
          toast.error('Error fetching your data!');
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (email) {
      fetchMyProfilePhoto();
    }
  }, [email, comment]);

  useEffect(() => {
    const fetchUserProfilePhoto = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(`https://twitter-backend-inky.vercel.app/api/get-profile?email=${Uemail}`);
        const data = await response.json();
        if (response.ok) {
          setUserPreview(data.profilePhoto);
        } else {
          toast.error('Error fetching user data!');
        }
      } catch (error) {
        toast.error("User Fetch error:", error);
      }
    };

    if (email) {
      fetchUserProfilePhoto();
    }
  }, [Uemail, comment]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postRes = await axios.get(`https://twitter-backend-inky.vercel.app/api/post/${id}`);
        setPost(postRes.data.post);

        const commentsRes = await axios.get(`https://twitter-backend-inky.vercel.app/api/comments/${id}`);
        setComments(commentsRes.data.comments);
        setUEmail(commentsRes.data.email);
        const postsData = commentsRes.data.comments;
        postsData.forEach(post => {
          if (post.email && !preview[post.email]) {
            fetchProfileImage(post.email);
          }
        });
      } catch (error) {
        toast.error("Error fetching comments");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostAndComments();
    const timeout = setTimeout(() => {
      if (!post) {
        setError(true);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [id, post]);

  if (error) {
    return <div className="text-red-600 font-bold text-center text-xl py-10">ERR_CONNECTION_REFUSED</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handlePostComment();
    }
  };

  const handlePostComment = async () => {
    if (comment.trim().length === 0) {
      toast.warning("Please enter a comment.");
      return;
    }

    try {
      // Get username from localStorage
      const username = localStorage.getItem('username');
      
      const res = await axios.post(`https://twitter-backend-inky.vercel.app/api/comments/${id}`, {
        email,
        comment,
        username
      });

      setComments((prevComments) => [
        ...prevComments,
        { 
          email, 
          comment, 
          username,
          commentedAt: new Date().toISOString() 
        },
      ]);
      setComment("");
    } catch (error) {
      toast.error("Error posting the comment");
    }
  };

  const handleAccount = (email) => {
    navigate(`/community/account/${email}`);
  };

  function timeAgo(date) {
    if (!date) return "Just now";
    const now = new Date();
    const diff = now - new Date(date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Post Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <img
                src={Userpreview || "profilepic.png"}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {post.username || post.email.split('@')[0]}'s Post
              </h2>
              <p className="text-sm text-gray-500">{timeAgo(post.postedAt)}</p>
            </div>
          </div>
          <p className="text-lg text-gray-900 break-words whitespace-pre-wrap">
            {post.post}
          </p>
        </div>

        {/* Comments Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Comments</h3>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <img
                        onClick={() => handleAccount(comment.email)}
                        src={preview[comment.email] || "profilepic.png"}
                        alt="User Profile"
                        className="w-full h-full object-cover cursor-pointer"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {comment.username || comment.email.split('@')[0]}
                      </p>
                      <p className="text-xs text-gray-500">{timeAgo(comment.createdAt)}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center py-4">No comments yet.</p>
            )}
          </div>

          {/* Post New Comment */}
          <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 mt-8">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={mypreview || "profilepic.png"}
                  alt="My Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center w-full gap-2">
  <input
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    onKeyDown={handleKeyPress}
    placeholder="Add a comment"
    className="flex-1 min-w-0 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
  <button
    onClick={handlePostComment}
    className="px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
  >
    Post
  </button>
</div>

            </div>
          </div>
        </div>

        {/* Toast Container */}
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{ backgroundColor: "black", color: "white" }}
        />
      </div>
    </div>
  );
}

export default Comments;