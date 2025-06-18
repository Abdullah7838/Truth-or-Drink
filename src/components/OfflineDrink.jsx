import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBeer, FaQuestion } from "react-icons/fa";

const truthQuestions = [
  "What's the most embarrassing thing you've ever done?",
  "Have you ever had a crush on someone here?",
  "What's your biggest secret?",
  "What's your guilty pleasure?",
  "Have you ever lied to get out of trouble?",
];

const drinkAnimations = ["🍺", "🥃", "🍷", "🍹", "🍸", "🥂"];

const OfflineDrink = () => {
  const [players, setPlayers] = useState([]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [turn, setTurn] = useState(0);
  const [action, setAction] = useState(null);

  const addPlayer = () => {
    if (input.trim()) {
      setPlayers([...players, input.trim()]);
      setInput("");
    }
  };

  const startGame = () => {
    if (players.length > 0) {
      setStarted(true);
    }
  };

  const nextTurn = () => {
    setAction(null);
    setTurn((prev) => (prev + 1) % players.length);
  };

  const handleTruth = () => {
    const random =
      truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
    setAction({ type: "truth", content: random });
  };

  const handleDrink = () => {
    const random =
      drinkAnimations[Math.floor(Math.random() * drinkAnimations.length)];
    setAction({ type: "drink", content: random });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-700 to-red-600 text-white flex flex-col items-center justify-center p-6">
      {!started ? (
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-3xl font-bold text-center">🎉 Truth or Drink</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter player name"
              className="flex-1 p-3 rounded-lg text-white bg-transparent border border-black focus:outline-none focus:ring-2 focus:ring-black placeholder-white/60"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addPlayer()}
            />
            <button
              onClick={addPlayer}
              className="bg-white text-black font-bold px-4 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {players.map((p, i) => (
              <span
                key={i}
                className="bg-white/20 px-3 py-1 rounded-full text-sm"
              >
                {p}
              </span>
            ))}
          </div>
          <button
            className="w-full mt-4 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-bold"
            onClick={startGame}
            disabled={players.length === 0}
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl text-center space-y-8">
          <h2 className="text-2xl font-semibold">🎯 {players[turn]}'s Turn</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleTruth}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-bold flex items-center gap-2"
            >
              <FaQuestion /> Truth
            </button>
            <button
              onClick={handleDrink}
              className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl text-lg font-bold flex items-center gap-2"
            >
              <FaBeer /> Drink
            </button>
          </div>

          <AnimatePresence>
            {action && (
              <motion.div
                key={action.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 text-xl bg-white/10 p-6 rounded-xl backdrop-blur-md"
              >
                {action.type === "truth"
                  ? `🗣️ ${action.content}`
                  : `🍻 Take a sip! ${action.content}`}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={nextTurn}
            className="mt-6 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold"
          >
            Next Turn
          </button>
        </div>
      )}
    </div>
  );
};

export default OfflineDrink;
