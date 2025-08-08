import React, { useState, useEffect } from "react";
import { Heart, Trophy, Shuffle, RotateCcw } from "lucide-react";

const truthCards = [
  {
    id: 1,
    text: "What's one thing you've never told your love?",
    points: 3,
    level: "spicy",
  },
  {
    id: 2,
    text: "Have you ever pretended to like a gift from your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 3,
    text: "What's a secret fantasy you haven't shared with your love?",
    points: 4,
    level: "spicy",
  },
  {
    id: 4,
    text: "Have you ever gone through your partner's phone?",
    points: 3,
    level: "spicy",
  },
  {
    id: 5,
    text: "When was the last time you lied to your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 6,
    text: "What's your biggest fear about this relationship?",
    points: 2,
    level: "medium",
  },
  {
    id: 7,
    text: "Do you keep something from your partner even today?",
    points: 4,
    level: "spicy",
  },
  {
    id: 8,
    text: "What's one thing you would change in your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 9,
    text: "Have you ever felt attraction for someone else recently?",
    points: 4,
    level: "spicy",
  },
  {
    id: 10,
    text: "What's the most romantic thing you wish your love would do?",
    points: 1,
    level: "mild",
  },
  {
    id: 11,
    text: "What's a small habit of your partner that secretly annoys you?",
    points: 2,
    level: "medium",
  },
  {
    id: 12,
    text: "Have you ever faked an emotion to avoid a fight?",
    points: 3,
    level: "spicy",
  },
  {
    id: 13,
    text: "What's a gift you gave your partner that you didn't like?",
    points: 2,
    level: "medium",
  },
  {
    id: 14,
    text: "What's the most embarrassing thing you've done for love?",
    points: 3,
    level: "spicy",
  },
  {
    id: 15,
    text: "Do you ever compare your relationship to others?",
    points: 2,
    level: "medium",
  },
  {
    id: 16,
    text: "What's a secret you've kept from your partner about your past?",
    points: 4,
    level: "spicy",
  },
  {
    id: 17,
    text: "Have you ever regretted something you said to your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 18,
    text: "What's a dream date your partner doesn't know you want?",
    points: 1,
    level: "mild",
  },
  {
    id: 19,
    text: "Have you ever snooped on your partner's social media?",
    points: 3,
    level: "spicy",
  },
  {
    id: 20,
    text: "What's one thing your partner does that makes you jealous?",
    points: 3,
    level: "spicy",
  },
  {
    id: 21,
    text: "What's a hobby you wish you could share with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 22,
    text: "Have you ever doubted your partner's loyalty?",
    points: 4,
    level: "spicy",
  },
  {
    id: 23,
    text: "What's a moment you felt unappreciated by your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 24,
    text: "What's a personal goal you haven't shared with your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 25,
    text: "Have you ever hidden a purchase from your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 26,
    text: "What's a memory with your partner you cherish most?",
    points: 1,
    level: "mild",
  },
  {
    id: 27,
    text: "Have you ever lied about your feelings to keep the peace?",
    points: 3,
    level: "spicy",
  },
  {
    id: 28,
    text: "What's one thing your partner doesn't know about your family?",
    points: 4,
    level: "spicy",
  },
  {
    id: 29,
    text: "What's a compliment you wish your partner gave you more often?",
    points: 1,
    level: "mild",
  },
  {
    id: 30,
    text: "Have you ever felt embarrassed by something your partner did?",
    points: 2,
    level: "medium",
  },
  {
    id: 31,
    text: "What's a secret you've shared with someone else but not your partner?",
    points: 4,
    level: "spicy",
  },
  {
    id: 32,
    text: "What's a habit you wish your partner would pick up?",
    points: 2,
    level: "medium",
  },
  {
    id: 33,
    text: "Have you ever had a crush on someone your partner knows?",
    points: 4,
    level: "spicy",
  },
  {
    id: 34,
    text: "What's the sweetest thing your partner has ever done for you?",
    points: 1,
    level: "mild",
  },
  {
    id: 35,
    text: "Have you ever avoided a topic to prevent an argument?",
    points: 3,
    level: "spicy",
  },
  {
    id: 36,
    text: "What's a fear you have about growing old with your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 37,
    text: "What's a small gesture you love from your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 38,
    text: "Have you ever kept a secret to protect your partner's feelings?",
    points: 3,
    level: "spicy",
  },
  {
    id: 39,
    text: "What's one thing you admire about your partner's personality?",
    points: 1,
    level: "mild",
  },
  {
    id: 40,
    text: "Have you ever felt your partner didn't understand you?",
    points: 2,
    level: "medium",
  },
  {
    id: 41,
    text: "What's a past relationship detail you haven't shared?",
    points: 4,
    level: "spicy",
  },
  {
    id: 42,
    text: "What's a song that reminds you of your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 43,
    text: "Have you ever lied about your whereabouts to your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 44,
    text: "What's one thing you wish you could redo in your relationship?",
    points: 2,
    level: "medium",
  },
  {
    id: 45,
    text: "What's a guilty pleasure you haven't told your partner about?",
    points: 3,
    level: "spicy",
  },
  {
    id: 46,
    text: "What's a moment you felt most connected to your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 47,
    text: "Have you ever questioned if you're right for each other?",
    points: 4,
    level: "spicy",
  },
  {
    id: 48,
    text: "What's a habit of yours your partner doesn't know about?",
    points: 3,
    level: "spicy",
  },
  {
    id: 49,
    text: "What's a place you want to visit with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 50,
    text: "Have you ever felt judged by your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 51,
    text: "What's a fear you have about your partner's habits?",
    points: 3,
    level: "spicy",
  },
  {
    id: 52,
    text: "What's a small thing your partner does that melts your heart?",
    points: 1,
    level: "mild",
  },
  {
    id: 53,
    text: "Have you ever kept a secret about your health from your partner?",
    points: 4,
    level: "spicy",
  },
  {
    id: 54,
    text: "What's one thing you love about your relationship?",
    points: 1,
    level: "mild",
  },
  {
    id: 55,
    text: "Have you ever felt tempted to break a promise to your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 56,
    text: "What's a moment you wish you could relive with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 57,
    text: "Have you ever hidden a mistake from your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 58,
    text: "What's a quality you wish you had that your partner admires?",
    points: 2,
    level: "medium",
  },
  {
    id: 59,
    text: "What's a secret ambition you haven't shared with your partner?",
    points: 4,
    level: "spicy",
  },
  {
    id: 60,
    text: "What's a quirky thing you love about your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 61,
    text: "Have you ever felt your partner was hiding something from you?",
    points: 3,
    level: "spicy",
  },
  {
    id: 62,
    text: "What's a time you felt proud of your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 63,
    text: "Have you ever lied about liking something your partner loves?",
    points: 2,
    level: "medium",
  },
  {
    id: 64,
    text: "What's a moment you felt let down by your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 65,
    text: "What's a tradition you want to start with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 66,
    text: "Have you ever kept a secret about your finances?",
    points: 4,
    level: "spicy",
  },
  {
    id: 67,
    text: "What's one thing you love about your partner's appearance?",
    points: 1,
    level: "mild",
  },
  {
    id: 68,
    text: "Have you ever felt insecure about your relationship?",
    points: 3,
    level: "spicy",
  },
  {
    id: 69,
    text: "What's a small act of kindness your partner does often?",
    points: 1,
    level: "mild",
  },
  {
    id: 70,
    text: "Have you ever avoided telling your partner about a bad day?",
    points: 2,
    level: "medium",
  },
  {
    id: 71,
    text: "What's a fear you have about your future together?",
    points: 4,
    level: "spicy",
  },
  {
    id: 72,
    text: "What's a memory with your partner that makes you laugh?",
    points: 1,
    level: "mild",
  },
  {
    id: 73,
    text: "Have you ever lied about your past to impress your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 74,
    text: "What's a change you wish your partner would make for you?",
    points: 2,
    level: "medium",
  },
  {
    id: 75,
    text: "What's a romantic gesture you secretly want from your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 76,
    text: "Have you ever felt your partner didn't trust you?",
    points: 3,
    level: "spicy",
  },
  {
    id: 77,
    text: "What's a moment you felt truly understood by your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 78,
    text: "Have you ever hidden a friendship from your partner?",
    points: 4,
    level: "spicy",
  },
  {
    id: 79,
    text: "What's a quality in your partner you wish you had?",
    points: 2,
    level: "medium",
  },
  {
    id: 80,
    text: "What's a time you felt most vulnerable with your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 81,
    text: "What's a silly thing you love doing with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 82,
    text: "Have you ever kept a secret about your career from your partner?",
    points: 4,
    level: "spicy",
  },
  {
    id: 83,
    text: "What's a moment you felt your partner went out of their way for you?",
    points: 1,
    level: "mild",
  },
  {
    id: 84,
    text: "Have you ever lied about your plans to avoid your partner?",
    points: 3,
    level: "spicy",
  },
  {
    id: 85,
    text: "What's a habit you wish you could break for your partner?",
    points: 2,
    level: "medium",
  },
  {
    id: 86,
    text: "What's a dream you have for your relationship?",
    points: 1,
    level: "mild",
  },
  {
    id: 87,
    text: "Have you ever felt your partner didn't appreciate you enough?",
    points: 3,
    level: "spicy",
  },
  {
    id: 88,
    text: "What's a small thing your partner does that annoys you?",
    points: 2,
    level: "medium",
  },
  {
    id: 89,
    text: "What's a moment you felt closest to your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 90,
    text: "Have you ever hidden a past mistake from your partner?",
    points: 4,
    level: "spicy",
  },
  {
    id: 91,
    text: "What's a romantic fantasy you haven't shared?",
    points: 4,
    level: "spicy",
  },
  {
    id: 92,
    text: "What's a time your partner made you feel special?",
    points: 1,
    level: "mild",
  },
  {
    id: 93,
    text: "Have you ever felt your partner was too controlling?",
    points: 3,
    level: "spicy",
  },
  {
    id: 94,
    text: "What's a goal you want to achieve with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 95,
    text: "Have you ever lied about your feelings for someone else?",
    points: 4,
    level: "spicy",
  },
  {
    id: 96,
    text: "What's a moment you wish your partner noticed more?",
    points: 2,
    level: "medium",
  },
  {
    id: 97,
    text: "What's a small thing you do to make your partner happy?",
    points: 1,
    level: "mild",
  },
  {
    id: 98,
    text: "Have you ever felt your relationship was one-sided?",
    points: 3,
    level: "spicy",
  },
  {
    id: 99,
    text: "What's a memory you want to create with your partner?",
    points: 1,
    level: "mild",
  },
  {
    id: 100,
    text: "Have you ever kept a secret to avoid hurting your partner?",
    points: 4,
    level: "spicy",
  },
];

const drinkCards = [
  {
    id: 11,
    text: "Take a shot if you've sent a spicy pic in the last 7 days.",
    points: 2,
    level: "medium",
  },
  {
    id: 12,
    text: "Drink if you've ever checked your love's messages.",
    points: 3,
    level: "spicy",
  },
  {
    id: 13,
    text: "Sip if you've ever ghosted someone before this relationship.",
    points: 1,
    level: "mild",
  },
  {
    id: 14,
    text: "Take 2 sips if you've ever lied about your feelings.",
    points: 3,
    level: "spicy",
  },
  {
    id: 15,
    text: "Drink if you've stalked your partner's ex on social media.",
    points: 2,
    level: "medium",
  },
  {
    id: 16,
    text: "Take a shot if you've faked a reaction to avoid drama.",
    points: 2,
    level: "medium",
  },
  {
    id: 17,
    text: "Sip if you've ever flirted with someone while taken.",
    points: 4,
    level: "spicy",
  },
  {
    id: 18,
    text: "Drink if you've ever had a secret crush while in love.",
    points: 3,
    level: "spicy",
  },
  {
    id: 19,
    text: "Take a shot if you've argued over small things.",
    points: 1,
    level: "mild",
  },
  {
    id: 20,
    text: "Sip if you've kept a past relationship hidden.",
    points: 3,
    level: "spicy",
  },
];

export default function TruthOrDrinkCardGame() {
  const [gameState, setGameState] = useState({
    player1Score: 0,
    player2Score: 0,
    currentPlayer: 1,
    round: 1,
    maxRounds: 10,
    cardsPlayed: 0,
    gameOver: false,
  });

  const [deck, setDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showScore, setShowScore] = useState(false);

  // Initialize and shuffle deck
  useEffect(() => {
    shuffleDeck();
  }, []);

  const shuffleDeck = () => {
    const allCards = [...truthCards, ...drinkCards];
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentCard(null);
  };

  const drawCard = (cardType) => {
    if (deck.length === 0 || gameState.gameOver) return;

    const availableCards = deck.filter((card) =>
      cardType === "truth" ? card.id <= 10 : card.id > 10
    );

    if (availableCards.length === 0) return;

    const randomCard =
      availableCards[Math.floor(Math.random() * availableCards.length)];

    setIsFlipped(true);
    setTimeout(() => {
      setCurrentCard(randomCard);
      setIsFlipped(false);

      // Remove card from deck
      setDeck((prev) => prev.filter((card) => card.id !== randomCard.id));
    }, 300);
  };

  const handleAnswer = (answered) => {
    if (!currentCard) return;

    const points = answered ? currentCard.points : 0;

    setGameState((prev) => {
      const newState = {
        ...prev,
        cardsPlayed: prev.cardsPlayed + 1,
        currentPlayer: prev.currentPlayer === 1 ? 2 : 1,
      };

      if (prev.currentPlayer === 1) {
        newState.player1Score += points;
      } else {
        newState.player2Score += points;
      }

      if (newState.cardsPlayed >= newState.maxRounds * 2) {
        newState.gameOver = true;
      } else if (newState.cardsPlayed % 2 === 0) {
        newState.round += 1;
      }

      return newState;
    });

    setCurrentCard(null);
    setShowScore(true);
    setTimeout(() => setShowScore(false), 2000);
  };

  const resetGame = () => {
    setGameState({
      player1Score: 0,
      player2Score: 0,
      currentPlayer: 1,
      round: 1,
      maxRounds: 10,
      cardsPlayed: 0,
      gameOver: false,
    });
    shuffleDeck();
    setCurrentCard(null);
    setShowScore(false);
  };

  const getWinner = () => {
    if (gameState.player1Score > gameState.player2Score) return "Player 1";
    if (gameState.player2Score > gameState.player1Score) return "Player 2";
    return "It's a Tie";
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "mild":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "spicy":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-700 flex flex-col items-center justify-center p-4 text-white">
      {/* Header */}
      <div className="w-full max-w-4xl mb-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
          Truth or Drink Card Game
        </h1>

        {/* Score Board */}
        <div className="flex justify-between items-center bg-black/30 rounded-2xl p-4 backdrop-blur-lg">
          <div className="text-center">
            <div className="text-sm opacity-80">Player 1</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-400" />
              {gameState.player1Score}
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold">Round {gameState.round}</div>
            <div className="text-sm opacity-80">of {gameState.maxRounds}</div>
            <div className="text-xs mt-1">
              {gameState.currentPlayer === 1
                ? "Player 1's Turn"
                : "Player 2's Turn"}
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm opacity-80">Player 2</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              {gameState.player2Score}
              <Heart className="w-6 h-6 text-pink-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Game Over Screen */}
      {gameState.gameOver && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-3xl text-center max-w-md mx-4">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
            <div className="text-xl mb-6">
              <div className="mb-2">
                Winner:{" "}
                <span className="font-bold text-yellow-300">{getWinner()}</span>
              </div>
              <div className="text-lg">
                Player 1: {gameState.player1Score} points
                <br />
                Player 2: {gameState.player2Score} points
              </div>
            </div>
            <button
              onClick={resetGame}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Score Animation */}
      {showScore && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-yellow-300 z-40 animate-bounce">
          +{currentCard?.points}
        </div>
      )}

      {/* Main Card Area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <div
          className={`w-full h-40 mb-8 rounded-3xl flex items-center justify-center text-center transition-transform duration-300 ${
            isFlipped ? "scale-95 rotate-y-180" : "scale-100"
          }`}
          style={{
            background: currentCard
              ? `linear-gradient(135deg, ${
                  currentCard.id <= 10 ? "#3B82F6" : "#EC4899"
                }, ${currentCard.id <= 10 ? "#1E40AF" : "#BE185D"})`
              : "linear-gradient(135deg, #6B7280, #374151)",
          }}
        >
          <div className="p-8">
            {currentCard ? (
              <div>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${getLevelColor(
                    currentCard.level
                  )}`}
                >
                  {currentCard.level.toUpperCase()} • {currentCard.points} pts
                </div>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  {currentCard.text}
                </p>
              </div>
            ) : (
              <div>
                <div className="text-6xl mb-4 flex justify-center items-center">
                  <div
                    className="w-20 h-20 bg-white rounded-xl flex justify-center items-center"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
                  >
                    <img
                      src="/uno.webp"
                      alt="Uno Card"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-semibold">
                  {gameState.gameOver
                    ? "Game Complete!"
                    : `Player ${gameState.currentPlayer}, choose your card!`}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {!gameState.gameOver && (
          <div className="w-full">
            {!currentCard ? (
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button
                  onClick={() => drawCard("truth")}
                  disabled={deck.filter((c) => c.id <= 10).length === 0}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Draw Truth Card
                </button>
                <button
                  onClick={() => drawCard("drink")}
                  disabled={deck.filter((c) => c.id > 10).length === 0}
                  className="px-8 py-4 bg-pink-600 hover:bg-pink-500 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  🍷 Draw Drink Card
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleAnswer(true)}
                  className="cursor-pointer px-8 py-4 bg-green-600 hover:bg-green-500 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  Yes / I'll Answer
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="cursor-pointer px-8 py-4 bg-red-600 hover:bg-red-500 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  Pass / I'll Drink
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={shuffleDeck}
          className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          title="Shuffle Deck"
        >
          <Shuffle className="w-5 h-5" />
        </button>
        <button
          onClick={resetGame}
          className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          title="Reset Game"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Game Info */}
      <div className="text-center mt-4 text-sm opacity-80 max-w-md">
        <p className="mb-2">Cards in deck: {deck.length}</p>
        <p>
          Answer truthfully to earn points, or pass and take a drink. Most
          points after {gameState.maxRounds} rounds wins!
        </p>
      </div>
    </div>
  );
}
