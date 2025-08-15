import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Admin({ isAdmin }) {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [timeNow, setTimeNow] = useState(new Date());
  const navigate = useNavigate();
  useEffect(() => {
  if (isAdmin===false){
    navigate('/admin/login')
  }
  },[]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("https://twitter-backend-inky.vercel.app/api/admin");
        console.log(res.data.data);
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  const fetchAllPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://twitter-backend-inky.vercel.app/api/posts");
      setPosts([...res.data.data].reverse());
    } catch (err) {
      console.error("Error fetching posts", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPost = async () => {
    if (!email || !newPost) {
      alert("Email and post content are required");
      return;
    }

    try {
      const res = await axios.post("https://twitter-backend-inky.vercel.app/api/posts/post", {
        email,
        post: newPost,
      });
      alert(res.data.message);
      fetchAllPosts();
    } catch (err) {
      console.error("Error creating post", err);
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const res = await axios.post(
        `https://twitter-backend-inky.vercel.app/api/posts/likes/${postId}`,
        {
          email,
        }
      );
      alert(res.data.message);
      fetchAllPosts();
    } catch (err) {
      console.error("Error liking post", err);
    }
  };

  const fetchComments = async (postId) => {
    setSelectedPostId(postId);
    try {
      const res = await axios.get(
        `https://twitter-backend-inky.vercel.app/api/comments/${postId}`
      );
      setComments(res.data.comments);
    } catch (err) {
      console.error("Error fetching comments", err);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`https://twitter-backend-inky.vercel.app/api/comments/${commentId}`);
      toast.success("Comment deleted");
      fetchComments();
    } catch (err) {
      toast.error("Error deleting comment");
      console.error("Error deleting comment:", err);
    }
  };

  const handleAddComment = async () => {
    const comment = prompt("Enter your comment:");
    if (!comment) {
      alert("Comment cannot be empty");
      return;
    }

    try {
      await axios.post(
        `https://twitter-backend-inky.vercel.app/api/posts/comments/${selectedPostId}`,
        {
          email,
          comment,
        }
      );
      fetchComments(selectedPostId);
    } catch (err) {
      console.error("Error adding comment", err);
    }
  };

  const deletePost = async (postId) => {
    try {
      const res = await axios.delete(`https://twitter-backend-inky.vercel.app/api/${postId}`);
      toast.success(res.data.message);
      fetchAllPosts();
    } catch (err) {
      console.error("Error deleting post", err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        `https://twitter-backend-inky.vercel.app/api/users/${userId}`
      );
      toast.success("User deleted successfully", {
        style: {
          color: "black",
        },
      });
      setUsers(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  function timeAgo(date) {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {isAdmin ? (<div>
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
              Admin Dashboard
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full animate-pulse"></div>
            <p className="text-xl text-blue-100 mt-4 font-light">
              Manage users, posts, and content with style
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold">{users.length}</p>
              </div>
              <div className="bg-blue-400 p-3 rounded-full animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-emerald-100 text-sm font-medium">
                  Total Posts
                </p>
                <p className="text-3xl font-bold">{posts.length}</p>
              </div>
              <div className="bg-emerald-400 p-3 rounded-full animate-bounce delay-75">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-purple-100 text-sm font-medium">Time Now</p>
                <p className="text-3xl font-bold">
                  {timeNow.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </p>
              </div>
              <div className="bg-purple-400 p-3 rounded-full animate-bounce delay-150">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Users Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                All Users
                <span className="bg-white text-red-800 bg-opacity-20 px-3 py-1 rounded-full text-lg font-medium">
                  {users.length}
                </span>
              </h2>
            </div>

            <div className="divide-y divide-gray-100">
              {users.map((user, index) => (
                <div
                  key={user._id}
                  className="p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-[1.02] group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <Link to={`/admin/${user.email}`} className="flex-1">
                      <div className="flex items-center space-x-6">
                        <div className="relative">
                          <img
                            src={user.profilePhoto || "defaultProfilePic.jpg"}
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-3 border-white animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              @{user.email}
                            </h3>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                              Active
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-500">
                            <span className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Joined:{" "}
                              {new Date(user.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <button
                      onClick={() => {
                        const confirmation = prompt(
                          'Type "delete user" to confirm deletion:'
                        );
                        if (confirmation === "delete user") {
                          deleteUser(user._id);
                        } else {
                          alert(
                            'User not deleted. You must type "delete user" exactly.'
                          );
                        }
                      }}
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Delete User
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-xl">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
              </div>
              Latest Posts
              <span className="bg-white text-red-800 bg-opacity-20 px-3 py-1 rounded-full text-lg font-medium">
                {posts.length}
              </span>
            </h2>
          </div>

          <div className="p-8 space-y-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
                  <div
                    className="w-16 h-16 border-4 border-blue-600 rounded-full animate-spin absolute top-0 left-0"
                    style={{ clipPath: "inset(0 50% 50% 0)" }}
                  ></div>
                </div>
                <p className="text-gray-600 mt-4 text-lg">
                  Loading amazing content...
                </p>
              </div>
            ) : (
              posts.map((post, index) => (
                <div
                  key={post._id}
                  className="border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Post Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {post.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">
                            {post.email}
                          </p>
                          <p className="text-gray-500 text-sm flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {timeAgo(post.postedAt)}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const confirmation = prompt(
                            'Type "delete" to confirm deleting this post:'
                          );
                          if (confirmation === "delete") {
                            deletePost(post._id);
                          } else {
                            alert(
                              'Post not deleted. You must type "delete" exactly.'
                            );
                          }
                        }}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <p className="text-gray-800 text-lg leading-relaxed break-words whitespace-pre-wrap mb-6">
                      {post.post}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => fetchComments(post._id)}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Comments
                      </button>

                      <button
                        onClick={() => handleLikePost(post._id)}
                        className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Total Likes
                        <span className="bg-white bg-opacity-20 text-black px-2 py-1 rounded-full text-sm">
                          {post.likes.length}
                        </span>
                      </button>
                    </div>

                    {/* Comments Section */}
                    {selectedPostId === post._id && (
                      <div className="mt-8 animate-fadeIn">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                          <h3 className="font-bold text-2xl mb-6 text-gray-900 flex items-center gap-3">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-xl">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            Comments
                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-lg">
                              {comments.length}
                            </span>
                          </h3>

                          <div className="space-y-4 mb-6">
                            {comments.map((comment, commentIndex) => (
                              <div
                                key={comment._id}
                                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                                style={{
                                  animationDelay: `${commentIndex * 100}ms`,
                                }}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {comment.email.charAt(0).toUpperCase()}
                                      </div>
                                      <p className="text-gray-900 font-bold">
                                        {comment.email}
                                      </p>
                                    </div>
                                    <p className="text-gray-700 ml-11 leading-relaxed">
                                      {comment.comment}
                                    </p>
                                  </div>
                                  <button
                                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 ml-4"
                                    onClick={() => deleteComment(comment._id)}
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                                        clipRule="evenodd"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    Delete
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* <button
                            onClick={handleAddComment}
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 w-full justify-center"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Add Comment
                          </button> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      />

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
          90% {
            transform: translateY(-2px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        /* Gradient text effect */
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Hover glow effect */
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
      `}</style>
      </div>):(<div className="text-black">
        Please Login to Continue
      </div>)}
    </div>
  );
}

export default Admin;
