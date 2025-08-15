import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function UsersAdmin({ isAdmin }) {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin === false) {
      navigate("/admin/login");
    }
  }, []);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://twitter-backend-inky.vercel.app/api/admin`);
        setUser(res.data.data[0]);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await axios.get(`https://twitter-backend-inky.vercel.app/api/user/${email}`);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    fetchPosts();
  }, [email]);

  const fetchComments = async (postId) => {
    setSelectedPostId(postId);
    try {
      const res = await axios.get(
        `https://twitter-backend-inky.vercel.app/api/comments/${postId}`
      );
      setComments(res.data.comments);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://twitter-backend-inky.vercel.app/api/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
      toast.success("Post deleted successfully!", {
        style: {
          color: "black",
        },
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post!", {
        style: {
          color: "black",
        },
      });
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`https://twitter-backend-inky.vercel.app/api/comments/${commentId}`);
      setComments(comments.filter((comment) => comment._id !== commentId));
      toast.success("Comment deleted successfully!", {
        style: {
          color: "black",
        },
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment!", {
        style: {
          color: "black",
        },
      });
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
        {isAdmin && (
          <div>
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
                <div
                  className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin absolute top-0 left-0"
                  style={{ clipPath: "inset(0 50% 50% 0)" }}
                ></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Loading User Profile
              </h2>
              <p className="text-gray-500">
                Please wait while we fetch the data...
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {isAdmin ? (
        <div>
          {/* Header with Back Button */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white  bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back
                </button>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <h1 className="text-4xl font-extrabold text-white tracking-tight">
                    User Profile
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full animate-pulse mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            {user ? (
              <div className="space-y-8">
                {/* User Info Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
                    <div className="flex items-center gap-6">
                      {/* <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {user.email.charAt(0).toUpperCase()}
                  </div> */}
                      <img
                        src={user.profilePhoto || "defaultProfilePic.jpg"}
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-blue-200 transition-all duration-300 group-hover:shadow-xl"
                      />
                      <div>
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                          {user.email}
                          <span className="bg-green-400 px-3 py-1 rounded-full text-sm font-medium text-green-900">
                            Active
                          </span>
                        </h2>
                        <p className="text-emerald-100 text-lg flex items-center gap-2 mt-2">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Joined: {new Date(user.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-blue-100 text-sm font-medium">
                              Total Posts
                            </p>
                            <p className="text-3xl font-bold">{posts.length}</p>
                          </div>
                          <div className="bg-blue-400 p-3 rounded-full">
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

                      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-emerald-100 text-sm font-medium">
                              Total Comments
                            </p>
                            <p className="text-3xl font-bold">
                              {posts.reduce(
                                (total, post) =>
                                  total +
                                  (Array.isArray(post.comments)
                                    ? post.comments.length
                                    : 0),
                                0
                              )}
                            </p>
                          </div>
                          <div className="bg-emerald-400 p-3 rounded-full">
                            <svg
                              className="w-8 h-8 text-white"
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
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-100 text-sm font-medium">
                              Total Likes
                            </p>
                            <p className="text-3xl font-bold">
                              {posts.reduce(
                                (total, post) =>
                                  total +
                                  (Array.isArray(post.likes)
                                    ? post.likes.length
                                    : 0),
                                0
                              )}
                            </p>
                          </div>
                          <div className="bg-purple-400 p-3 rounded-full">
                            <svg
                              className="w-8 h-8 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts Section */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                    <h3 className="text-3xl font-bold text-white flex items-center gap-3">
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
                      User Posts
                      <span className="bg-white bg-opacity-20 px-3 py-1 text-red-700 rounded-full text-lg font-medium">
                        {posts.length}
                      </span>
                    </h3>
                  </div>

                  <div className="p-8">
                    {posts.length > 0 ? (
                      <div className="space-y-8">
                        {posts.map((post, index) => (
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
                                    {post.email
                                      .split("@")[0]
                                      .charAt(0)
                                      .toUpperCase()}
                                  </div>
                                  <div>
                                    <p className="font-bold text-gray-900 text-lg">
                                      @{post.email.split("@")[0]}
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
                                  Delete Post
                                </button>
                              </div>
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                              <div className="mb-6">
                                <h4 className="text-gray-600 font-semibold mb-2">
                                  Content:
                                </h4>
                                <p className="text-gray-800 text-lg leading-relaxed break-words whitespace-pre-wrap bg-gray-50 p-4 rounded-xl border-l-4 border-blue-500">
                                  {post.post}
                                </p>
                              </div>

                              {/* Post Stats */}
                              <div className="flex flex-wrap gap-4 mb-6">
                                <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-xl flex items-center gap-2">
                                  <svg
                                    className="w-5 h-5 text-blue-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="font-semibold text-blue-700">
                                    Comments:
                                  </span>
                                  <span className="font-bold text-blue-900">
                                    {Array.isArray(post.comments)
                                      ? post.comments.length
                                      : 0}
                                  </span>
                                </div>

                                <div className="bg-gradient-to-r from-pink-100 to-pink-200 px-4 py-2 rounded-xl flex items-center gap-2">
                                  <svg
                                    className="w-5 h-5 text-pink-600"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="font-semibold text-pink-700">
                                    Likes:
                                  </span>
                                  <span className="font-bold text-pink-900">
                                    {Array.isArray(post.likes)
                                      ? post.likes.length
                                      : 0}
                                  </span>
                                </div>
                              </div>

                              {/* Action Button */}
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

                              {/* Comments Section */}
                              {selectedPostId === post._id &&
                                comments.length > 0 && (
                                  <div className="mt-8 animate-fadeIn">
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                                      <h4 className="font-bold text-2xl mb-6 text-gray-900 flex items-center gap-3">
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
                                      </h4>

                                      <div className="space-y-4">
                                        {comments.map(
                                          (comment, commentIndex) => (
                                            <div
                                              key={comment._id}
                                              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                                              style={{
                                                animationDelay: `${
                                                  commentIndex * 100
                                                }ms`,
                                              }}
                                            >
                                              <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                  <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                      {comment.email
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                    </div>
                                                    <div>
                                                      <p className="text-gray-900 font-bold">
                                                        {comment.email}
                                                      </p>
                                                      <p className="text-gray-500 text-xs flex items-center gap-1">
                                                        <svg
                                                          className="w-3 h-3"
                                                          fill="currentColor"
                                                          viewBox="0 0 20 20"
                                                        >
                                                          <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                            clipRule="evenodd"
                                                          />
                                                        </svg>
                                                        {timeAgo(
                                                          comment.createdAt
                                                        )}
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg ml-13">
                                                    {comment.comment}
                                                  </p>
                                                </div>
                                                <button
                                                  onClick={() => {
                                                    const confirmation = prompt(
                                                      'Type "delete" to confirm deleting this comment:'
                                                    );
                                                    if (
                                                      confirmation === "delete"
                                                    ) {
                                                      deleteComment(
                                                        comment._id
                                                      );
                                                    } else {
                                                      alert(
                                                        'Comment not deleted. You must type "delete" exactly.'
                                                      );
                                                    }
                                                  }}
                                                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 ml-4"
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
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-12 h-12 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-600 mb-2">
                          No Posts Found
                        </h3>
                        <p className="text-gray-500">
                          This user hasn't posted anything yet.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-red-200 to-red-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  User Not Found
                </h3>
                <p className="text-gray-500">
                  Unable to load user information.
                </p>
              </div>
            )}
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
              backgroundColor:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          />

          {/* Custom CSS for animations */}
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
        </div>
      ) : (
        <div>Please Login to Continue</div>
      )}
    </div>
  );
}

export default UsersAdmin;
