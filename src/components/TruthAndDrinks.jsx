// All-in-one file: Truth or Drink game with exploding animation for prompt display
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Helmet } from "react-helmet-async";
import truth from "./All-Truths/truths";
const TruthAndDrinks = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [category, setCategory] = useState("normal");
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [points, setPoints] = useState({ player1: 0, player2: 0 });
  const [timer, setTimer] = useState(60);
  const [choice, setChoice] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [exploding, setExploding] = useState(false);

  const truthsAndDares = {
    normal: {
      dare: [
        "Take a sip of 🍹",
        "Take a sip of juice while holding your nose.",
        "Take a sip of water and gargle it for 5 seconds.",
        "Take a sip of a drink chosen by the group.",
        "Take a sip of something fizzy and burp loudly.",
        "Take a sip of a cold drink and say 'Brrr!' dramatically.",
        "Take a sip of a drink with a silly straw.",
        "Take a sip of a drink while doing a silly dance.",
        "Take a sip of a drink and make a funny face.",
        "Take a sip of a drink after spinning around 3 times.",
        "Take a sip of a drink while singing a nursery rhyme.",
        "Take a sip of a drink and tell a quick joke.",
        "Take a sip of a drink with your non-dominant hand.",
        "Take a sip of a drink and imitate an animal sound.",
        "Take a sip of a drink while standing on one leg.",
        "Take a sip of a drink and say something in a robot voice.",
        "Take a sip of a drink and try to whistle afterward.",
        "Take a sip of a drink and pretend it’s super sour.",
        "Take a sip of a drink and name 3 fruits in 5 seconds.",
        "Take a sip of a drink while winking at someone.",
        "Take a sip of a drink and do a dramatic hair flip.",
        "Take a sip of a drink and say 'Cheers!' in an accent.",
        "Take a sip of a drink and balance the cup on your head.",
        "Take a sip of a drink and hum a tune for 10 seconds.",
        "Take a sip of a drink and pretend you’re in a commercial.",
        "Take a sip of a drink and make up a short toast.",
        "Take a sip of a drink and do 5 jumping jacks.",
        "Take a sip of a drink and try to say a tongue twister.",
        "Take a sip of a drink and pretend it’s a magic potion.",
        "Take a sip of a drink and do a quick robot dance.",
      ],
    },
    teens: {
      dare: [
        "Take a sip of 🍹",
        "Take a sip of a drink and post a selfie with it.",
        "Take a sip of a drink and text a friend 'I’m hydrated!'",
        "Take a sip of a drink while doing a TikTok dance.",
        "Take a sip of a drink and say a movie quote dramatically.",
        "Take a sip of a drink and make a funny filter video.",
        "Take a sip of a drink and sing a pop song chorus.",
        "Take a sip of a drink and do an impression of a celebrity.",
        "Take a sip of a drink and send a meme to a friend.",
        "Take a sip of a drink while balancing on one foot.",
        "Take a sip of a drink and say something in a fake accent.",
        "Take a sip of a drink and do a quick dance move.",
        "Take a sip of a drink and pretend it’s a potion.",
        "Take a sip of a drink and name 3 emojis in 5 seconds.",
        "Take a sip of a drink and make a silly face for a photo.",
        "Take a sip of a drink and tell a quick story about school.",
        "Take a sip of a drink and try to rap a line.",
        "Take a sip of a drink and do a dramatic hair flip.",
        "Take a sip of a drink and text 'LOL' to a random contact.",
        "Take a sip of a drink and imitate a teacher’s voice.",
        "Take a sip of a drink and post a cryptic story online.",
        "Take a sip of a drink and do 5 squats.",
        "Take a sip of a drink and hum your favorite song.",
        "Take a sip of a drink and pretend you’re a superhero.",
        "Take a sip of a drink and say 'Cheers!' in a funny voice.",
        "Take a sip of a drink and try to spin a pen.",
        "Take a sip of a drink and make up a quick poem.",
        "Take a sip of a drink and do a slow-motion run.",
        "Take a sip of a drink and wink at someone in the group.",
        "Take a sip of a drink and pretend it’s super spicy.",
      ],
    },
    "18+": {
      dare: [
        "Take a sip of 🥂",
        "Take a sip of a drink and send a flirty text to someone.",
        "Take a sip of a drink and sing a romantic song chorus.",
        "Take a sip of a drink and post a flirty social media status.",
        "Take a sip of a drink and do a seductive dance move.",
        "Take a sip of a drink and say a cheesy pickup line.",
        "Take a sip of a drink and wink at someone in the group.",
        "Take a sip of a drink and make up a flirty toast.",
        "Take a sip of a drink and do a dramatic slow-motion hair flip.",
        "Take a sip of a drink and text a friend 'Feeling spicy!'",
        "Take a sip of a drink and imitate your celebrity crush.",
        "Take a sip of a drink and pretend it’s a love potion.",
        "Take a sip of a drink and say something in a sultry voice.",
        "Take a sip of a drink and share a romantic movie quote.",
        "Take a sip of a drink and do 5 push-ups with flair.",
        "Take a sip of a drink and write a flirty haiku.",
        "Take a sip of a drink and pretend you’re on a first date.",
        "Take a sip of a drink and post a cryptic romantic story.",
        "Take a sip of a drink and make a flirty face for a photo.",
        "Take a sip of a drink and say 'Cheers!' in a fancy accent.",
        "Take a sip of a drink and try to balance it on your finger.",
        "Take a sip of a drink and sing a love song dramatically.",
        "Take a sip of a drink and whisper something flirty to someone.",
        "Take a sip of a drink and do a quick twirl.",
        "Take a sip of a drink and send a romantic meme to a friend.",
        "Take a sip of a drink and pretend it’s super fancy wine.",
        "Take a sip of a drink and make up a short love story.",
        "Take a sip of a drink and strike a romantic pose.",
        "Take a sip of a drink and text 'Thinking of you' to someone.",
        "Take a sip of a drink and do a flirty wink at the group.",
      ],
    },
  };

  useEffect(() => {
    if (currentPlayer && timer > 0 && !gameEnded) {
      const interval = setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            if (currentPlayer === "player1") {
              setCurrentPlayer("player2");
              setTimer(60);
              setChoice(null);
              setPrompt(null);
            } else {
              setGameEnded(true);
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 5000);
            }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, currentPlayer, gameEnded]);

  const startGame = () => {
    if (!player1 || !player2)
      return alert("Please enter names for both players!");
    setCurrentPlayer("player1");
    setPoints({ player1: 0, player2: 0 });
    setTimer(60);
    setPrompt(null);
    setChoice(null);
    setGameEnded(false);
    setShowConfetti(false);
  };

  const handleChoice = (type) => {
    let options;

    if (type === "truth") {
      // Get truth from external file
      options = truth[category];
    } else {
      // Get dare from local array in truthsAndDares object
      options = truthsAndDares[category].dare;
    }

    // Fisher-Yates Shuffle
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const random = shuffled[0];

    setExploding(true);
    setTimeout(() => {
      setChoice(type);
      setPrompt(random);
      setExploding(false);
    }, 800);
  };

  const handleDone = () => {
    const playerKey = currentPlayer;
    setPoints((prev) => ({ ...prev, [playerKey]: prev[playerKey] + 10 }));
    setChoice(null);
    setPrompt(null);
  };

  const getWinner = () => {
    if (points.player1 > points.player2) return player1;
    if (points.player2 > points.player1) return player2;
    return "It’s a tie!";
  };

  const explosionVariants = {
    initial: { scale: 1, rotate: 0 },
    explode: {
      scale: [1, 1.2, 0],
      rotate: [0, 180],
      opacity: [1, 0],
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Truth or Drink– Play Ultimate Mode With Friends</title>
        <meta
          name="description"
          content="Truth or Drink– Play Ultimate Mode With Friends. Choose a mode of truth or drink, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online and offline party game, ultimate truth or drink , online and offline game, drink game , offline truth or drink "
        />
        <meta
          property="og:title"
          content="Truth or Drink– Play Ultimate Mode With Friends"
        />
        <meta
          property="og:description"
          content="Truth or Drink– Play Ultimate Mode With Friends. Choose a mode of truth or drink, spin the wheel, and enjoy fun challenges!"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black text-white flex flex-col items-center justify-center px-4 py-8 font-mono relative">
        {showConfetti && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}

        <audio autoPlay loop className="hidden">
          <source
            src="https://assets.mixkit.co/active_storage/sfx/1068/1068-preview.mp3"
            type="audio/mpeg"
          />
        </audio>
        <div className="absolute top-4 w-full max-w-3xl px-4">
          <div className="flex justify-between items-center bg-black/70 border border-red-600 text-white rounded-xl py-2 px-4 shadow-lg font-bold text-lg">
            <div
              className={`px-3 py-1 rounded ${
                points.player1 > points.player2
                  ? "bg-green-600 text-black shadow-md"
                  : ""
              }`}
            >
              {player1 || "Player 1"}: {points.player1} pts
            </div>
            <div
              className={`px-3 py-1 rounded ${
                points.player2 > points.player1
                  ? "bg-green-600 text-black shadow-md"
                  : ""
              }`}
            >
              {player2 || "Player 2"}: {points.player2} pts
            </div>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl mb-6 font-bold text-red-500">
          🔥 Truth or Drink
        </h1>

        {!currentPlayer && !gameEnded && (
          <div className="bg-black/40 p-6 rounded-xl border border-red-500 max-w-md w-full space-y-4">
            <input
              type="text"
              placeholder="Player 1"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
              className="w-full p-3 rounded bg-black/60 text-white placeholder-red-300 border border-red-500"
            />
            <input
              type="text"
              placeholder="Player 2"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              className="w-full p-3 rounded bg-black/60 text-white placeholder-red-300 border border-red-500"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded bg-black text-red-400 border border-red-500"
            >
              <option value="normal">Normal</option>
              <option value="party">Party</option>
              <option value="18+">18+</option>
            </select>
            <button
              onClick={startGame}
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold"
            >
              Start Game
            </button>
          </div>
        )}

        {currentPlayer && !gameEnded && (
          <div className="mt-8 text-center max-w-xl">
            <h2 className="text-2xl sm:text-3xl mb-3">
              🎮 {currentPlayer === "player1" ? player1 : player2}'s Turn
            </h2>
            <p className="text-lg mb-4">
              Time Left: <b>{timer}s</b>
            </p>

            <AnimatePresence>
              {!choice && !exploding && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-center gap-4"
                >
                  <button
                    onClick={() => handleChoice("truth")}
                    className="px-6 py-3 bg-yellow-400 text-black rounded shadow"
                  >
                    Truth
                  </button>
                  <button
                    onClick={() => handleChoice("dare")}
                    className="px-6 py-3 bg-red-600 text-white rounded shadow"
                  >
                    Drink
                  </button>
                </motion.div>
              )}

              {exploding && (
                <motion.div
                  key="exploding"
                  variants={explosionVariants}
                  initial="initial"
                  animate="explode"
                  className="w-40 h-40 bg-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mt-6"
                >
                  💥
                </motion.div>
              )}

              {choice && prompt && !exploding && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="mt-6 bg-black/60 p-6 rounded-xl border border-red-400"
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {choice.toUpperCase()}
                  </h3>
                  <p className="mb-4">{prompt}</p>
                  <button
                    onClick={handleDone}
                    className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded"
                  >
                    ✅ Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {gameEnded && (
          <div className="mt-12 text-center">
            <h2 className="text-3xl mb-4">💀 Game Over</h2>
            <p className="text-xl">
              {player1}: {points.player1} pts
            </p>
            <p className="text-xl mb-4">
              {player2}: {points.player2} pts
            </p>
            <div className="bg-yellow-400 text-black py-2 px-5 rounded-lg inline-block text-xl font-bold mr-2">
              🏆 Winner: {getWinner()}
            </div>
            <button
              onClick={startGame}
              className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 cursor-pointer rounded-lg"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TruthAndDrinks;
