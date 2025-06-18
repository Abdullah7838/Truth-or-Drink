import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. Gather Your Crew',
    description:
      'Whether in person or online, grab 2–9 players to kick off the fun. Make sure everyone’s up for some juicy truths or a few sips!',
  },
  {
    title: '2. Create or Join a Room',
    description:
      'Play offline with friends nearby or online by sharing a room link. Simple, smooth, and ready to go.',
  },
  {
    title: '3. Decide the Turn Order',
    description:
      'Take turns clockwise or let the game randomize who goes next. One player gets asked: "Truth or Drink?"',
  },
  {
    title: '4. Drink or Spill the Tea',
    description:
      'If the player chooses "Truth", they must answer the question honestly. Want to skip it? Take a sip instead!',
  },
  {
    title: '5. Set the Rules Before You Start',
    description:
      'Agree on limits and make sure everyone’s comfortable. This game’s about fun — no pressure, no peer pressure.',
  },
  {
    title: '6. Sip Smartly',
    description:
      'Make sure everyone’s drinking responsibly. This is a game, not a challenge to finish the bottle. Hydrate too! 💧',
  },
  {
    title: '7. End When the Fun Does',
    description:
      'There’s no fixed number of rounds. Play until everyone’s had their laughs (or drinks) and call it when you’re done.',
  },
  {
    title: '8. Game Over When You Say So',
    description:
      'Play as long as it’s fun! You can stop after a set number of rounds or when everyone’s had enough.',
  },
];

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12 px-6 md:px-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10"
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
            <h2 className="text-xl font-bold text-purple-800 mb-2">{step.title}</h2>
            <p className="text-gray-700 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowToPlay;
