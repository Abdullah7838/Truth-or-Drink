import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Main({ email: propEmail, isLogin }) {
  const [post, setPost] = useState("");
  const [email, setEmail] = useState(propEmail || "");
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [preview, setPreview] = useState({});
  const [profile, setProfile] = useState({});
  const [id, setId] = useState("");
  const [afterLike, setAfterLike] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [activeHashtag, setActiveHashtag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("https://twitter-backend-inky.vercel.app/api/admin");
        const data = res.data.data;
        const userFound = data.some((user) => user.email === email);
        if (!userFound) {
          navigate("/community/not-found");
          setTimeout(() => {
            navigate("/community/signup");
          }, 2000);
        } else {
          if (!username) {
            const storedUsername = localStorage.getItem("username");
            setUsername(storedUsername || email.split("@")[0]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [posts, id, afterLike, email]);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await fetch(
          `https://twitter-backend-inky.vercel.app/api/get-profile?email=${email}`
        );
        const data = await response.json();
        if (response.ok) {
          setProfile(data.profilePhoto);
        } else {
          console.error("Error:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (email) {
      fetchProfilePhoto();
    }
  }, [email]);

  const fetchProfileImage = async (email) => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(
        `https://twitter-backend-inky.vercel.app/api/get-profile?email=${email}`
      );
      const data = await response.json();
      if (response.ok) {
        setPreview((prev) => ({
          ...prev,
          [email]: data.profilePhoto,
        }));
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("https://twitter-backend-inky.vercel.app/api/post");
        const postsData = res.data.posts.reverse();
        setPosts(postsData);
        setAllPosts(postsData);

        postsData.forEach((post) => {
          if (post.email && !preview[post.email]) {
            fetchProfileImage(post.email);
          }
        });

        fetchTrendingHashtags();
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          toast.error("Connection Error!");
          return;
        }
        toast.error("Error fetching posts");
      }
    };

    fetchAllPosts();
  }, [afterLike]);

  const handleLike = async (postId) => {
    try {
      const res = await axios.post(
        `https://twitter-backend-inky.vercel.app/api/likes/${postId}`,
        {
          email,
        }
      );

      const updatedPosts = posts.map((p) =>
        p._id === postId ? { ...p, likes: res.data.likesCount } : p
      );
      setAfterLike(!afterLike);
      setPosts(updatedPosts);
    } catch (error) {
      toast.error("Error liking/unliking post");
    }
  };

  const handleAccount = (email) => {
    navigate(`/community/account/${email}`);
  };

  const handlePost = async () => {
    if (!post.trim()) {
      toast.warning("Please write something");
      return;
    }
    if (post.length <= 2) {
      toast.warning("Text is too short");
      return;
    }
    if (post.length >= 280) {
      toast.warning("Text is too Long");
      return;
    }

    setIsPosting(true);
    try {
      const res = await axios.post("https://twitter-backend-inky.vercel.app/api/post", {
        email,
        post,
        username: username || email.split("@")[0],
      });

      toast.success("Posted Successfully!");
      setPosts((prevPosts) => [
        {
          _id: res.data.post._id,
          email,
          post,
          username: username || email.split("@")[0],
          postedAt: new Date().toISOString(),
          likes: [],
        },
        ...prevPosts,
      ]);
      setPost("");

      fetchTrendingHashtags();
    } catch (error) {
      toast.error(
        error.response?.status === 400
          ? "Login expired, please login again"
          : "Server Error"
      );
    } finally {
      setIsPosting(false);
    }
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

  useEffect(() => {
    if (id.length > 0) {
      navigate(`/community/comments/${id}`);
    }
  }, [id]);

  const fetchTrendingHashtags = async () => {
    try {
      const response = await axios.get(
        "https://twitter-backend-inky.vercel.app/api/trending-hashtags"
      );
      if (response.data && response.data.hashtags) {
        setTrendingHashtags(response.data.hashtags);
      }
    } catch (error) {
      console.error("Error fetching trending hashtags:", error);
    }
  };

  const filterPostsByHashtag = async (hashtag) => {
    try {
      if (activeHashtag === hashtag) {
        setActiveHashtag(null);
        const res = await axios.get("https://twitter-backend-inky.vercel.app/api/post");
        const postsData = res.data.posts.reverse();
        setPosts(postsData);
      } else {
        setActiveHashtag(hashtag);
        const res = await axios.get(
          `https://twitter-backend-inky.vercel.app/api/post?hashtag=${hashtag}`
        );
        if (res.data && res.data.posts) {
          const postsData = res.data.posts.reverse();
          setPosts(postsData);
        }
      }
    } catch (error) {
      console.error("Error filtering posts by hashtag:", error);
      toast.error("Failed to filter posts");
    }
  };

  const RedirecttoFriends = () => {
    navigate('/community/find/friends')
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {isLogin ? (
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl mb-6 border border-white/20">
            <div className="px-8 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-center font-bold text-2xl rounded-t-2xl">
              <div className="flex items-center justify-center space-x-3">
                <span>Home Feed</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={profile || "profilepic.png"}
                      alt="Your Profile"
                      className="w-20 h-20 rounded-full mx-auto border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900">
                    {username || email.split("@")[0]}
                  </h3>
                  <p className="text-sm text-gray-500">
                    @{username || email.split("@")[0]}
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-gray-900 mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Posts</span>
                    <span className="font-semibold text-blue-600">
                      {posts.filter((p) => p.email === email).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Likes</span>
                    <span className="font-semibold text-red-500">
                      {posts
                        .filter((p) => p.email === email)
                        .reduce(
                          (sum, p) =>
                            sum + (Array.isArray(p.likes) ? p.likes.length : 0),
                          0
                        )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mobile-only Trending Hashtags */}
              <div className="lg:hidden bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-gray-900">Trending Now</h4>
                  {activeHashtag && (
                    <button
                      onClick={() => filterPostsByHashtag(activeHashtag)}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1 hover:bg-blue-200 transition-colors duration-200"
                    >
                      <span>#{activeHashtag}</span>
                      <span className="font-bold">×</span>
                    </button>
                  )}
                </div>
                <div className="space-y-3">
                  {trendingHashtags.length > 0 ? (
                    trendingHashtags.map((hashtag, index) => {
                      const gradients = [
                        "from-blue-50 to-purple-50",
                        "from-green-50 to-blue-50",
                        "from-purple-50 to-pink-50",
                        "from-yellow-50 to-orange-50",
                        "from-pink-50 to-red-50",
                      ];
                      const gradient = gradients[index % gradients.length];

                      return (
                        <div
                          key={hashtag.tag}
                          className={`p-3 bg-gradient-to-r ${gradient} rounded-lg cursor-pointer hover:shadow-md transition-all duration-200`}
                          onClick={() => filterPostsByHashtag(hashtag.tag)}
                        >
                          <p className="font-medium text-gray-800">
                            #{hashtag.tag}
                          </p>
                          <p className="text-sm text-gray-600">
                            {hashtag.count} {hashtag.count === 1 ? "post" : "posts"}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-600">No trending hashtags yet</p>
                      <p className="text-sm text-gray-500">
                        Be the first to use a hashtag!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Create Post */}
              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={profile || "profilepic.png"}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-blue-200 shadow-sm flex-shrink-0"
                    />
                    <div className="flex-1">
                      <textarea
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none bg-gray-50/50"
                        placeholder="What's on your mind today? 🤔"
                        rows="4"
                      />
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-sm font-medium ${
                              post.length > 250
                                ? "text-red-500"
                                : post.length > 200
                                ? "text-orange-500"
                                : "text-gray-500"
                            }`}
                          >
                            {post.length}/280
                          </span>
                          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-200 ${
                                post.length > 250
                                  ? "bg-red-500"
                                  : post.length > 200
                                  ? "bg-orange-500"
                                  : "bg-blue-500"
                              }`}
                              style={{ width: `${(post.length / 280) * 100}%` }}
                            />
                          </div>
                        </div>
                        <button
                          onClick={handlePost}
                          disabled={
                            isPosting ||
                            !post.trim() ||
                            post.length <= 2 ||
                            post.length >= 280
                          }
                          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                          {isPosting ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Posting...</span>
                            </div>
                          ) : (
                            "Post"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Feed */}
              <div className="space-y-6">
                {activeHashtag && (
                  <div className="bg-blue-50 p-4 rounded-xl mb-4 flex justify-between items-center">
                    <div>
                      <p className="text-blue-700 font-medium">
                        Showing posts with{" "}
                        <span className="font-bold">#{activeHashtag}</span>
                      </p>
                      <p className="text-sm text-blue-600">
                        {posts.length} {posts.length === 1 ? "post" : "posts"}{" "}
                        found
                      </p>
                    </div>
                    <button
                      onClick={() => filterPostsByHashtag(activeHashtag)}
                      className="bg-white text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-100 transition-colors duration-200"
                    >
                      Clear filter
                    </button>
                  </div>
                )}
                {posts.length > 0 ? (
                  posts.map((post, index) => (
                    <div
                      key={post._id}
                      className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="p-6">
                        <div className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              onClick={() => handleAccount(post.email)}
                              src={preview[post.email] || "profilepic.png"}
                              alt="User Profile"
                              className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-200 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span
                                  onClick={() => handleAccount(post.email)}
                                  className="font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                                >
                                  {post.username || post.email.split("@")[0]}
                                </span>
                                <span
                                  onClick={() => handleAccount(post.email)}
                                  className="text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                                >
                                  @{post.username || post.email.split("@")[0]}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500">
                                  {timeAgo(post.postedAt)}
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-800 leading-relaxed break-words whitespace-pre-wrap mb-4 text-lg">
                              {post.post.split(/(#\w+)/).map((part, i) => {
                                if (part.startsWith("#")) {
                                  const hashtag = part.substring(1);
                                  return (
                                    <span
                                      key={i}
                                      className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        filterPostsByHashtag(hashtag);
                                      }}
                                    >
                                      {part}
                                    </span>
                                  );
                                }
                                return part;
                              })}
                            </p>

                            <div className="flex items-center space-x-8 pt-3 border-t border-gray-100">
                              <button
                                onClick={() => setId(post._id)}
                                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-all duration-200 group/button"
                              >
                                <div className="p-2 rounded-full group-hover/button:bg-blue-50 transition-colors duration-200">
                                  <span className="text-lg">💬</span>
                                </div>
                                <span className="font-medium">
                                  {Array.isArray(post.comments)
                                    ? post.comments.length
                                    : 0}
                                </span>
                              </button>

                              <button
                                onClick={() => handleLike(post._id)}
                                className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-all duration-200 group/button"
                              >
                                <div className="p-2 rounded-full group-hover/button:bg-red-50 transition-colors duration-200">
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    className="text-red-500 hover:scale-110 transition-transform duration-200"
                                  />
                                </div>
                                <span className="font-medium">
                                  {Array.isArray(post.likes)
                                    ? post.likes.length
                                    : 0}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl border border-white/20 p-12 text-center">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-xl text-gray-600 font-medium mb-2">
                      No posts yet
                    </p>
                    <p className="text-gray-500">
                      Be the first to share something!
                    </p>
                  </div>
                )}
              </div>

              {posts.length > 0 && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center space-x-2 text-gray-500 font-medium">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
                    <span className="text-lg">
                      🎉 You've reached the end! 🎉
                    </span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-gray-900">Trending Now</h4>
                  {activeHashtag && (
                    <button
                      onClick={() => filterPostsByHashtag(activeHashtag)}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1 hover:bg-blue-200 transition-colors duration-200"
                    >
                      <span>#{activeHashtag}</span>
                      <span className="font-bold">×</span>
                    </button>
                  )}
                </div>
                <div className="space-y-3">
                  {trendingHashtags.length > 0 ? (
                    trendingHashtags.map((hashtag, index) => {
                      const gradients = [
                        "from-blue-50 to-purple-50",
                        "from-green-50 to-blue-50",
                        "from-purple-50 to-pink-50",
                        "from-yellow-50 to-orange-50",
                        "from-pink-50 to-red-50",
                      ];
                      const gradient = gradients[index % gradients.length];

                      return (
                        <div
                          key={hashtag.tag}
                          className={`p-3 bg-gradient-to-r ${gradient} rounded-lg cursor-pointer hover:shadow-md transition-all duration-200`}
                          onClick={() => filterPostsByHashtag(hashtag.tag)}
                        >
                          <p className="font-medium text-gray-800">
                            #{hashtag.tag}
                          </p>
                          <p className="text-sm text-gray-600">
                            {hashtag.count}{" "}
                            {hashtag.count === 1 ? "post" : "posts"}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-gray-600">No trending hashtags yet</p>
                      <p className="text-sm text-gray-500">
                        Be the first to use a hashtag!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-gray-900 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <a href='/' aria-label="Play Truth or drink">
                  <button className=" cursor-pointer w-full p-3 mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium">
                    🎮 Play Truth or Drink
                  </button>
                  </a>
                  <button
                    onClick={RedirecttoFriends}
                    className="cursor-pointer w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 font-medium"
                  >
                    👥 Find Friends
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-12 max-w-md text-center border border-white/20">
            <div className="text-6xl mb-6">🔐</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome Back!
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Please sign in to continue to your feed and connect with your
              community.
            </p>
            <a
              href="/login"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl transform hover:-translate-y-1"
            >
              Sign In Now
            </a>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}