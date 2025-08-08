import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Bounce } from 'react-toastify';
import { useParams } from "react-router-dom";

function Account({ logout, Uemail, myemail }) {
    const { email } = useParams();
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState("");
    const [followerEmail, SetfollowerEmail] = useState(Uemail);
    const [followers, SetFollowers] = useState([]);
    const [hide1, setHide] = useState('')
    const [hide2, setHide2] = useState('hidden')
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(()=>{
        if(email===myemail){
            navigate('/community/profile');
        }
    })

    useEffect(() => {
        const fetchProfilePhoto = async () => {
            try {
                const timestamp = new Date().getTime(); 
                const response = await fetch(`http://localhost:3001/api/get-profile?email=${email}`);
                const data = await response.json();
                if (response.ok) {
                    setPreview(data.profilePhoto);
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

    useEffect(() => {
        const fetchFollowers = async () => {
            const followers = await axios.post('http://localhost:3001/api/followers', {
                email
            })
            if (followers.length = 0) {
                SetFollowers(0)
            }
            console.log(followers.data.followers)
            SetFollowers(followers.data.followers.length);
        };
        fetchFollowers();
    }, [hide1, hide2])

    const FollowHandle = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/follow', { email, followerEmail });
            setHide('hidden')
            setHide2('')
            toast.success('Following');
        } catch (err) {
            if (err.response && err.response.status === 400) {
                toast.error("Already Following");
            } else {
                toast.error("Something went wrong! Please try again.");
            }
        }
    };

    const UnfollowHandle = async () => {
        try {
            const res = await axios.post('http://localhost:3001/api/unfollow', { email, followerEmail });
            setHide('')
            setHide2('hidden')
            toast.success('UnFollowed');
        } catch (err) {
            if (err.response && err.response.status === 400) {
                toast.error("Already UnFollowed");
            } else {
                toast.error("Something went wrong! Please try again.");
            }
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/user/${email}`);
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                // toast.error("No posts Found!");
            }
        };

        if (email) {
            fetchPosts();
        }
    }, [email, posts]);

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

    const handleLike = async (postId) => {
        try {
            const res = await axios.post(`http://localhost:3001/api/likes/${postId}`, {
                email,
            });

            const updatedPosts = posts.map((p) =>
                p._id === postId
                    ? { ...p, likes: res.data.likesCount }
                    : p
            );
            setPosts(updatedPosts);
        } catch (error) {
            toast.error("Error liking/unliking post");
        }
    };

    useEffect(() => {
        if (id.length > 0) {
            navigate(`/community/comments/${id}`);
        }
    }, [id])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
            <div className="max-w-4xl mx-auto px-4 py-6">
                {/* Profile Header */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden mb-6">
                    {/* Cover Section */}
                    <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    
                    {/* Profile Info */}
                    <div className="relative px-8 pb-8">
                        {/* Profile Picture */}
                        <div className="flex justify-center -mt-16 mb-6">
                            <div className="relative">
                                {preview ? (
                                    <img 
                                        src={preview} 
                                        alt="Profile" 
                                        className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover bg-white"
                                    />
                                ) : (
                                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                        <span className="text-white text-4xl font-bold">
                                            {email?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {localStorage.getItem('username') || email?.split('@')[0]}
                            </h1>
                            <p className="text-gray-600 text-lg">@{email?.split('@')[0]}</p>
                        </div>

                        {/* Stats & Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            {/* Stats */}
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">{posts.length}</div>
                                    <div className="text-sm text-gray-600 font-medium">Posts</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">{followers}</div>
                                    <div className="text-sm text-gray-600 font-medium">Followers</div>
                                </div>
                            </div>

                            {/* Follow Buttons */}
                            <div className="flex gap-3">
                                <button 
                                    onClick={FollowHandle} 
                                    className={`${hide1} bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                                >
                                    Follow
                                </button>
                                <button 
                                    onClick={UnfollowHandle} 
                                    className={`${hide2} bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                                >
                                    Unfollow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Posts Section */}
                <div className="space-y-4">
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <div 
                                key={post._id} 
                                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex space-x-4">
                                    {/* Post Avatar */}
                                    <div className="flex-shrink-0">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="user"
                                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center border-2 border-white shadow-md">
                                                <span className="text-white text-lg font-semibold">
                                                    {post.email?.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Post Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Post Header */}
                                        <div className="flex items-center space-x-2 mb-3">
                                            <span className="font-bold text-gray-900 text-lg">
                                                {post.username || post.email?.split('@')[0]}
                                            </span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-sm text-gray-500 font-medium">
                                                {timeAgo(post.postedAt)}
                                            </span>
                                        </div>

                                        {/* Post Text */}
                                        <p className="text-gray-800 text-lg leading-relaxed mb-4 whitespace-pre-wrap">
                                            {post.post}
                                        </p>

                                        {/* Post Actions */}
                                        <div className="flex items-center space-x-8 pt-3 border-t border-gray-100">
                                            <button 
                                                onClick={() => setId(post._id)} 
                                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-200 group"
                                            >
                                                <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors duration-200">
                                                    <span className="text-xl">💬</span>
                                                </div>
                                                <span className="font-medium">
                                                    {Array.isArray(post.comments) ? post.comments.length : 0}
                                                </span>
                                            </button>
                                            
                                            <button 
                                                onClick={() => handleLike(post._id)} 
                                                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200 group"
                                            >
                                                <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors duration-200">
                                                    <span className="text-xl">❤️</span>
                                                </div>
                                                <span className="font-medium">
                                                    {Array.isArray(post.likes) ? post.likes.length : 0}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-12 text-center">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                                <span className="text-4xl">📝</span>
                            </div>
                            <p className="text-xl text-gray-600 font-medium">No posts yet</p>
                            <p className="text-gray-500 mt-2">This user hasn't shared anything yet.</p>
                        </div>
                    )}

                    {posts.length > 0 && (
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-6 text-center">
                            <div className="text-gray-600 font-semibold text-lg flex items-center justify-center space-x-2">
                                <span>✨</span>
                                <span>You've reached the end</span>
                                <span>✨</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

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
            )
}

            export default Account
