import { useState } from "react";
import { FaGlassCheers, FaSearch } from "react-icons/fa";

const truths = [
  "What's a dark secret you've never told your partner?",
  "Have you ever lied to your love about something serious?",
  "What do you think is your partner’s biggest insecurity?",
  "What was your first impression of your partner?",
  "Have you fantasized about someone else while with your partner?",
  "What's something you’re afraid to tell your love?",
  "Do you hide anything in your phone from your partner?",
  "What’s one thing your partner does that turns you on the most?",
  "What’s your honest opinion of your partner’s friends?",
  "If you could change one thing about your relationship, what would it be?",
  "Have you ever regretted getting into this relationship?",
  "What’s the most romantic thing your partner has ever done for you?",
  "Is there something your partner does that secretly annoys you?",
  "Have you ever kept a secret from your partner to protect their feelings?",
  "What’s one thing you wish your partner knew about you?",
  "Do you think your partner trusts you completely?",
  "Have you ever been jealous of someone close to your partner?",
  "What’s the biggest sacrifice you’ve made for your relationship?",
  "Do you ever compare your relationship to others?",
  "What’s one habit of your partner you wish they’d change?",
  "Have you ever thought about breaking up with your partner?",
  "What’s the most embarrassing thing you’ve done to impress your partner?",
  "Do you think you and your partner share the same values?",
  "What’s one thing your partner does better than anyone else?",
  "Have you ever snooped through your partner’s things?",
  "What’s the hardest truth you’ve had to accept about your relationship?",
  "Do you think your partner truly understands you?",
  "What’s one thing you love about your partner that you’ve never told them?",
  "Have you ever felt unappreciated by your partner?",
  "What’s the most adventurous thing you’d want to do with your partner?",
  "Do you think your partner would describe you as a good listener?",
  "What’s one secret you’re glad your partner doesn’t know?",
  "Have you ever doubted your partner’s loyalty?",
  "What’s the most thoughtful gift your partner has given you?",
  "Do you think your relationship is stronger now than when it started?",
  "What’s one thing you wish you could relive with your partner?",
  "Have you ever hidden how you really feel about your partner’s family?",
  "What’s the biggest lesson your partner has taught you?",
  "Do you think you and your partner argue fairly?",
  "What’s one thing you’d never admit to your partner during an argument?",
  "Have you ever felt pressured to do something for your partner?",
  "What’s the most vulnerable moment you’ve shared with your partner?",
  "Do you think your partner knows your deepest fears?",
  "What’s one thing you admire about your partner’s personality?",
  "Have you ever lied to avoid hurting your partner’s feelings?",
  "What’s the most surprising thing you’ve learned about your partner?",
  "Do you think your partner would change something about you if they could?",
  "What’s one thing you wish you and your partner did more often?",
  "Have you ever felt like you’re settling in your relationship?",
  "What’s the most romantic place you’d love to visit with your partner?",
  "Do you think your partner respects your boundaries?",
  "What’s one thing you’ve never apologized for but probably should?",
  "Have you ever kept a secret about your past from your partner?",
  "What’s the most spontaneous thing you’ve done with your partner?",
  "Do you think your partner sees the real you?",
  "What’s one thing you wish your partner would stop doing?",
  "Have you ever felt judged by your partner?",
  "What’s the most meaningful conversation you’ve had with your partner?",
  "Do you think you and your partner have the same long-term goals?",
  "What’s one thing you love about your relationship that others might not understand?",
  "Have you ever been tempted to flirt with someone else?",
  "What’s the most difficult compromise you’ve made for your partner?",
  "Do you think your partner appreciates how much you do for them?",
  "What’s one thing you’ve always wanted to ask your partner but haven’t?",
  "Have you ever felt like you’re not enough for your partner?",
  "What’s the most memorable date you’ve had with your partner?",
  "Do you think your partner would describe you as romantic?",
  "What’s one thing you’ve learned about yourself through your relationship?",
  "Have you ever hidden a financial decision from your partner?",
  "What’s the most unexpected thing your partner has done for you?",
  "Do you think your partner values your opinion as much as their own?",
  "What’s one thing you wish you could change about how you communicate with your partner?",
  "Have you ever felt like your partner doesn’t prioritize you?",
  "What’s the most important promise you’ve made to your partner?",
  "Do you think your relationship has made you a better person?",
  "What’s one thing you’ve always wanted to try with your partner but haven’t?",
  "Have you ever lied about your feelings to avoid a fight?",
  "What’s the most challenging moment you’ve faced together as a couple?",
  "Do you think your partner would say you’re a good partner?",
  "What’s one thing you’re proud of in your relationship?",
  "Have you ever felt insecure about your partner’s ex?",
  "What’s the most romantic thing you’ve done for your partner?",
  "Do you think your partner knows how much you love them?",
  "What’s one thing you wish you could tell your partner without judgment?",
  "Have you ever questioned your compatibility with your partner?",
  "What’s the most important thing you’ve learned from a past relationship that helps you now?",
  "Do you think your partner would support you in your wildest dreams?",
  "What’s one thing you’ve done for your partner that you’d never do for anyone else?",
  "Have you ever felt like your partner takes you for granted?",
  "What’s the most meaningful sacrifice your partner has made for you?",
  "Do you think you and your partner balance responsibilities equally?",
  "What’s one thing you love about your partner’s appearance that you’ve never mentioned?",
  "Have you ever kept a secret to avoid disappointing your partner?",
  "What’s the most exciting future plan you have with your partner?",
  "Do you think your partner truly listens when you’re upset?",
  "What’s one thing you wish your partner understood about your needs?",
  "Have you ever felt like your partner doesn’t see your efforts?",
  "What’s the most important thing you want your partner to remember about you?",
  "Do you think your relationship will last forever?"
];

const drinks = [
  "Take 2 big sips of your drink 🍻",
  "Finish your drink!",
  "Drink while making eye contact with your partner.",
  "Drink without using your hands.",
  "Let your partner pour your next drink.",
  "Take a shot blindfolded!",
  "Drink while standing on one foot.",
  "Chug for 5 seconds!",
  "Spin around 3 times and drink.",
  "Drink and whisper a secret into your partner's ear."
];

export default function Extreme() {
  const [display, setDisplay] = useState("");
  const [type, setType] = useState(""); // 'truth' or 'drink'

  const revealTruth = () => {
    const random = truths[Math.floor(Math.random() * truths.length)];
    setDisplay(random);
    setType("truth");
  };

  const takeDrink = () => {
    const random = drinks[Math.floor(Math.random() * drinks.length)];
    setDisplay(random);
    setType("drink");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-700 flex flex-col items-center justify-center p-4 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg flex justify-center items-center text-center">
        Truth or Drink Extreme Questions
      </h1>

      <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-center w-full max-w-2xl shadow-2xl transition-transform duration-500 ease-in-out ${display ? "scale-105" : "scale-100"}`}>
        <p className={`text-lg md:text-xl min-h-[100px] transition-opacity duration-300 ${type === "drink" ? "text-white" : "text-white"}`}>
          {display || "Choose Truth or Drink to begin"}
        </p>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <button
          onClick={revealTruth}
          className="bg-white text-pink-700 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition-all flex items-center gap-2"
        >
          <FaSearch />
          Reveal Truth
        </button>

        <button
          onClick={takeDrink}
          className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transform transition-all flex items-center gap-2"
        >
          <FaGlassCheers />
          Take a Drink
        </button>
      </div>
    </div>
  );
}
