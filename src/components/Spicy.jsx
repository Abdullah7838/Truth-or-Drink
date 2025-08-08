import { useState } from "react";

const spicyTruths = [
  "What's your most forbidden fantasy?",
  "Have you ever had a crush on someone in this room?",
  "What's the wildest place you've had sex?",
  "What's the most scandalous DM you've ever received?",
  "What's one thing you've done while drunk that you never told anyone?",
  "Have you ever hooked up with a friend's ex?",
  "What's the kinkiest thing you've ever done?",
  "Describe your most embarrassing intimate moment.",
  "What's a sexual secret you've never told anyone?",
  "Have you ever cheated or been cheated on?",
  "What's the naughtiest thing you've done in public?",
  "Have you ever had a friends with benefits situation?",
  "What's your biggest turn-on that you're embarrassed about?",
  "Have you ever sent a risky photo to someone?",
  "What's the most inappropriate place you've been turned on?",
  "Have you ever had a dream about someone in this room?",
  "What's the most daring thing you've done to impress a crush?",
  "Have you ever lied about your 'body count'?",
  "What's the weirdest food combo you've tried during a late-night hookup?",
  "Have you ever been caught in the act by someone unexpected?",
  "What's the most awkward thing you've said during an intimate moment?",
  "Have you ever had a crush on a teacher or boss?",
  "What's the strangest place you've ever flirted with someone?",
  "Have you ever used a dating app under a fake name?",
  "What's the most scandalous rumor you've heard about yourself?",
  "Have you ever had a one-night stand and regretted it?",
  "What's the most unexpected thing that turns you on?",
  "Have you ever faked an emotion to get out of a bad date?",
  "What's the most risqué text you've sent to the wrong person?",
  "Have you ever had a secret fling nobody knows about?",
  "What's the most adventurous thing you'd try in the bedroom?",
  "Have you ever been attracted to someone you shouldn't have?",
  "What's the most embarrassing thing you've worn to impress someone?",
  "Have you ever had a crush on a friend's sibling?",
  "What's the wildest thing you've done on a dare?",
  "Have you ever used a cheesy pickup line and it actually worked?",
  "What's the most awkward date you've ever been on?",
  "Have you ever ghosted someone after a hookup?",
  "What's the most scandalous thing you've done at a party?",
  "Have you ever had a crush on a coworker?",
  "What's the most unexpected place you've had a romantic encounter?",
  "Have you ever lied to get someone to go out with you?",
  "What's the most embarrassing thing you've Googled about sex?",
  "Have you ever had a fling while on vacation?",
  "What's the most daring thing you've done to get someone's attention?",
  "Have you ever had a crush on a celebrity lookalike?",
  "What's the most awkward thing you've done while flirting?",
  "Have you ever kept a secret from your partner about your past?",
  "What's the most scandalous thing you've done to avoid someone?",
  "Have you ever had a romantic moment in a movie theater?",
  "What's the most unexpected thing someone has done to turn you on?",
  "Have you ever had a crush you were too shy to confess to?",
  "What's the most risqué thing you've done at a family event?",
  "Have you ever used a fake accent to flirt with someone?",
  "What's the most embarrassing thing you've done for love?",
  "Have you ever had a secret admirer you never confronted?",
  "What's the most scandalous thing you've done on a first date?",
  "Have you ever been caught sneaking out to meet someone?",
  "What's the most awkward thing you've said to a crush?",
  "Have you ever had a fling with someone from a rival school or team?",
  "What's the most daring outfit you've worn to a party?",
  "Have you ever lied about your relationship status?",
  "What's the most unexpected place you've kissed someone?",
  "Have you ever had a crush on someone twice your age?",
  "What's the most scandalous thing you've done at a sleepover?",
  "Have you ever had a romantic moment in a car?",
  "What's the most awkward thing you've done to avoid a kiss?",
  "Have you ever had a fling with someone you met online?",
  "What's the most risqué thing you've done during a game night?",
  "Have you ever had a crush you hid from your best friend?",
  "What's the most embarrassing song on your hookup playlist?",
  "Have you ever been caught checking someone out?",
  "What's the most scandalous thing you've done at a wedding?",
  "Have you ever had a romantic moment in an elevator?",
  "What's the most daring thing you've said to a stranger?",
  "Have you ever lied about your age to date someone?",
  "What's the most awkward thing you've done on a video call date?",
  "Have you ever had a fling with someone from a different country?",
  "What's the most risqué thing you've done at a club?",
  "Have you ever had a crush on your best friend's partner?",
  "What's the most embarrassing gift you've given a crush?",
  "Have you ever been caught sneaking a kiss?",
  "What's the most scandalous thing you've done at a bar?",
  "Have you ever had a romantic moment at a concert?",
  "What's the most daring thing you've done on a bet?",
  "Have you ever lied to get out of a second date?",
  "What's the most awkward thing you've done at a reunion?",
  "Have you ever had a fling with someone you worked with?",
  "What's the most risqué thing you've done in a park?",
  "Have you ever had a crush you never told anyone about?",
  "What's the most embarrassing thing you've done on a dare?",
  "Have you ever been caught sending a flirty DM?",
  "What's the most scandalous thing you've done at a festival?",
  "Have you ever had a romantic moment on a beach?",
  "What's the most daring thing you've done to avoid someone?",
  "Have you ever lied about your feelings to keep a fling going?",
  "What's the most awkward thing you've done at a friend's house?",
  "Have you ever had a fling with someone you met at a gym?",
  "What's the most risqué thing you've done during a movie?",
];

const spicyDrinks = [
  "Take 2 shots for every person you've kissed this year!",
  "Drink for 5 seconds straight if you've ever had a one-night stand!",
  "Take a shot and tell everyone your body count!",
  "Chug your drink if you've ever been walked in on!",
  "Take 3 sips for every person you've hooked up with in this friend group!",
  "Drink continuously while naming everyone you've had a crush on!",
  "Take a shot if you've ever used a dating app while in a relationship!",
  "Finish your drink if you've ever faked it!",
  "Take 2 shots if you've ever hooked up with a coworker!",
  "Drink for 10 seconds if you've ever had a threesome fantasy!",
  "Take a shot for every time you've hooked up with an ex!",
  "Chug if you've ever been caught watching adult content!",
  "Take 3 shots if you've ever had a sugar daddy/mommy!",
  "Drink until someone says stop if you've ever cheated!",
  "Take a shot if you've ever hooked up in a car!"
];

export default function Spicy() {
  const [question, setQuestion] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastType, setLastType] = useState("");

  const getRandomTruth = () => {
    setIsAnimating(true);
    setLastType("truth");
    setTimeout(() => {
      const random = spicyTruths[Math.floor(Math.random() * spicyTruths.length)];
      setQuestion(random);
      setIsAnimating(false);
    }, 500);
  };

  const getRandomDrink = () => {
    setIsAnimating(true);
    setLastType("drink");
    setTimeout(() => {
      const random = spicyDrinks[Math.floor(Math.random() * spicyDrinks.length)];
      setQuestion(random);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 drop-shadow-2xl">
          Truth or Drink – Spicy Questions
        </h1>

        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-3xl w-full max-w-2xl mx-auto shadow-2xl border border-white/30 mb-8 transform hover:scale-105 transition-all duration-300">
          <div className={`min-h-[120px] md:min-h-[150px] flex items-center justify-center transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            {question ? (
              <div className="text-center">
                <div className="text-lg md:text-xl mb-3 font-bold">
                  {lastType === 'truth' ? 'TRUTH' : 'DRINK UP'}
                </div>
                <p className="text-base md:text-lg font-medium text-white leading-relaxed animate-fadeIn">
                  {question}
                </p>
              </div>
            ) : (
              <p className="text-lg md:text-xl font-medium text-white/90">
                Choose your poison... Truth or Drink?
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-lg mx-auto">
          <button
            onClick={getRandomTruth}
            disabled={isAnimating}
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm md:text-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-2xl transform hover:scale-110 disabled:opacity-50 flex-1 max-w-[120px] md:max-w-[150px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center">
              <span>TRUTH</span>
            </div>
            <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping"></div>
          </button>

          <div className="text-lg md:text-xl font-bold text-white/70 animate-pulse">
            OR
          </div>

          <button
            onClick={getRandomDrink}
            disabled={isAnimating}
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm md:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-2xl transform hover:scale-110 disabled:opacity-50 flex-1 max-w-[120px] md:max-w-[150px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center justify-center">
              <span>DRINK</span>
            </div>
            <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping delay-300"></div>
          </button>
        </div>

        <div className="mt-8 text-sm md:text-base text-white/70">
          <p className="mb-1">Adults Only • Play Responsibly • Know Your Limits</p>
          <p className="text-xs md:text-sm">Choose Truth to spill secrets or Drink to avoid the question!</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}