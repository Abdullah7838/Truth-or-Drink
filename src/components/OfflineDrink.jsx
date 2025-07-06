import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { FaBeer, FaQuestion } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import truth from "./All-Truths/truths";

const drinkAnimations = ["🍺", "🥃", "🍷", "🍹", "🍸", "🥂"];

const modes = [
  { id: "normal", title: "Normal", desc: "Family-friendly fun" },
  { id: "party", title: "Party", desc: "Spicy and daring" },
  { id: "18+", title: "18+", desc: "Adults only 🔞" },
];

const OfflineDrink = () => {
  const [players, setPlayers] = useState([]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [turn, setTurn] = useState(0);
  const [action, setAction] = useState(null);
  const [showScare, setShowScare] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [mode, setMode] = useState(null);
  const [shuffledTruths, setShuffledTruths] = useState([]);
  const [truthIndex, setTruthIndex] = useState(0);
  const [completedTurns, setCompletedTurns] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const addPlayer = () => {
    if (input.trim()) {
      setPlayers([...players, input.trim()]);
      setInput("");
    }
  };

  const startGame = () => {
    if (players.length >= 1 && mode) {
      setShuffledTruths(shuffleArray(truth[mode]));
      setStarted(true);
      setTurn(0);
      setCompletedTurns(0);
      setGameOver(false);
    }
  };

  const nextTurn = () => {
    setAction(null);
    const next = (turn + 1) % players.length;
    setTurn(next);
    setCompletedTurns((prev) => prev + 1);
    setGameOver(false);

    if (completedTurns + 1 >= players.length) {
      setGameOver(true);
    }
  };

  const scareThenShow = (callback) => {
    setShowScare(true);
    setConfettiKey((prev) => prev + 1);
    setTimeout(() => {
      setShowScare(false);
      callback();
    }, 2500);
  };

  const handleTruth = () => {
    scareThenShow(() => {
      const q = shuffledTruths[truthIndex % shuffledTruths.length];
      setAction({ type: "truth", content: q });
      setTruthIndex((prev) => prev + 1);
    });
  };

  const handleDrink = () => {
    scareThenShow(() => {
      const random =
        drinkAnimations[Math.floor(Math.random() * drinkAnimations.length)];
      setAction({ type: "drink", content: random });
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white flex items-center justify-center p-4 sm:p-6">
      <Helmet>
        <title>Truth or Drink – Offline</title>
      </Helmet>

      <AnimatePresence>
        {showScare && (
          <>
            <Confetti
              key={confettiKey}
              numberOfPieces={400}
              recycle={false}
              width={windowSize.width}
              height={windowSize.height}
              gravity={0.4}
              colors={["#ff0000", "#990000", "#000000"]}
              run={true}
            />
            <motion.div
              className="absolute inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center text-5xl font-extrabold text-red-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1],
                rotate: [0, 5, -5, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2 }}
            >
              💀 Get Ready
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full max-w-lg sm:max-w-2xl bg-gray-800/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
        {!started ? (
          <>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-300 tracking-tight">
              Truth or Drink
            </h1>
            <div className="flex justify-center items-center text-pink-300">
              <p>Choose Any Mode to Start</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                    mode === m.id
                      ? "bg-pink-500 text-white ring-2 ring-pink-300"
                      : "bg-gray-700/50 text-gray-200 hover:bg-gray-600/50"
                  }`}
                >
                  <div className="text-lg font-semibold">{m.title}</div>
                  <div className="text-sm text-gray-300 mt-1">{m.desc}</div>
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter player name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                className="w-full p-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              <button
                onClick={addPlayer}
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold text-white transition"
              >
                Add
              </button>
            </div>

            {players.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {players.map((p, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/30 px-3 py-1 rounded-full text-sm font-medium text-white"
                  >
                    {p}
                  </span>
                ))}
              </div>
            )}

            <button
              onClick={startGame}
              disabled={players.length < 1 || !mode}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                players.length >= 1 && mode
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
              }`}
            >
              Start Game
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-300">
              🎯 {players[turn]}'s Turn
            </h2>

            {gameOver && <></>}

            <div className="flex justify-center gap-3 sm:gap-4">
              <button
                onClick={handleTruth}
                className="bg-indigo-600 hover:bg-indigo-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold flex items-center gap-2 text-white transition disabled:opacity-50"
                disabled={showScare}
              >
                <FaQuestion /> Truth
              </button>
              <button
                onClick={handleDrink}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold flex items-center gap-2 text-gray-900 transition disabled:opacity-50"
                disabled={showScare}
              >
                <FaBeer /> Drink
              </button>
            </div>

            {action && !showScare && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-gray-700/50 p-4 sm:p-5 rounded-xl text-base sm:text-lg font-medium text-center text-gray-100"
              >
                {action.type === "truth"
                  ? `🗣️ ${action.content}`
                  : `🍻 Take a sip! ${action.content}`}
              </motion.div>
            )}

            <button
              onClick={nextTurn}
              className="w-full bg-gray-600/50 hover:bg-gray-500/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-semibold transition disabled:opacity-50"
              disabled={showScare}
            >
              Next Turn
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OfflineDrink;
