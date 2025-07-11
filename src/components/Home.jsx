import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaUserFriends,
  FaGlassCheers,
  FaCommentDots,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import HowToPlay from "./HowToPlay";
import { FaPlay } from "react-icons/fa";
import HomeBlogs from "./HomeBlogs";
import { Helmet } from "react-helmet-async";
import ChatBot from "./ChatBot";
const SpinnerAlready = React.lazy(() => import("./SpinnerAlready"));
const SpinnerWheel = React.lazy(() => import("./SpinnerWheel"));

function Home({ setMainUsername }) {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setMainUsername("");
  }, []);

  return (
    <>
      <Helmet>
        <title>Truth or Drink - Play Drinking Games Online or Offline</title>
        <link rel="canonical" href="https://www.truthordrink.pro/" />
        <meta
          name="description"
          content="Play Truth or Drink online or offline with friends. Choose a mode, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online party game, spin wheel game, drink game , online game "
        />
        <meta
          property="og:title"
          content="Truth or Drink– Play Drinking Games Online or Offline"
        />
        <meta
          property="og:description"
          content="Play Truth or Drink with friends, online or offline! No signup required. Fun guaranteed!"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center text-white pt-12">
        {/* Header Box */}
        <div className="w-full max-w-4xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Truth or Drink
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Pick a game mode below and invite your friends — online or offline!
          </p>

          {/* Game Options */}
          {/* Game Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-semibold w-full max-w-2xl mx-auto mt-12 px-4">
            {/* Play Online */}
            <Link aria-label="Play Online" to="/drink-room">
              <button
                aria-label="Play online"
                className="flex items-center justify-center gap-3 w-full cursor-pointer bg-white text-gray-900 border border-gray-400 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-teal-50 transition-all duration-200 active:scale-95 active:bg-teal-100"
              >
                <div className="bg-teal-500 p-2 rounded-full shadow-sm">
                  <FaPlay className="text-white w-4 h-4" />
                </div>
                Play Online
              </button>
            </Link>

            {/* Play Offline */}
            <Link aria-label="Play Offline" to="/offline-truth-or-drink">
              <button
                aria-label="Play Offline"
                className="flex items-center justify-center gap-3 w-full cursor-pointer bg-white text-gray-900 border border-gray-400 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-teal-50 transition-all duration-200 active:scale-95 active:bg-teal-100"
              >
                <div className="bg-teal-500 p-2 rounded-full shadow-sm">
                  <FaPlay className="text-white w-4 h-4" />
                </div>
                Play Offline
              </button>
            </Link>
            

            {/* Play Ultimate – centered full on mobile, half on PC */}
            <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <Link aria-label="Quiz Mode" to="/quick-match">
                <div className="relative w-full">
                  {/* NEW Badge */}
                  <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md z-10">
                    Online
                  </span>

                  {/* Button */}
                  <button
                    aria-label="Quiz Mode"
                    className="flex items-center justify-center gap-3 w-full cursor-pointer bg-gray-50 text-gray-900 border border-gray-400 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-indigo-50 transition-all duration-200 active:scale-95 active:bg-indigo-100"
                  >
                    <div className="bg-indigo-500 p-2 rounded-full shadow-sm">
                      <FaPlay className="text-white w-4 h-4" />
                    </div>
                    Quick Match
                  </button>
                </div>
              </Link>

              <Link aria-label="Quiz Mode" to="/quiz">
                <div className="relative w-full">
                  {/* NEW Badge */}
                  <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md z-10">
                    NEW
                  </span>

                  {/* Button */}
                  <button
                    aria-label="Quiz Mode"
                    className="flex items-center justify-center gap-3 w-full cursor-pointer bg-gray-50 text-gray-900 border border-gray-400 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-indigo-50 transition-all duration-200 active:scale-95 active:bg-indigo-100"
                  >
                    <div className="bg-indigo-500 p-2 rounded-full shadow-sm">
                      <FaPlay className="text-white w-4 h-4" />
                    </div>
                    Quiz Mode
                  </button>
                </div>
              </Link>

            </div>

            <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <Link aria-label="Play Truth Running" to="/truth-running">
                <div className="relative w-full">
                  {/* NEW Badge */}
                  <span className="absolute -top-2 -left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md z-10">
                    BETA
                  </span>

                  {/* Button */}
                  <button
                    aria-label="Play Running"
                    className="flex items-center justify-center gap-3 w-full cursor-pointer bg-gray-50 text-gray-900 border border-gray-400 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-indigo-50 transition-all duration-200 active:scale-95 active:bg-indigo-100"
                  >
                    <div className="bg-indigo-500 p-2 rounded-full shadow-sm">
                      <FaPlay className="text-white w-4 h-4" />
                    </div>
                    Truth Running
                  </button>
                </div>
              </Link>

              <Link aria-label="Play Truth or Drink Ultimate" to="/ultimate">
                <button
                  aria-label="Play Ultimate"
                  className="flex items-center justify-center gap-3 w-full cursor-pointer bg-gray-900 text-white border border-gray-700 rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-red-700 transition-all duration-200 active:scale-95 active:bg-red-800"
                >
                  <div className="bg-red-600 p-2 rounded-full shadow-sm">
                    <FaPlay className="text-white w-4 h-4" />
                  </div>
                  Play Ultimate
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- Spinner Wheel Section --> */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center my-8">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <div className="w-full max-w-4xl mb-12">
            <SpinnerAlready />
          </div>
        </Suspense>

        <div className="w-full">
          <HomeBlogs />
        </div>

        {/* How to Play Section */}
        <div className="w-full">
          <HowToPlay />
        </div>
      </div>

      {/* 💬 Floating Chat Button */}
      {/* <ChatLauncher showChat={showChat} setShowChat={setShowChat} /> */}

      {showChat && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[95%] sm:w-[90%] max-w-sm h-[80vh] max-h-screen bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col">
          <ChatBot />
        </div>
      )}
    </>
  );
}

export default Home;
