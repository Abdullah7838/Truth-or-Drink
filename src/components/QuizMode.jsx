import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import confettiAnimation from "./animations/confetti.json";
import horrorFlash from "./animations/horror-flash.json";
import { Helmet } from "react-helmet-async";
import truth from "./All-Truths/truths";
const questions = {
  normal: [
    {
      q: "What’s the capital of France?",
      options: ["Paris", "London", "Berlin"],
      a: "Paris",
    },
    {
      q: "How many legs does a spider have?",
      options: ["6", "8", "10"],
      a: "8",
    },
    {
      q: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars"],
      a: "Jupiter",
    },
    {
      q: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
      a: "Carbon Dioxide",
    },
    {
      q: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl"],
      a: "H2O",
    },
    {
      q: "Which continent is known as the smallest by land area?",
      options: ["Australia", "Antarctica", "Asia"],
      a: "Australia",
    },
    {
      q: "What is the longest river in the world?",
      options: ["Nile", "Amazon", "Yangtze"],
      a: "Nile",
    },
    {
      q: "Which animal is known as man’s best friend?",
      options: ["Cat", "Dog", "Horse"],
      a: "Dog",
    },
    {
      q: "What is the primary source of energy for Earth?",
      options: ["Moon", "Sun", "Wind"],
      a: "Sun",
    },
    {
      q: "How many days are in a leap year?",
      options: ["365", "366", "364"],
      a: "366",
    },
    {
      q: "Which fruit is known for its high vitamin C content?",
      options: ["Apple", "Orange", "Banana"],
      a: "Orange",
    },
    {
      q: "What is the tallest mountain in the world?",
      options: ["K2", "Everest", "Kilimanjaro"],
      a: "Everest",
    },
    {
      q: "Which ocean is the largest?",
      options: ["Atlantic", "Pacific", "Indian"],
      a: "Pacific",
    },
    {
      q: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro"],
      a: "Yen",
    },
    {
      q: "Which bird is known for its colorful feathers?",
      options: ["Crow", "Peacock", "Sparrow"],
      a: "Peacock",
    },
    {
      q: "What is the boiling point of water in Celsius?",
      options: ["100", "0", "50"],
      a: "100",
    },
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Mercury"],
      a: "Mars",
    },
    {
      q: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe"],
      a: "Blue Whale",
    },
    {
      q: "Which element is essential for human bones?",
      options: ["Iron", "Calcium", "Zinc"],
      a: "Calcium",
    },
    {
      q: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "Brasília", "São Paulo"],
      a: "Brasília",
    },
    {
      q: "Which gas is most abundant in Earth’s atmosphere?",
      options: ["Oxygen", "Nitrogen", "Helium"],
      a: "Nitrogen",
    },
    {
      q: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Maldives"],
      a: "Vatican City",
    },
    {
      q: "Which animal is the fastest land animal?",
      options: ["Lion", "Cheetah", "Horse"],
      a: "Cheetah",
    },
    {
      q: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver"],
      a: "Ottawa",
    },
    {
      q: "Which instrument has 88 keys?",
      options: ["Guitar", "Piano", "Violin"],
      a: "Piano",
    },
    {
      q: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Antarctic"],
      a: "Antarctic",
    },
    {
      q: "Which language is spoken in Egypt?",
      options: ["Arabic", "French", "Spanish"],
      a: "Arabic",
    },
    {
      q: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe"],
      a: "Au",
    },
    {
      q: "Which season follows summer?",
      options: ["Spring", "Autumn", "Winter"],
      a: "Autumn",
    },
    {
      q: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata"],
      a: "Delhi",
    },

  ],
  Funny: [
    {
      q: "Which fruit is always in a jam?",
      options: ["Strawberry", "Peach", "Grape"],
      a: "Strawberry",
    },
    {
      q: "Harry Potter’s owl?",
      options: ["Crookshanks", "Hedwig", "Scabbers"],
      a: "Hedwig",
    },
    {
      q: "What’s the name of the Grinch’s dog?",
      options: ["Max", "Buddy", "Rex"],
      a: "Max",
    },
    {
      q: "Which fruit sounds like a pair?",
      options: ["Apple", "Pear", "Banana"],
      a: "Pear",
    },
    {
      q: "What do you call a bear with no socks?",
      options: ["Gummy Bear", "Bare Bear", "Polar Bear"],
      a: "Bare Bear",
    },
    {
      q: "Which vegetable can sing?",
      options: ["Carrot", "Potato", "Cabbage"],
      a: "Cabbage",
    },
    {
      q: "What’s the name of SpongeBob’s pet snail?",
      options: ["Gary", "Larry", "Terry"],
      a: "Gary",
    },
    {
      q: "What do you call cheese that isn’t yours?",
      options: ["Swiss", "Nacho", "Cheddar"],
      a: "Nacho",
    },
    {
      q: "Which animal is always late?",
      options: ["Turtle", "Rabbit", "Sloth"],
      a: "Sloth",
    },
    {
      q: "What’s Shrek’s favorite food?",
      options: ["Pizza", "Onions", "Waffles"],
      a: "Onions",
    },
    {
      q: "What do you call a sleeping dinosaur?",
      options: ["Snoresaurus", "Raptorius", "Dozedactyl"],
      a: "Snoresaurus",
    },
    {
      q: "Which superhero loves a good nap?",
      options: ["Batman", "Superman", "Sleepman"],
      a: "Sleepman",
    },
    {
      q: "What’s the name of the lion in The Lion King?",
      options: ["Simba", "Mufasa", "Scar"],
      a: "Simba",
    },
    {
      q: "What do you call a fake noodle?",
      options: ["Spaghetti", "Impasta", "Macaroni"],
      a: "Impasta",
    },
    {
      q: "Which fruit is always sad?",
      options: ["Blueberry", "Apple", "Mango"],
      a: "Blueberry",
    },
    {
      q: "What’s the name of Buzz Lightyear’s friend?",
      options: ["Woody", "Jessie", "Rex"],
      a: "Woody",
    },
    {
      q: "What do you call a cold dog?",
      options: ["Hot Dog", "Chilly Dog", "Bark Dog"],
      a: "Chilly Dog",
    },
    {
      q: "Which bird is great at stand-up comedy?",
      options: ["Parrot", "Owl", "Comedi-hen"],
      a: "Comedi-hen",
    },
    {
      q: "What’s the name of the fish in Finding Nemo?",
      options: ["Nemo", "Marlin", "Dory"],
      a: "Nemo",
    },
    {
      q: "What do you call a lazy kangaroo?",
      options: ["Pouch Potato", "JumpaLad", "Hoppy"],
      a: "Pouch Potato",
    },
    {
      q: "Which vegetable tells the best jokes?",
      options: ["Corn", "Broccoli", "Lettuce"],
      a: "Corn",
    },
    {
      q: "What’s the name of the pirate in Peter Pan?",
      options: ["Captain Hook", "Smee", "Tinkerbell"],
      a: "Captain Hook",
    },
    {
      q: "What do you call a cat in a hat?",
      options: ["Dr. Meow", "Hat Cat", "Purrfessor"],
      a: "Hat Cat",
    },
    {
      q: "Which fruit is a great singer?",
      options: ["Banana", "Melon", "Karaoke"],
      a: "Melon",
    },
    {
      q: "What’s the name of the dog in The Wizard of Oz?",
      options: ["Toto", "Rover", "Spot"],
      a: "Toto",
    },
    {
      q: "What do you call a sneaky egg?",
      options: ["Yolkster", "Eggsplorer", "Scramble"],
      a: "Scramble",
    },
    {
      q: "Which animal loves to dance?",
      options: ["Penguin", "Monkey", "Disco Dino"],
      a: "Disco Dino",
    },
    {
      q: "What’s the name of the snowman in Frozen?",
      options: ["Olaf", "Sven", "Kristoff"],
      a: "Olaf",
    },
    {
      q: "What do you call a bread that sings?",
      options: ["Loaf", "Baguette", "Croissant-oke"],
      a: "Croissant-oke",
    },
    {
      q: "Which fruit is always in a jam?",
      options: ["Strawberry", "Peach", "Grape"],
      a: "Strawberry",
    },

  ],
  History: [
    {
      q: "Which ancient wonder was located in Babylon?",
      options: ["Hanging Gardens", "Colossus", "Lighthouse"],
      a: "Hanging Gardens",
    },
    { q: "When did WW2 end?", options: ["1945", "1939", "1918"], a: "1945" },
    {
      q: "Who was the first U.S. President?",
      options: ["Lincoln", "Washington", "Jefferson"],
      a: "Washington",
    },
    {
      q: "Which ancient civilization built the pyramids?",
      options: ["Romans", "Egyptians", "Greeks"],
      a: "Egyptians",
    },
    {
      q: "When did the Titanic sink?",
      options: ["1912", "1905", "1920"],
      a: "1912",
    },
    {
      q: "Who painted the Mona Lisa?",
      options: ["Da Vinci", "Picasso", "Van Gogh"],
      a: "Da Vinci",
    },
    {
      q: "Which war ended in 1918?",
      options: ["WW1", "WW2", "Civil War"],
      a: "WW1",
    },
    {
      q: "Who was the first man on the moon?",
      options: ["Armstrong", "Gagarin", "Aldrin"],
      a: "Armstrong",
    },
    {
      q: "Which country built the Great Wall?",
      options: ["Japan", "China", "India"],
      a: "China",
    },
    {
      q: "When was the Declaration of Independence signed?",
      options: ["1776", "1789", "1800"],
      a: "1776",
    },
    {
      q: "Who was the queen of England during WW2?",
      options: ["Victoria", "Elizabeth II", "Elizabeth I"],
      a: "Elizabeth II",
    },
    {
      q: "Which empire was ruled by Julius Caesar?",
      options: ["Ottoman", "Roman", "Byzantine"],
      a: "Roman",
    },
    {
      q: "When did the French Revolution begin?",
      options: ["1789", "1750", "1804"],
      a: "1789",
    },
    {
      q: "Who invented the telephone?",
      options: ["Bell", "Edison", "Tesla"],
      a: "Bell",
    },
    {
      q: "Which country was divided by the Berlin Wall?",
      options: ["Germany", "France", "Austria"],
      a: "Germany",
    },
    {
      q: "When did humans first land on the moon?",
      options: ["1969", "1959", "1979"],
      a: "1969",
    },
    {
      q: "Who led the Indian independence movement?",
      options: ["Gandhi", "Nehru", "Bose"],
      a: "Gandhi",
    },
    {
      q: "Which ancient city was destroyed by a volcano?",
      options: ["Pompeii", "Athens", "Rome"],
      a: "Pompeii",
    },
    {
      q: "When was the United Nations founded?",
      options: ["1945", "1935", "1955"],
      a: "1945",
    },
    {
      q: "Who was the first female Prime Minister of the UK?",
      options: ["Thatcher", "May", "Blair"],
      a: "Thatcher",
    },
    {
      q: "Which war was fought between the North and South USA?",
      options: ["Civil War", "WW1", "Revolutionary War"],
      a: "Civil War",
    },
    {
      q: "Who wrote the Communist Manifesto?",
      options: ["Marx", "Lenin", "Stalin"],
      a: "Marx",
    },
    {
      q: "When did the Renaissance begin?",
      options: ["14th century", "12th century", "16th century"],
      a: "14th century",
    },
    {
      q: "Which explorer sailed around the world first?",
      options: ["Magellan", "Columbus", "Vasco da Gama"],
      a: "Magellan",
    },
    {
      q: "Who was the leader of Nazi Germany?",
      options: ["Hitler", "Mussolini", "Stalin"],
      a: "Hitler",
    },
    {
      q: "When was the Magna Carta signed?",
      options: ["1215", "1066", "1348"],
      a: "1215",
    },
    {
      q: "Which civilization used hieroglyphics?",
      options: ["Mayan", "Egyptian", "Incan"],
      a: "Egyptian",
    },
    {
      q: "Who was the first Emperor of France?",
      options: ["Napoleon", "Louis XIV", "Charlemagne"],
      a: "Napoleon",
    },
    {
      q: "When did the Industrial Revolution begin?",
      options: ["18th century", "16th century", "19th century"],
      a: "18th century",
    },

  ],
  "18+": [
    {
      q: "What is the primary alcohol in a negroni?",
      options: ["Gin", "Vodka", "Rum"],
      a: "Gin",
    },
    {
      q: "Which country is famous for Oktoberfest?",
      options: ["USA", "Germany", "Brazil"],
      a: "Germany",
    },
    {
      q: "What is the main ingredient in vodka?",
      options: ["Potatoes", "Grapes", "Barley"],
      a: "Potatoes",
    },
    {
      q: "Which cocktail is made with gin and tonic?",
      options: ["Martini", "Gin and Tonic", "Mojito"],
      a: "Gin and Tonic",
    },
    {
      q: "What is the legal age for gambling in Las Vegas?",
      options: ["19", "21", "18"],
      a: "21",
    },
    {
      q: "Which spirit is made from agave?",
      options: ["Whiskey", "Tequila", "Rum"],
      a: "Tequila",
    },
    {
      q: "What is the main ingredient in a margarita?",
      options: ["Vodka", "Tequila", "Gin"],
      a: "Tequila",
    },
    {
      q: "Which country produces the most wine?",
      options: ["Italy", "USA", "Australia"],
      a: "Italy",
    },
    {
      q: "What is the primary alcohol in a mojito?",
      options: ["Rum", "Vodka", "Whiskey"],
      a: "Rum",
    },
    {
      q: "Which city is known for Bourbon Street?",
      options: ["Las Vegas", "New Orleans", "Miami"],
      a: "New Orleans",
    },
    {
      q: "What is the legal smoking age in many countries?",
      options: ["19", "18", "21"],
      a: "19",
    },
    {
      q: "Which drink is known as the “Green Fairy”?",
      options: ["Absinthe", "Chartreuse", "Midori"],
      a: "Absinthe",
    },
    {
      q: "What is the base spirit in a martini?",
      options: ["Vodka", "Rum", "Tequila"],
      a: "Vodka",
    },
    {
      q: "Which country is famous for sake?",
      options: ["China", "Japan", "Korea"],
      a: "Japan",
    },
    {
      q: "What is the main ingredient in beer?",
      options: ["Wheat", "Barley", "Corn"],
      a: "Barley",
    },
    {
      q: "Which cocktail includes tomato juice?",
      options: ["Bloody Mary", "Cosmopolitan", "Daiquiri"],
      a: "Bloody Mary",
    },
    {
      q: "What is the legal age to vote in most countries?",
      options: ["18", "19", "21"],
      a: "18",
    },
    {
      q: "Which spirit is aged in oak barrels?",
      options: ["Vodka", "Whiskey", "Gin"],
      a: "Whiskey",
    },
    {
      q: "What is the main ingredient in a piña colada?",
      options: ["Rum", "Tequila", "Vodka"],
      a: "Rum",
    },
    {
      q: "Which country is known for Guinness beer?",
      options: ["Ireland", "Scotland", "England"],
      a: "Ireland",
    },
    {
      q: "What is the primary alcohol in a daiquiri?",
      options: ["Gin", "Rum", "Whiskey"],
      a: "Rum",
    },
    {
      q: "Which city hosts the famous Carnival festival?",
      options: ["Rio de Janeiro", "Miami", "Las Vegas"],
      a: "Rio de Janeiro",
    },
    {
      q: "What is the base spirit in a cosmopolitan?",
      options: ["Vodka", "Tequila", "Gin"],
      a: "Vodka",
    },
    {
      q: "Which country is famous for its Scotch whisky?",
      options: ["Ireland", "Scotland", "Canada"],
      a: "Scotland",
    },
    {
      q: "What is the main ingredient in a screwdriver cocktail?",
      options: ["Vodka", "Rum", "Tequila"],
      a: "Vodka",
    },
    {
      q: "Which drink is associated with the Kentucky Derby?",
      options: ["Mint Julep", "Mojito", "Martini"],
      a: "Mint Julep",
    },
    {
      q: "What is the legal age for driving in most countries?",
      options: ["16", "18", "21"],
      a: "18",
    },
    {
      q: "Which spirit is used in a Manhattan cocktail?",
      options: ["Whiskey", "Vodka", "Rum"],
      a: "Whiskey",
    },
    {
      q: "Which country is known for its tequila production?",
      options: ["Mexico", "Spain", "Brazil"],
      a: "Mexico",
    },
    {
      q: "What is the primary alcohol in a negroni?",
      options: ["Gin", "Vodka", "Rum"],
      a: "Gin",
    },

  ],
};

const drinks = [
  "Drink a sip of water!",
  "Take a shot of lemon juice!",
  "Drink with your non-dominant hand!",
];

const avatars = ["🧝‍♂️", "👩‍🚀", "🧛‍♀️", "👨‍🎤", "🧙", "🧟", "🧞‍♂️", "🧚‍♀️"];

export default function QuizMode() {
  const [stage, setStage] = useState("players");
  const [players, setPlayers] = useState([]);
  const [avatarsMap, setAvatarsMap] = useState({});
  const [newPlayer, setNewPlayer] = useState("");
  const [type, setType] = useState("");
  const [index, setIndex] = useState(0);
  const [q, setQ] = useState(null);
  const [result, setResult] = useState(null);
  const [showCard, setShowCard] = useState(null);
  const [cardText, setCardText] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHorror, setShowHorror] = useState(false);
  const [showNextPlayerBanner, setShowNextPlayerBanner] = useState(false);
  const [cardAnimating, setCardAnimating] = useState(false);
  const [showInstructions, setShowInstructions] = useState(() => {
    const stored = localStorage.getItem("showInstructions");
    return stored === null ? true : JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem("showInstructions", JSON.stringify(showInstructions));
  }, [showInstructions]);

  const correctSound = new Audio("/sounds/correct.mp3");
  const wrongSound = new Audio("/sounds/wrong.mp3");

  const startQuiz = () => {
    setStage("quiz");
    loadQuestion();
  };

const loadQuestion = () => {
  const qSet = [...questions[type]]; 

  for (let i = qSet.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qSet[i], qSet[j]] = [qSet[j], qSet[i]];
  }

  setQ(qSet[0]); 
  setResult(null);
  setShowCard(null);
  setShowConfetti(false);
  setShowHorror(false);
};


  const handleAnswer = (option) => {
    if (option === q.a) {
      correctSound.play();
      setResult("correct");
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        nextTurn();
      }, 2500);
    } else {
      wrongSound.play();
      setResult("wrong");
      setShowHorror(true);
      setTimeout(() => {
        setShowHorror(false);
      }, 2000);
    }
  };

  const nextTurn = () => {
    const nextIndex = (index + 1) % players.length;
    setShowNextPlayerBanner(true);
    setTimeout(() => {
      setIndex(nextIndex);
      loadQuestion();
      setShowNextPlayerBanner(false);
    }, 1000);
  };

  const pickCard = (type) => {
    if (type === "truth") {
      const categories = ["normal", "party", "18+"];
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const truthsArray = truth[randomCategory];

      // Fisher–Yates Shuffle
      const shuffled = [...truthsArray];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const selected = shuffled[0];
      setCardAnimating(true);
      setTimeout(() => {
        setShowCard("truth");
        setCardText(selected);
        setCardAnimating(false);
      }, 600);
    } else {
      const text = drinks[Math.floor(Math.random() * drinks.length)];
      setCardAnimating(true);
      setTimeout(() => {
        setShowCard("drink");
        setCardText(text);
        setCardAnimating(false);
      }, 600);
    }
  };

  const addPlayer = () => {
    if (newPlayer.trim()) {
      const avatar = avatars[Math.floor(Math.random() * avatars.length)];
      setAvatarsMap({ ...avatarsMap, [newPlayer]: avatar });
      setPlayers([...players, newPlayer.trim()]);
      setNewPlayer("");
    }
  };

  return (
    <>
      <Helmet>
        <title>Truth or Drink - Quiz Challenge with Friends</title>
        <meta
          name="description"
          content="Play Truth or Drink Offline with friends. Choose a mode of truth or drink, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online and offline party game, online  and offline game,quiz mode,quiz truth or drink, drink game , offline truth or drink "
        />
        <meta
          property="og:title"
          content="Truth or Drink– Ofline Play With Friends"
        />
        <meta
          property="og:description"
          content="Play Truth or Drink offline with friends. Choose a mode of truth or drink, spin the wheel, and enjoy fun challenges!"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 text-white p-6 flex flex-col items-center justify-center relative overflow-hidden font-sans">
        <AnimatePresence>
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 pointer-events-none"
            >
              <Lottie
                animationData={confettiAnimation}
                loop={false}
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-300/20 animate-pulse" />
            </motion.div>
          )}
          {showHorror && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 pointer-events-none bg-red-900/70"
            >
              <Lottie
                animationData={horrorFlash}
                loop={false}
                className="absolute inset-0"
              />
              <div
                className="absolute inset-0 animate-[flicker_0.3s_infinite_alternate]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,0,0,0.4) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {showNextPlayerBanner && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 z-50 flex items-center justify-center py-4 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {avatarsMap[players[(index + 1) % players.length]]}{" "}
              {players[(index + 1) % players.length]}’s Turn!
            </h2>
          </motion.div>
        )}

        {showInstructions && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md z-40 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 md:p-10 rounded-2xl w-full max-w-md shadow-2xl border border-white/10">
              <h2 className="text-3xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                🎉 Truth or Drink Quiz
              </h2>
              <p className="mb-3 text-base text-gray-200">
                1. Enter at least 2 player names to begin
              </p>
              <p className="mb-3 text-base text-gray-200">
                2. Choose a quiz category (Normal, Funny, History, 18+)
              </p>
              <p className="mb-3 text-base text-gray-200">
                3. Answer correctly or face a Truth or Drink challenge!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowInstructions(false)}
                className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition"
              >
                Start the Party!
              </motion.button>
            </div>
          </motion.div>
        )}

        {stage === "players" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 w-full max-w-lg lg:max-w-2xl border border-white/20 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Truth or Drink Quiz Challenge
            </h2>
            <p className="text-sm text-center text-gray-300 mb-6">
              Add{" "}
              <span className="font-bold text-white">at least 2 players</span>{" "}
              to kick off the fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                autoFocus
                placeholder="Enter player name"
                className="px-4 py-3 rounded-lg text-black w-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addPlayer}
                className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-md transition"
              >
                Add Player
              </motion.button>
            </div>
            <ul className="mb-6 space-y-3 text-center">
              {players.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg text-white flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">{avatarsMap[p]}</span> {p}
                </motion.li>
              ))}
            </ul>
            {players.length > 1 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage("type")}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 py-3 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition"
              >
                Choose Category
              </motion.button>
            ) : (
              <p className="text-center text-sm text-gray-400 italic">
                Need at least 2 players to start
              </p>
            )}
          </motion.div>
        )}

        {stage === "type" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 w-full max-w-lg lg:max-w-2xl border border-white/20 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Pick Your Quiz Vibe
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(questions).map((t) => (
                <motion.button
                  key={t}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setType(t)}
                  className={`rounded-xl py-4 px-6 text-lg font-bold text-white transition-all duration-300 ${
                    type === t
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                      : "bg-gray-700/80 hover:bg-gray-600"
                  }`}
                >
                  {t.toUpperCase()}
                </motion.button>
              ))}
            </div>
            {type && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startQuiz}
                className="mt-8 w-full bg-gradient-to-r from-green-400 to-green-600 py-3 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition"
              >
                Start Quiz
              </motion.button>
            )}
          </motion.div>
        )}

        {stage === "quiz" && q && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 w-full max-w-xl lg:max-w-3xl text-center border border-white/20 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 flex items-center justify-center gap-2">
              <span className="text-4xl">{avatarsMap[players[index]]}</span>{" "}
              {players[index]}’s Turn
            </h2>
            <div className="w-full bg-gray-700/50 h-2 rounded-full mb-6">
              <motion.div
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((index + 1) / players.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {result !== "wrong" && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: result === "correct" ? [1, 1.05] : 1, // Use two keyframes
                  opacity: 1,
                  boxShadow:
                    result === "correct"
                      ? ["0 0 0 rgba(0,0,0,0)", "0 0 20px rgba(255,255,0,0.5)"]
                      : "0 0 0 rgba(0,0,0,0)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-xl md:text-2xl font-medium bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl py-6 px-8 mb-8 shadow-lg border border-white/10"
              >
                {q.q}
              </motion.div>
            )}
            {result !== "wrong" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(opt)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-lg font-bold text-lg shadow-md transition-all duration-300"
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            )}

            {result === "wrong" && !showCard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: showHorror ? [-10, 10, -10, 10, 0] : 0,
                }}
                transition={{
                  x: { duration: 0.5, repeat: showHorror ? 1 : 0 },
                }}
                className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-red-900 to-red-700 shadow-xl border border-red-500/30"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-red-200 mb-6">
                  Wrong Answer! Choose Your Fate:
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 8px 16px rgba(255,215,0,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    onClick={() => pickCard("truth")}
                    className="text-xl bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 px-8 py-4 rounded-lg font-semibold shadow-md transition-all duration-300"
                  >
                    Truth
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      rotateY: -10,
                      boxShadow: "0 8px 16px rgba(255,105,180,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    onClick={() => pickCard("drink")}
                    className="text-xl bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 px-8 py-4 rounded-lg font-semibold shadow-md transition-all duration-300"
                  >
                    Drink
                  </motion.button>
                </div>
              </motion.div>
            )}

            {cardAnimating && (
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="mt-8 p-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white text-xl rounded-2xl shadow-xl border border-white/10"
              >
                <p className="animate-pulse">Drawing Card...</p>
              </motion.div>
            )}

            {showCard && !cardAnimating && (
              <motion.div
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-white/10 shadow-xl"
              >
                <p className="text-xl md:text-2xl mb-6 font-medium text-gray-200">
                  {cardText}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextTurn}
                  className="bg-gradient-to-r from-green-400 to-green-600 px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition"
                >
                  Done
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}
