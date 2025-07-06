import React, { useEffect, useRef, useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import ChatBot from "./ChatBot";

const ChatLauncher = () => {
  const [showChat, setShowChat] = useState(false);
  const [showText, setShowText] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Want to chat with DrinkBot? Click here";

  const indexRef = useRef(0);
  const currentTextRef = useRef("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const type = () => {
      if (indexRef.current < fullText.length) {
        currentTextRef.current += fullText.charAt(indexRef.current);
        setTypedText(currentTextRef.current);
        indexRef.current++;
        timeoutRef.current = setTimeout(type, 50);
      } else {
        timeoutRef.current = setTimeout(() => setShowText(false), 3000);
      }
    };

    type();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      {/* 📝 Typing Text */}
      {showText && (
        <div className="fixed bottom-24 right-6 text-white font-semibold text-sm sm:text-base animate-fade-in z-50 bg-red-700 px-3 py-2 rounded-lg shadow-md">
          {typedText}
        </div>
      )}

      {/* 💬 Floating Chat Button */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition transform ${
          !showChat ? "animate-bubble" : ""
        }`}
        aria-label="Toggle ChatBot"
      >
        {showChat ? (
          <FaTimes className="w-5 h-5" />
        ) : (
          <FaCommentDots className="w-6 h-6" />
        )}
      </button>

      {/* 🧠 ChatBot Panel */}
      {showChat && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-[95%] sm:w-[90%] max-w-sm h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col">
          <ChatBot />
        </div>
      )}
    </>
  );
};

export default ChatLauncher;
