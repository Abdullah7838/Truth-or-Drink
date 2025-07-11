import React, { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { FaQuestion, FaFire } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import truth from "./All-Truths/truths";

const dareAnimations = [
  "Take a sip of water with your eyes closed.",
  "Take sip and say 'I love this game!'",
  "Take sip and do a silly dance.",
  "Take a sip and sing a line from your favorite song.",
];

const botRepliesMale = [
  "Truth or drink? Don't chicken out.",
  "You're brave... or are you?",
  "I dare you to impress me.",
  "Let’s see if you can handle this round.",
  "Make me laugh or take a drink!",
  "Can you handle what’s next?",
  "Your move, don’t disappoint me.",
  "Pick wisely. The game’s heating up.",
  "Truth might hurt, but drink might embarrass you.",
  "Don’t be shy now.",
  "Feeling bold? Prove it.",
  "Time to spice things up!",
  "Truth or drink, no backing down.",
  "I’ve got something wild ready for you.",
  "Let’s not keep the game waiting.",
  "You go first, I insist.",
  "Are you sure you're ready for me?",
  "You're looking nervous ",
  "Only legends choose truth.",
  "Truth never lies. Can you?",
  "Your secret's safe with me... or is it?",
  "Dare to go beyond your comfort zone?",
  "Bet you won't pick truth twice.",
  "Don't keep me waiting.",
  "What's the worst that can happen?",
  "Make it entertaining!",
  "I’m watching closely ",
  "Truth or dare… choose wisely.",
  "Want to impress me? Prove it.",
  "It’s just a game… or is it?",
  "Too scared to pick drink?",
  "Don’t play safe now.",
  "What’s your poison: truth or drink?",
  "I’m feeling evil tonight.",
  "Ready for a crazy round?",
  "Hope you're not boring.",
  "Can’t wait to see what you choose.",
  "If you lie, I’ll know it.",
  "Let’s raise the stakes.",
  "Is that fear I see?",
  "This is gonna be fun!",
  "What’s hiding behind that smile?",
  "Impress me or regret it.",
  "Say it like you mean it.",
  "I'm keeping score ",
  "Go big or go home.",
  "Don’t let me down.",
  "You're up. Make it count.",
  "Nervous much?",
  "I like bold players.",
  "You're fun. Let’s make this wild.",
];


const botRepliesFemale = [
  "Let's make this spicy.",
  "Your turn, don't hold back!",
  "I bet you can't handle the truth.",
  "Make it juicy.",
  "Truth or drink? I’m curious ",
  "Time to reveal something interesting.",
  "Let’s get personal.",
  "Go on, surprise me.",
  "I’m not here to play it safe.",
  "Are you ready to spill?",
  "Only bold answers allowed.",
  "I dare you to pick truth.",
  "I’ve got some wild ideas for you.",
  "Don’t lie… I’ll know!",
  "I like fearless players ",
  "No turning back now.",
  "Give me something real.",
  "Feeling spicy tonight?",
  "Ready to confess something?",
  "Let's break the ice — or hearts.",
  "One of us is going to regret this 😈",
  "Truth never hurt… much.",
  "Ready for a challenge?",
  "Let’s see what you’re made of.",
  "Be bold or be boring.",
  "Who’s afraid of a little truth?",
  "I want drama!",
  "Whispers or screams? Choose one.",
  "I see a dare in your future.",
  "We’re just getting started.",
  "Let’s not play it safe tonight.",
  "Secrets are my favorite.",
  "Can you keep up?",
  "Let's play dirty — just in the game ",
  "Now we’re having fun!",
  "You’re blushing already!",
  "Let’s turn it up.",
  "Can you top the last round?",
  "I hope you're not shy.",
  "Truth or drink... or both?",
  "This round is mine.",
  "Don't be boring, impress me.",
  "I like bold answers.",
  "I'm here for the chaos ",
  "Careful what you pick...",
  "Ready to spill tea or take a risk?",
  "I'm judging your choice ",
  "What’s it gonna be?",
  "You're interesting… let’s test that.",
  "Truth hurts, but it’s worth it.",
  "Okay cutie, truth or drink?",
];


const botNamesMale = ["Alex", "Ryan", "Jake", "Ethan", "Daniel"];
const botNamesFemale = ["Luna", "Mia", "Emma", "Chloe", "Sophie"];
const userNames = ["Sam", "Ava", "Leo", "Zara", "Max", "Lily"];

const BotChatMode = () => {
  const [userName, setUserName] = useState("");
  const [botGender, setBotGender] = useState(null);
  const [matched, setMatched] = useState(false);
  const [botName, setBotName] = useState("");
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [turn, setTurn] = useState("user");
  const [action, setAction] = useState(null);
  const [truthIndex, setTruthIndex] = useState(0);
  const [mode, setMode] = useState("normal");
  const [showMatchUI, setShowMatchUI] = useState(true);
  const [toast, setToast] = useState("");
  const [awaitingUserDone, setAwaitingUserDone] = useState(false);
  const [lastBotReplyTime, setLastBotReplyTime] = useState(0);
  const [disconnected, setDisconnected] = useState(false);
  const chatContainerRef = useRef(null);

  const botMessages = botGender === "male" ? botRepliesMale : botRepliesFemale;
  const truthList = truth[mode] || [];

useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
}, [chat]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 10000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const simulateMatching = () => {
    if (!userName) return alert("Please select your name to start.");
    setTimeout(() => {
      const nameArr = botGender === "male" ? botNamesMale : botNamesFemale;
      const randomBotName = nameArr[Math.floor(Math.random() * nameArr.length)];
      setBotName(randomBotName);
      setMatched(true);
      setDisconnected(false);
      setChat([
        {
          from: "bot",
          text: `Hey ${userName}! I'm ${randomBotName}. Let's play.`,
        },
      ]);
      simulateRoomDisconnect(randomBotName);
    }, Math.random() * 2500 + 3500);
  };

  const shuffleArray = (array) => {
  const arr = [...array]; 
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

  const simulateRoomDisconnect = (name) => {
    const timeout = Math.random() * 40000 + 60000;
    setTimeout(() => {
      setToast(`${name} disconnected.`);
      setDisconnected(true);
    }, timeout);
  };

  const sendMessage = () => {
    if (!input.trim() || disconnected) return;

    const now = Date.now();
    const userMsg = { from: "user", text: input };
    setChat((prev) => [...prev, userMsg]);
    setInput("");

    if (now - lastBotReplyTime > 4000) {
      setLastBotReplyTime(now);
      setTimeout(() => {
        if (!disconnected) {
          const botMsg = {
            from: "bot",
            text: shuffleArray(botMessages)[0],
          };
          setChat((prev) => [...prev, botMsg]);
        }
      }, 8000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleTruth = () => {
    const content =
      truthList[truthIndex % truthList.length] || "What's your biggest fear?";
    setAction({ type: "truth", by: turn, content });
    setTruthIndex((prev) => prev + 1);
    setAwaitingUserDone(true);
  };

  const handleDare = () => {
    const dare =
      dareAnimations[Math.floor(Math.random() * dareAnimations.length)];
    setAction({ type: "dare", by: turn, content: dare });
    setAwaitingUserDone(true);
  };

  useEffect(() => {
    if (turn === "bot" && !awaitingUserDone && !disconnected) {
      setTimeout(() => {
        const random = Math.random();
        const content =
          random > 0.5
            ? {
                type: "truth",
                by: "bot",
                content: truthList[truthIndex % truthList.length],
              }
            : {
                type: "dare",
                by: "bot",
                content:
                  dareAnimations[
                    Math.floor(Math.random() * dareAnimations.length)
                  ],
              };
        setAction(content);
        setTruthIndex((prev) => prev + 1);
        setTimeout(() => setTurn("user"), Math.random() * 5000 + 5000);
      }, 4000);
    }
  }, [turn, disconnected]);

  const handleRestartMatch = () => {
    setShowMatchUI(true);
    setMatched(false);
    setBotName("");
    setChat([]);
    setInput("");
    setAction(null);
    setTurn("user");
    setAwaitingUserDone(false);
    setDisconnected(false);
    setUserName("");
    setBotGender(null);
  };

  if (showMatchUI) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-600 to-pink-600 flex flex-col items-center justify-center p-4 sm:p-6 text-white"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center drop-shadow-lg"
        >
          Truth or Drink
        </motion.h1>
        <p className="mb-2">Choose Your Name</p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-6"
        >
          {userNames.map((name) => (
            <motion.button
              key={name}
              onClick={() => setUserName(name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 ${
                userName === name
                  ? "bg-green-500 text-white"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30"
              } hover:bg-green-400`}
            >
              {name}
            </motion.button>
          ))}
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold"
        >
          Choose Matching Gender
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex gap-4 sm:gap-6 mb-6"
        >
          <motion.button
            onClick={() => setBotGender("male")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 transition-colors duration-300 ${
              botGender === "male"
                ? "bg-blue-600 text-white"
                : "bg-white/20 backdrop-blur-md text-white border border-white/30"
            } hover:bg-blue-500`}
          >
            <span role="img" aria-label="Male">
            </span>{" "}
            Male
          </motion.button>
          <motion.button
            onClick={() => setBotGender("female")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 transition-colors duration-300 ${
              botGender === "female"
                ? "bg-pink-600 text-white"
                : "bg-white/20 backdrop-blur-md text-white border border-white/30"
            } hover:bg-pink-500`}
          >
            <span role="img" aria-label="Female">
            </span>{" "}
            Female
          </motion.button>
        </motion.div>
        <motion.button
          onClick={() => {
            if (!userName || !botGender)
              return alert("Select your name and gender.");
            setShowMatchUI(false);
            simulateMatching();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 hover:bg-yellow-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold transition-colors duration-300 shadow-lg"
        >
          Start Matching
        </motion.button>
      </motion.div>
    );
  }

  if (!matched) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white text-2xl sm:text-3xl md:text-4xl font-bold animate-pulse"
      >
        Matching...
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-6 bg-gradient-to-br from-purple-200 via-indigo-100 to-pink-200"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg z-50 text-sm sm:text-base"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Game Panel */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-purple-300"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-purple-800 flex items-center gap-2">
            <span role="img" aria-label="Game">
              🎯
            </span>{" "}
            {userName} vs {botName}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-4 font-semibold text-gray-700">
            {turn === "user" ? "Your Turn" : `${botName}'s Turn`}
          </p>

          {!disconnected && turn === "user" && !awaitingUserDone && (
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <motion.button
                onClick={handleTruth}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <FaQuestion /> Truth
              </motion.button>
              <motion.button
                onClick={handleDare}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                <FaFire /> Drink
              </motion.button>
            </div>
          )}

          <AnimatePresence>
            {action && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="mt-4 sm:mt-6 p-4 sm:p-6 border border-gray-200 bg-gray-50 rounded-xl shadow-sm"
              >
                <strong className="text-purple-800">
                  {action.by === "user" ? userName : botName}
                </strong>
                : {action.content}
              </motion.div>
            )}
          </AnimatePresence>

          {!disconnected && awaitingUserDone && (
            <motion.button
              onClick={() => {
                setAwaitingUserDone(false);
                setTimeout(() => setTurn("bot"), 1000);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Done
            </motion.button>
          )}
          {disconnected && (
            <div>
              <p className="mt-4 text-red-600 font-semibold">
                {botName} has disconnected. You can't play now.
              </p>
              <button
                onClick={handleRestartMatch}
                className="inline-block mt-4 px-5 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all duration-300"
              >
                ReMatch
              </button>
            </div>
          )}
        </motion.div>

        {/* Chat Panel */}
        <motion.div
          
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-purple-300 flex flex-col max-h-[500px] sm:max-h-[600px]"
        >
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
            <AnimatePresence>
              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[75%] px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base ${
                    msg.from === "user"
                      ? "bg-blue-100 ml-auto text-left"
                      : "bg-pink-100 mr-auto text-left"
                  } shadow-sm`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </AnimatePresence>
            <div />
          </div>

          {/* Input Bar */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                disconnected
                  ? `${botName} disconnected. You can't reply now.`
                  : "Type a message..."
              }
              disabled={disconnected}
              className="flex-1 px-4 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <motion.button
              onClick={sendMessage}
              disabled={disconnected}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 sm:py-3 rounded-full text-white ${
                disconnected ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } transition-colors duration-300`}
            >
              <IoMdSend size={22} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BotChatMode;
