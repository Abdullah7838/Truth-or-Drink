import React, { useState, useRef, useEffect } from "react";
import truth from "./All-Truths/truths"; // 👈 Your truths + dares array

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `You are "Truth or Drink Pro AI Assistant", the official AI chatbot of www.truthordrink.pro, created by Muhammad Abdullah.`,
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const hasWelcomed = useRef(false);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (hasWelcomed.current) return;
    hasWelcomed.current = true;

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Hi! Welcome to Truth or Drink Pro. How can I assist you?",
      },
    ]);
  }, []);

  const getRandomItem = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

const getMultipleItems = (arr, count) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};


  const isUnrelated = (msg) => {
    const unrelated = [
      "how are you",
      "who made you",
      "who owns you",
      "tell me about this",
      "what is this website",
      "creator",
      "drink",
      "what can you do",
      "help",
      "about",
    ];
    return unrelated.some((phrase) => msg.includes(phrase));
  };

 const getBotReply = (input) => {
  const msg = input.toLowerCase();

  // 200+ common phrasings
  const truthRegex = /\b(?:tell|give|show)?\s*(?:me)?\s*(\d+)?\s*(truths?|truth)\b/;
  const dareRegex = /\b(?:tell|give|show)?\s*(?:me)?\s*(\d+)?\s*(dares?|dare)\b/;
  const drinkRegex = /\b(?:tell|give|show)?\s*(?:me)?\s*(\d+)?\s*(drinks?|drink)\b/;

  const greetings = ["hi", "hello", "hey", "what's up"];
  const about = [
    "who are you", "who made you", "who is the owner", "who created you",
    "what is this website", "who made this", "who developed this"
  ];

  // 🎯 Greet
  if (greetings.some((g) => msg === g)) {
    return "👋 Hi there! I'm the official AI assistant of Truth or Drink Pro. Ask me for truths, dares, drinks, or game rules!";
  }

  // 👤 About/Creator
  if (about.some((a) => msg.includes(a))) {
    return `👨‍💻 I was created by Muhammad Abdullah.\n🔗 LinkedIn: https://www.linkedin.com/in/muhammad-abdullah-454a0134b`;
  }

  // 📢 Game Rules
  if (msg.includes("rules")) {
    return `📜 Game Rules:\n1. Ask “Truth or Drink?”\n2. If someone picks Truth, they must answer honestly.\n3. If they refuse, they drink!`;
  }

  // 🌐 Game Modes
  if (msg.includes("online")) {
    return "🌐 Online Mode: Join or create public/private rooms with up to 9 players, and chat live!";
  }

  if (msg.includes("offline")) {
    return "📴 Offline Mode: Play on one device with as many friends as you like!";
  }

  if (msg.includes("ultimate") || msg.includes("horror")) {
    return "💀 Ultimate Mode: Horror-themed Truth or Drink experience with 18+ questions (Offline only).";
  }

  // 🔢 Specific Truth by Number e.g. "truth of 100"
  const specificTruthMatch = msg.match(/truth(?:\s+of)?\s+(\d+)/);
  if (specificTruthMatch) {
    const index = parseInt(specificTruthMatch[1]) - 1;
    if (index >= 0 && index < truth.normal.length) {
      return `🔢 Truth #${index + 1}: ${truth.normal[index]}`;
    } else {
      return `⚠️ We only have ${truth.normal.length} truths. Please ask between 1 and ${truth.normal.length}.`;
    }
  }

  // 📊 Truth count
  if (msg.includes("how many truths") || msg.includes("total truths")) {
    return `📊 There are currently ${truth.normal.length} truths in our database.`;
  }

  // 🧠 Match: Truths
  const truthMatch = msg.match(truthRegex);
  if (truthMatch) {
    const num = parseInt(truthMatch[1]) || 1;
    const count = Math.min(num, truth.normal.length);
    const items = getMultipleItems(truth.normal, count);
    return `🤔 Here ${count === 1 ? "is a Truth" : `are ${count} Truths`}:\n\n${items
      .map((t, i) => `${i + 1}. ${t}`)
      .join("\n")}`;
  }

  // 💪 Match: Dares
  const dareMatch = msg.match(dareRegex);
  if (dareMatch) {
    const num = parseInt(dareMatch[1]) || 1;
    const count = Math.min(num, truth.dare.length);
    const items = getMultipleItems(truth.dare, count);
    return `😈 Dare${count > 1 ? "s" : ""}:\n\n${items
      .map((d, i) => `${i + 1}. ${d}`)
      .join("\n")}`;
  }

  // 🍻 Match: Drinks
  const drinkMatch = msg.match(drinkRegex);
  if (drinkMatch) {
    const num = parseInt(drinkMatch[1]) || 1;
    const count = Math.min(num, truth.drink.length);
    const items = getMultipleItems(truth.drink, count);
    return `🍻 Drink${count > 1 ? "s" : ""}:\n\n${items
      .map((d, i) => `${i + 1}. ${d}`)
      .join("\n")}`;
  }

  // ❌ Fallback for unrelated or unsupported commands
  return "❌ I'm the Truth or Drink Pro chatbot. I only assist with Truth or Drink. For anything else, visit: https://truthordrink.pro/contact";
};


  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botResponse = getBotReply(input);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: botResponse,
        },
      ]);
    }, 400); // Optional typing delay
  };

  return (
    <div className="h-full flex flex-col bg-[#f7f7f8]">
      <header className="text-center text-base sm:text-lg font-semibold p-3 border-b bg-white shadow">
        DrinkBot 🤖
      </header>

      <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="space-y-4">
          {messages
            .filter((msg) => msg.role !== "system")
            .map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-lg text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          <div ref={chatEndRef} />
        </div>
      </main>

      <footer className="border-t bg-white p-3 sm:p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex gap-2"
        >
          <input
            className="flex-1 border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            aria-label="Send message"
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatBot;
