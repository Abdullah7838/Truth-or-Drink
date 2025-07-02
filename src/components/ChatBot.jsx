import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are Abdullah AI Assistant, a helpful chatbot." },
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
        content: "Hi! Welcome to Truth or Drink Pro 🍻 How can I assist you?",
      },
    ]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    const loadingMessage = {
      role: "assistant",
      content: "Truth or Drink is typing...",
      loading: true,
    };

    setMessages([...updatedMessages, loadingMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "deepseek/deepseek-r1:free",
          messages: updatedMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "DeepSeek Chatbot",
          },
        }
      );

      const botReply = response.data.choices[0].message;

      setMessages((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.loading);
        return [...withoutLoading, botReply];
      });
    } catch (err) {
      setMessages((prev) => {
        const withoutLoading = prev.filter((msg) => !msg.loading);
        return [
          ...withoutLoading,
          { role: "assistant", content: "⚠️ Error reaching AI." },
        ];
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f7f7f8]">
      <header className="text-center text-base sm:text-lg font-semibold p-3 border-b bg-white shadow">
        AI Chat Bot 🤖
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
                  } ${msg.loading ? "italic animate-pulse" : ""}`}
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
