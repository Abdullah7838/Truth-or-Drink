import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Lazy loaded components
const SpinnerAlready = lazy(() => import("./SpinnerAlready"));
const HowToPlay = lazy(() => import("./HowToPlay"));
const HomeBlogs = lazy(() => import("./HomeBlogs"));
const ChatBot = lazy(() => import("./ChatBot"));

const PlayIcon = () => (
  <svg
    className="w-4 h-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
  >
    <path d="M424.4 214.7L72.4 3.7C43.8-12.1 8 6.6 8 41.4v429.1c0 34.8 35.8 53.5 64.4 37.7l352-211c27.6-16.6 27.6-57.6 0-74.5z" />
  </svg>
);

function Home({ setMainUsername }) {
  const [showChat, setShowChat] = useState(false);
  const [loadBelow, setLoadBelow] = useState(false);
  const [posts, setPosts] = useState([]);

  const timeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  useEffect(() => {
    setMainUsername("");

    // Mock posts
    setPosts([
      {
        _id: "1",
        username: "John",
        post: "Hi everyone! Can anyone play Truth or Drink with me #truth",
        postedAt: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
      },
      {
        _id: "2",
        username: "Abdullah",
        post: "Tell me a truth that no one can tell? #truth",
        postedAt: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
      },
    ]);
  }, [setMainUsername]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setLoadBelow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buttons = [
    { to: "/truth-or-drink-online", label: "Play Truth or Drink Online" },
    { to: "/truth-or-drink-offline", label: "Play Truth or Drink Offline" },
    { to: "/truth-or-drink-card-game", label: "Truth or Drink Card Game", badge: "UNO" },
    { to: "/extreme-truth-or-drink-questions", label: "Extreme Truth or Drink", badge: "Hard" },
    { to: "/truth-or-drink-spicy-questions", label: "Truth or Drink Spicy", badge: "Hot" },
    { to: "/truth-or-drink-questions-for-couples", label: "Truth or Drink For Couples", badge: "Extreme", special:true },
    { to: "/drinking-game-online", label: "Drinking Game Online", badge: "Online" },
    { to: "/truth-or-drink-adults", label: "Adult Drinking Games", badge: "NEW" },
    { to: "/truth-or-drink-single-player-mode", label: "Single Player Mode", badge: "BETA" },
    { to: "/truth-or-drink-scary-mommy", label: "Truth or Drink Scary Mommy", badge: "Scary", special: true },
  ];

  return (
    <>
      <Helmet>
        <title>Truth or Drink - Play Drinking Games Online or Offline</title>
        <link rel="canonical" href="https://www.truthordrink.pro/" />
        <meta
          name="description"
          content="Play Truth or Drink online or offline with friends. Choose a mode, spin the wheel, and enjoy fun challenges!"
        />
      </Helmet>

      <main className="min-h-screen bg-indigo-600 flex flex-col items-center text-white">
        <div className="w-full max-w-7xl flex flex-col sm:flex-row sm:gap-8 sm:items-start">

          {/* Sidebar */}
          <div className="hidden sm:block sm:w-80 sm:flex-shrink-0 sm:mt-16 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
              <h2 className="text-lg font-semibold mb-2">Join Our Community of Truth or Drink</h2>
              <p className="text-white/80 text-sm mb-3">Connect with thousands of players worldwide!</p>
              <div className="flex justify-center">
                <button className="text-black bg-white px-6 py-2 rounded-full text-sm font-semibold">
                  Join Community
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-left">Latest Posts</h3>
              <div className="space-y-4">
                {posts.map(post => (
                  <div key={post._id} className="bg-white/80 shadow-lg rounded-xl border border-white/20 p-4 text-gray-900 text-sm">
                    <Link to="/community">
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="font-bold">{post.username}</span>
                          <span className="text-gray-500">@{post.username}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">{timeAgo(post.postedAt)}</span>
                        </div>
                        <p>{post.post}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Section */}
          <section className="w-full max-w-4xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Truth or Drink</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Pick a game mode below and invite your friends — online or offline!
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-4 px-4">
              {buttons.map(({ to, label, badge, special }) => (
                <Link key={to} to={to}>
                  <button className={`relative flex items-center justify-center gap-3 w-full rounded-full px-6 py-3 font-semibold shadow-md transition-all ${special ? "bg-gray-900 text-white border border-gray-700 hover:bg-red-700" : "bg-gray-50 text-gray-900 border border-gray-400 hover:bg-indigo-50"}`}>
                    {badge && (
                      <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{badge}</span>
                    )}
                    <div className={`p-2 rounded-full ${special ? "bg-red-600" : "bg-indigo-500"}`}>
                      <PlayIcon />
                    </div>
                    {label}
                  </button>
                </Link>
              ))}
            </div>

            {/* Mobile Community & Posts */}
            <div className="block sm:hidden mt-8 space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h2 className="text-lg font-semibold mb-2">Join Our Community of Truth or Drink</h2>
                <p className="text-white/80 text-sm mb-3">Connect with thousands of players worldwide!</p>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full">
                  Join Community
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-4">
                {posts.map(post => (
                  <div key={post._id} className="bg-white/90 shadow-lg rounded-xl border border-white/20 p-4 text-gray-900 text-sm">
                    <Link to="/community">
                      <div>
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="font-bold">{post.username}</span>
                          <span className="text-gray-500">@{post.username}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">{timeAgo(post.postedAt)}</span>
                        </div>
                        <p>{post.post}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Spinner */}
        <Suspense fallback={<div className="my-8 w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>}>
          <SpinnerAlready />
        </Suspense>

        {loadBelow && (
          <>
            <Suspense fallback={<div>Loading blogs...</div>}><HomeBlogs /></Suspense>
            <Suspense fallback={<div>Loading how to play...</div>}><HowToPlay /></Suspense>
          </>
        )}
      </main>

      {/* Chat Bot */}
      {showChat && (
        <Suspense fallback={<div>Loading chat...</div>}>
          <div className="fixed bottom-20 right-4 sm:right-6 w-[95%] sm:w-[90%] max-w-sm h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden z-50">
            <ChatBot />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default React.memo(Home);
