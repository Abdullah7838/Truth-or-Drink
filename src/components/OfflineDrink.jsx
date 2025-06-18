import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { FaBeer, FaQuestion } from "react-icons/fa";

const truthQuestions = [
  "What's the most embarrassing thing you've ever done?",
  "Have you ever had a crush on someone here?",
  "What's your biggest secret?",
  "What's your guilty pleasure?",
  "Have you ever lied to get out of trouble?",
  "What is something you've done that you regret deeply?",
  "Have you ever lied to your best friend? What about?",
  "What secret are you keeping from your parents?",
  "Who is someone you pretend to like but secretly don't?",
  "What was your most awkward date experience?",
  "Have you ever blamed someone else for your mistake?",
  "What is the most selfish thing you've ever done?",
  "What’s the one thing you’re most ashamed of?",
  "Who do you stalk on social media the most?",
  "What's the weirdest thing you’ve done alone?",
  "Have you ever cheated on a test or assignment?",
  "What's the worst lie you've ever told?",
  "What’s your biggest insecurity?",
  "Have you ever broken someone's trust?",
  "Have you ever had a crush on a teacher or mentor?",
  "What’s a secret you've never told anyone?",
  "What's your guilty pleasure TV show?",
  "Have you ever pretended to be sick to skip something important?",
  "Have you ever eavesdropped on someone?",
  "What’s something you’re glad your parents don’t know about you?",
  "Have you ever made fun of someone behind their back?",
  "What’s the biggest mistake you've made in a relationship?",
  "Have you ever sent a message to the wrong person?",
  "Have you ever told a secret you promised to keep?",
  "What rumor did you help spread — and regret?"
];

const drinkAnimations = ["🍺", "🥃", "🍷", "🍹", "🍸", "🥂"];

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

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addPlayer = () => {
    if (input.trim()) {
      setPlayers([...players, input.trim()]);
      setInput("");
    }
  };

  const startGame = () => {
    if (players.length > 0) setStarted(true);
  };

  const nextTurn = () => {
    setAction(null);
    setTurn((prev) => (prev + 1) % players.length);
  };

  const scareThenShow = (callback) => {
    setShowScare(true);
    setConfettiKey((prev) => prev + 1);
    setTimeout(() => {
      setShowScare(false);
      callback();
    }, 2500); // Animation lasts 2.5s
  };

  const handleTruth = () => {
    scareThenShow(() => {
      const random =
        truthQuestions[Math.floor(Math.random() * truthQuestions.length)];
      setAction({ type: "truth", content: random });
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
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-700 to-red-600 text-white flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Horror Confetti Blast */}
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
              initialVelocityY={20}
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
              💀 Get Ready 💥
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {!started ? (
        <div className="w-full max-w-md space-y-4 z-10">
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
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl text-center space-y-8 z-10">
          <h2 className="text-2xl font-semibold">🎯 {players[turn]}'s Turn</h2>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleTruth}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-bold flex items-center gap-2"
              disabled={showScare}
            >
              <FaQuestion /> Truth
            </button>
            <button
              onClick={handleDrink}
              className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl text-lg font-bold flex items-center gap-2"
              disabled={showScare}
            >
              <FaBeer /> Drink
            </button>
          </div>

          <AnimatePresence>
            {!showScare && action && (
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
            disabled={showScare}
          >
            Next Turn
          </button>
        </div>
      )}
    </div>
  );
};

export default OfflineDrink;
