import React, { useState } from "react";
import { FaGlassCheers } from "react-icons/fa";
import { RiSpeakLine } from "react-icons/ri";

// Truths for couples
const coupleTruths = [
  "What’s something you wish your partner did more often in your relationship?",
  "Have you ever lied to your love to avoid hurting their feelings?",
  "What’s your honest opinion about your partner’s past relationships?",
  "What’s a fantasy you’ve had but never shared with your partner?",
  "Do you ever miss life before falling in love?",
  "Have you ever imagined being with someone else while being in love?",
  "What was your first impression of your partner?",
  "What’s something intimate you want to experience with your love?",
  "Have you ever kept a secret from your partner? What was it?",
  "When was the last time you truly felt butterflies from your love?",
  "What’s one thing your partner does that makes you feel most loved?",
  "Is there a moment in your relationship you wish you could relive?",
  "What’s a habit of your partner’s that you secretly find annoying?",
  "Have you ever doubted your compatibility with your partner?",
  "What’s the most romantic thing your partner has ever done for you?",
  "Is there something you wish you could change about your relationship?",
  "What’s a fear you have about your future together?",
  "Have you ever felt jealous of someone close to your partner?",
  "What’s one thing you love about your partner that you’ve never told them?",
  "What’s a moment when you felt most proud of your partner?",
  "Do you think you and your partner argue in a healthy way?",
  "What’s something you wish you knew about your partner earlier?",
  "Have you ever felt unappreciated by your partner?",
  "What’s a dream you want to achieve together as a couple?",
  "What’s one thing your partner does that always makes you laugh?",
  "Have you ever felt embarrassed by something your partner did?",
  "What’s a memory with your partner that you’ll never forget?",
  "Is there a topic you avoid discussing with your partner? Why?",
  "What’s something you admire about how your partner handles challenges?",
  "Have you ever felt like you’re not enough for your partner?",
  "What’s a small gesture your partner does that means a lot to you?",
  "Do you think you and your partner share the same values?",
  "What’s one thing you wish your partner understood better about you?",
  "Have you ever felt pressured to change for your partner?",
  "What’s the hardest moment you’ve faced together as a couple?",
  "What’s something new you’d love to try with your partner?",
  "Have you ever felt like your partner wasn’t fully honest with you?",
  "What’s a quality in your partner that you hope to grow in yourself?",
  "What’s a sacrifice you’ve made for your relationship?",
  "Do you think your partner knows the real you? Why or why not?",
  "What’s a moment when you felt completely connected to your partner?",
  "Have you ever had a recurring doubt about your relationship?",
  "What’s something your partner taught you about love?",
  "Is there a past argument you wish you had handled differently?",
  "What’s a place you dream of visiting with your partner?",
  "Have you ever felt like your partner didn’t prioritize you?",
  "What’s the most thoughtful gift your partner has given you?",
  "Do you think you and your partner have the same love language?",
  "What’s something you wish you could do better for your partner?",
  "Have you ever felt insecure about your partner’s feelings for you?",
  "What’s a song that reminds you of your partner?",
  "Is there something you wish your partner would stop doing?",
  "What’s a moment when your partner surprised you in a good way?",
  "Have you ever felt like you’re growing apart from your partner?",
  "What’s one thing you love about your partner’s personality?",
  "What’s a goal you want to set together as a couple?",
  "Have you ever felt like your partner didn’t listen to you?",
  "What’s a tradition you’d love to start with your partner?",
  "Do you think your partner understands your deepest fears?",
  "What’s something you wish you could tell your partner but haven’t?",
  "Have you ever felt judged by your partner?",
  "What’s a moment when your partner made you feel truly safe?",
  "Is there something you miss about the early days of your relationship?",
  "What’s a way your partner has helped you grow as a person?",
  "Have you ever felt like your partner took you for granted?",
  "What’s something you’ve always wanted to ask your partner but haven’t?",
  "Do you think you and your partner handle conflict well?",
  "What’s a memory that makes you feel grateful for your partner?",
  "Have you ever felt like your partner didn’t respect your boundaries?",
  "What’s a quality in your partner that you hope never changes?",
  "What’s something you wish you could experience again with your partner?",
  "Have you ever felt like your partner didn’t support your dreams?",
  "What’s a moment when you realized how much you love your partner?",
  "Do you think your partner knows how much they mean to you?",
  "What’s something you wish your partner would open up about?",
  "Have you ever felt like your relationship was one-sided?",
  "What’s a way your partner shows love that you didn’t expect?",
  "Is there a moment you regret in your relationship?",
  "What’s something you love doing with your partner, no matter how small?",
  "Have you ever felt like your partner didn’t trust you?",
  "What’s a dream you have for your relationship in 10 years?",
  "What’s something your partner does that makes you feel understood?",
  "Have you ever felt like you’re not on the same page as your partner?",
  "What’s a moment when your partner made you feel truly special?",
  "Do you think your partner appreciates the little things you do?",
  "What’s something you’ve learned about yourself through your relationship?",
  "Have you ever felt like your partner wasn’t fully present with you?",
  "What’s a way you want to strengthen your bond with your partner?",
  "Is there a fear you’ve never shared with your partner?",
  "What’s a moment when your partner showed you unconditional love?",
  "Have you ever felt like your relationship needed a fresh start?",
  "What’s something you love about how your partner sees the world?",
  "Do you think you and your partner balance each other well?",
  "What’s a moment when you felt completely in sync with your partner?",
  "Have you ever felt like your partner didn’t value your opinion?",
  "What’s a way your partner has changed since you first met?",
  "Is there something you wish you could apologize to your partner for?",
  "What’s a memory with your partner that still makes you smile?",
  "Have you ever felt like your partner didn’t need you?",
  "What’s one thing you hope your partner always remembers about you?"
];

// Drink prompts
const drinkLines = [
  "Take a drink if you've ever sent a spicy photo to your love.",
  "Take two sips if you’ve said 'I love you' just to avoid conflict.",
  "Drink if you've ever stalked your partner’s ex on social media.",
  "Take a shot if you’ve faked being asleep to avoid intimacy.",
  "Sip if you've ever checked your partner’s phone without permission.",
  "Take a drink if you've lied about liking something they cooked.",
  "Drink if you’ve re-read old messages to feel loved again.",
  "Take two sips if you've ever been jealous of your partner's friend.",
  "Drink if you've ever made your love jealous on purpose.",
  "Take a shot if you're the more dramatic one in the relationship."
];

export default function Couples() {
  const [question, setQuestion] = useState("");
  const [animateKey, setAnimateKey] = useState(0);

  const handleClick = (type) => {
    const random = type === "truth"
      ? coupleTruths[Math.floor(Math.random() * coupleTruths.length)]
      : drinkLines[Math.floor(Math.random() * drinkLines.length)];

    setQuestion(`${type === "truth" ? "Truth" : "Drink"}: ${random}`);
    setAnimateKey(prev => prev + 1); // trigger animation on question change
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-4 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg animate-fadeIn">
        Truth or Drink – Couples Edition
      </h1>

      <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl max-w-xl w-full shadow-2xl border border-white/30 transition-all duration-300">
        <p
          key={animateKey} // React will re-render this paragraph when key changes
          className="text-lg md:text-2xl font-medium min-h-[120px] mb-6 text-white/90 animate-fadeSlideIn transition-all duration-500"
        >
          {question || "Click on Truth or Drink to get started!"}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => handleClick("truth")}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-blue-100 hover:scale-105 active:scale-95 transition duration-300 shadow-md"
          >
            <RiSpeakLine className="text-xl" />
            Tell the Truth
          </button>
          <button
            onClick={() => handleClick("drink")}
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-pink-600 font-bold text-lg hover:bg-pink-100 hover:scale-105 active:scale-95 transition duration-300 shadow-md"
          >
            <FaGlassCheers className="text-xl" />
            Take a Drink
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-white/70 animate-fadeIn">
        For couples who want to get closer — or take a sip instead.
      </p>

      {/* Custom Tailwind Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out both;
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
}
