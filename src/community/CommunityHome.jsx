import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Play,
  Users,
  Zap,
  Star,
  ArrowRight,
  Gamepad2,
  Trophy,
} from "lucide-react";
import { Helmet } from "react-helmet-async";


function CommunityHome({ email }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (email === false || email === true) return;
    if (email !== "" && email !== null) {
      navigate("/community/home");
    }
  }, [email, navigate]);

  return (
    <>
    <Helmet>
        <title>Truth or Drink Community - Play Drinking Games Online or Offline</title>
        <meta
          name="description"
          content="Join Truth or Drink Community Play Drinking Games Online or Offline"
        />
        <meta
          name="keywords"
          content="truth or drink, online party game, spin wheel game, drink game , online game "
        />
        <meta
          property="og:title"
          content="Truth or Drink Community– Play Drinking Games Online or Offline"
        />
        <meta
          property="og:description"
          content="Play Truth or Drink with friends, online or offline! No signup required. Fun guaranteed!"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div
          className={`container mx-auto px-6 pt-12 pb-32 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Multiplayer Truth or Drink Game
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Truth or Drink
              </span>
              <br />
              <span className="text-4xl md:text-5xl font-bold text-white/90">
                Pro Community
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with friends, share your wildest memes, take on daring
              truths, and build lasting memories in the ultimate multiplayer
              gaming experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/community/signup"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center"
              >
                Join Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/community/login"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Log In
              </Link>
            </div>

            {/* Play Game Buttons Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white cursor-pointer font-bold text-lg mb-2">
                  Quick Match
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Jump into a game instantly
                </p>
                <Link to="/" aria-label="truthordrink">
                  <button className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                    Play Now
                  </button>
                </Link>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Create Room
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  Start a private game with your friends
                </p>
                <Link to="/drink-room" aria-label="online truth or drink">
                  <button className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all">
                    Create Room
                  </button>
                </Link>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <Link to="/ultimate" className="block">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Ultimate
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    There is no turning back.
                  </p>
                  <button className="w-full cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                    Play Ultimate
                  </button>
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Lightning Fast
                </h3>
                <p className="text-white/60">
                  Real-time multiplayer gaming with zero lag
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Global Community
                </h3>
                <p className="text-white/60">
                  Connect with players from around the world
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Epic Games
                </h3>
                <p className="text-white/60">
                  Thousands of questions, dares, and challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </div>
    </>
  );
}

export default CommunityHome;
