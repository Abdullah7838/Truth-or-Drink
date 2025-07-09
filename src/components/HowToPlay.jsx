import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Gather your friends",
    description:
      "Whether in person or online, grab 2–9 players to kick off the fun. Make sure everyone’s up for some juicy truths or a few sips!",
  },
  {
    title: "2. Decide who goes first",
    description:
      "You can use any method you want to decide who goes first - rock-paper-scissors, a coin toss, or even drawing straws. Once that’s settled, the game can begin!",
  },
  {
    title: "3. Ask a question",
    description:
      "One person will start by asking another player (or a group of players) a question. The question can be anything - from silly and lighthearted to wild and naughty.",
  },
  {
    title: "4. Answer or drink",
    description:
      "The person being asked the question has two choices: answer it truthfully or take a sip of their drink. If they choose to answer, they have to be completely honest. Keep in mind that you can’t skip a question - if you don’t want to answer, you must take a sip.",
  },
  {
    title: "5. Keep the game going",
    description:
      "Once the question has been answered, it’s the next player’s turn to ask a question. You can play for a certain number of rounds or simply keep playing until everyone is tired of the game.",
  },
  {
    title: "6. Game Over When You Say So",
    description:
      "Play as long as it’s fun! You can stop after a set number of rounds or when everyone’s had enough.",
  },
];

const stepss = [
  {
    title: "1. Make sure there’s enough water",
    description:
      " This game involves drinking water ",
  },
  {
    title: "2. This game is for adults only",
    description:
      "This game is not suitable for minors.",
  },
  {
    title: "3. Everyone should be comfortable",
    description:
      " We all have our boundaries. It’s best to talk about them before playing to avoid pitfalls.",
  },
  {
    title: "4. What happens in the game stays in the game",
    description:
      " Don’t share any secrets or personal information revealed during the game outside of it.",
  },
];

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-black mb-10"
      >
        How to Play 🍻 Truth or Drink
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-6 border border-purple-200 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-purple-800 mb-2">
              {step.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-black mb-10 mt-12"
      >
        Truth or Drink game rules
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {stepss.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-6 border border-purple-200 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-purple-800 mb-2">
              {step.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="pt-16"></div>
    </div>
  );
};

export default HowToPlay;
