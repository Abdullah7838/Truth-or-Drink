import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import truth from "./All-Truths/truths";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const GAME_HEIGHT = 500;
const PLAYER_WIDTH = 64;
const PLAYER_HEIGHT = 64;
const PLAYER_BOTTOM_OFFSET = 32;
const BOMB_WIDTH = 48;
const BOMB_HEIGHT = 48;

const lanePositions = [40, 148, 256];

const TruthRunning = () => {
  const [playerLane, setPlayerLane] = useState(1);
  const [bombs, setBombs] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);
  const [showModes, setShowModes] = useState(false);
  const [showTruth, setShowTruth] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");
  const [truthToShow, setTruthToShow] = useState("");
  const [collisionBombId, setCollisionBombId] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [score, setScore] = useState(0);
  const [timePassed, setTimePassed] = useState(0);

  const bombIdRef = useRef(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (!gameRunning) return;
      if (e.key === "ArrowLeft") moveLeft();
      if (e.key === "ArrowRight") moveRight();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gameRunning, lastMoveTime]);

  useEffect(() => {
    if (!gameRunning) return;
    const interval = setInterval(() => {
      const lane = Math.floor(Math.random() * 3);
      setBombs((prev) => [...prev, { id: bombIdRef.current++, lane, y: 0 }]);
    }, 750);
    return () => clearInterval(interval);
  }, [gameRunning]);

  useEffect(() => {
    if (!gameRunning) return;
    const interval = setInterval(() => {
      setBombs((prev) => {
        const updated = [];

        for (let bomb of prev) {
          const newY = bomb.y + 10;
          const playerX = lanePositions[playerLane];
          const playerY = GAME_HEIGHT - PLAYER_BOTTOM_OFFSET - PLAYER_HEIGHT;
          const bombX = lanePositions[bomb.lane];
          const bombY = newY;

          const xCollision =
            playerX < bombX + BOMB_WIDTH && playerX + PLAYER_WIDTH > bombX;
          const yCollision =
            playerY < bombY + BOMB_HEIGHT && playerY + PLAYER_HEIGHT > bombY;

          if (xCollision && yCollision) {
            setGameRunning(false);
            setCollisionBombId(bomb.id);
            setShowModes(true);
            return [...updated, { ...bomb, y: newY }];
          }

          if (newY < GAME_HEIGHT) {
            updated.push({ ...bomb, y: newY });
          }
        }

        return updated;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [gameRunning, playerLane]);

  // Score and Timer
  useEffect(() => {
    if (!gameRunning) return;
    const interval = setInterval(() => {
      setScore((s) => s + 1);
      setTimePassed((t) => t + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [gameRunning]);

  const moveLeft = useCallback(() => {
    const now = Date.now();
    if (now - lastMoveTime > 100) {
      setPlayerLane((l) => (l > 0 ? l - 1 : l));
      setLastMoveTime(now);
    }
  }, [lastMoveTime]);

  const moveRight = useCallback(() => {
    const now = Date.now();
    if (now - lastMoveTime > 100) {
      setPlayerLane((l) => (l < 2 ? l + 1 : l));
      setLastMoveTime(now);
    }
  }, [lastMoveTime]);

  const handleModeSelect = (mode) => {
    const q = truth[mode][Math.floor(Math.random() * truth[mode].length)];
    setSelectedMode(mode);
    setTruthToShow(q);
    setShowModes(false);
    setShowTruth(true);
  };

  const handleDone = () => {
    setPlayerLane(1);
    setBombs([]);
    setGameRunning(false);
    setShowModes(false);
    setShowTruth(false);
    setTruthToShow("");
    setSelectedMode("");
    setCollisionBombId(null);
    setShowStart(true);
    setScore(0);
    setTimePassed(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 relative overflow-hidden">
      {/* Score and Time */}
      <div className="w-full max-w-md flex justify-between items-center px-4 sm:px-6 md:px-8 text-yellow-300 font-bold text-lg mb-3">
        <span>⏱️ Time: {timePassed}s</span>
        <span>⭐ Score: {score}</span>
      </div>

      {/* Game Board */}
      <div className="relative w-[360px] h-[500px] bg-gray-700 rounded-2xl overflow-hidden border-4 border-cyan-500 shadow-2xl">
        <motion.div
          animate={{ backgroundPositionY: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(0deg,#4a5568_2px,transparent_2px)] bg-[length:100%_30px] z-0"
        />

        {bombs.map((bomb) => (
          <motion.div
            key={bomb.id}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg ${
              bomb.id === collisionBombId
                ? "bg-yellow-400 scale-125"
                : "bg-red-600"
            }`}
            style={{ left: lanePositions[bomb.lane], top: bomb.y }}
          >
            💣
          </motion.div>
        ))}

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute w-16 h-16 text-4xl flex items-center justify-center rounded-full shadow-lg opacity-80 ${
            !gameRunning ? "bg-red-400" : "bg-cyan-500"
          }`}
          style={{ left: lanePositions[playerLane], bottom: PLAYER_BOTTOM_OFFSET }}
        >
          🏃
        </motion.div>
      </div>

      {/* Controls */}
      {gameRunning && (
        <div className="mt-6 flex flex-row flex-wrap justify-center gap-12">
          <button 
          aria-label="Move Left"
          type="button"
          onClick={moveLeft} className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-md flex items-center gap-2">
            <HiArrowLeft className="text-2xl" />
          </button>
          <button 
          aria-label="Move Right"
          type="button"
          onClick={moveRight} className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-md flex items-center gap-2">
            <HiArrowRight className="text-2xl" />
          </button>
        </div>
      )}

      {/* Game Over - Truth Mode Selection */}
      <AnimatePresence>
        {showModes && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-cyan-400 p-8 rounded-2xl w-full max-w-md text-center shadow-xl z-50"
          >
            <h2 className="text-2xl font-bold text-red-400 mb-4">💥 You Got Hit!</h2>
            <p className="mb-6 text-gray-300">Choose a truth mode:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["normal", "party", "funny", "spicy" , "18+"].map((mode) => (
                <button
                  aria-label={`Select ${mode} mode`}
                  type="button"
                  key={mode}
                  onClick={() => handleModeSelect(mode)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold uppercase shadow-md"
                >
                  {mode}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Truth Display */}
      <AnimatePresence>
        {showTruth && (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-pink-400 p-6 rounded-2xl w-full max-w-md text-center shadow-xl z-50"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">{selectedMode.toUpperCase()} Truth</h3>
            <p className="text-lg text-gray-200 italic mb-6">"{truthToShow}"</p>
            <button
              aria-label="Mark as done"
              type="button"
              onClick={handleDone}
              className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg text-gray-900 font-bold shadow-md"
            >
              ✅ Done
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Start Button */}
      {showStart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <button
            aria-label="Start Game"
            type="button"
            onClick={() => {
              setScore(0);
              setTimePassed(0);
              setShowStart(false);
              setGameRunning(true);
            }}
            className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold sm:text-md md:text-xl lg:text-xl shadow-lg"
          >
            ▶️ Start Game
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default TruthRunning;
