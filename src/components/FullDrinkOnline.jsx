import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import { ToastContainer, toast } from "react-toastify";
import { FaShareAlt } from "react-icons/fa";

function FullDrinkOnline({ myusername }) {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [chatMsg, setChatMsg] = useState("");
  const [chats, setChats] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState({ text: "", type: "" });
  const [turning, setTurning] = useState(false);
  const chatContainerRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [previousUsers, setPreviousUsers] = useState([]);

  useEffect(() => {
    if (!myusername || myusername.trim() === "") {
      navigate(`/online/${roomId}`);
    }
  }, [myusername, roomId, navigate]);

  useEffect(() => {
    if (!roomId || !myusername) return;

    const interval = setInterval(() => {
      axios
        .get(
          `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/rooms/${roomId}`
        )
        .then((res) => {
          const currentUsers = res.data.username || [];
          const removedUsers = previousUsers.filter(
            (user) => !currentUsers.includes(user) && user !== myusername
          );

          if (removedUsers.length > 0) {
            removedUsers.forEach((user) => {
              toast.info(
                <span>
                  🚨 <strong style={{ color: "#f00" }}>{user}</strong>{" "}
                  Left
                </span>
              );
            });
          }
          if (!currentUsers.includes(myusername)) {
            alert("Your internet connection is lost.");
            navigate("/");
          }

          setPreviousUsers(currentUsers);
        })
        .catch((err) => {
          console.error("Error checking room:", err);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [roomId, myusername, previousUsers, navigate]);

  useEffect(() => {
    if (!myusername || myusername === "") {
      navigate(`/onlined/${roomId}`);
    }
  });

  useEffect(() => {
    const fetchRoomInfo = () => {
      axios
        .get(
          `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/rooms/${roomId}`
        )
        .then((res) => {
          setRoom(res.data);
          setChats(res.data.chats || []);
          setCurrentTurn(res.data.currentTurn || 0);
          setCurrentPrompt({
            text: res.data.currentPrompt || "",
            type: res.data.currentType || "",
          });
        })
        .catch((err) => {
          console.error("Error loading room:", err);
          alert("❌ Failed to load room.");
        });
    };

    fetchRoomInfo();

    const interval = setInterval(fetchRoomInfo, 5000);

    const events = new EventSource(
      `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/${roomId}/stream`
    );

    events.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "turnUpdate") {
        setRoom(data.room);
        setCurrentTurn(data.room.currentTurn);
        setCurrentPrompt({
          text: data.room.currentPrompt,
          type: data.room.currentType,
        });
      } else {
        setChats((prev) => [...prev, data]);
      }
    };

    // Cleanup: close SSE and clear interval
    return () => {
      events.close();
      clearInterval(interval);
    };
  }, [roomId]);

  // Send chat message
  const sendChat = async () => {
    if (!chatMsg.trim()) return;

    try {
      await axios.post(
        `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/${roomId}/chat`,
        {
          username: myusername,
          message: chatMsg,
        }
      );
      setChatMsg("");
    } catch (err) {
      console.error("Send chat error:", err);
      alert("❌ Failed to send message.");
    }
  };

  const handleTurn = async (type) => {
    const currentUser = room?.username?.[currentTurn];
    if (myusername !== currentUser) {
      alert("⛔ It's not your turn!");
      return;
    }

    setTurning(true);
    try {
      await axios.patch(
        `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/${roomId}/turn`,
        {
          type,
          username: myusername,
        }
      );
      console.log("Sending turn request as:", myusername);
      console.log("Expected turn:", room?.username?.[currentTurn]);
    } catch (err) {
      console.error("Turn error:", err);
      alert("❌ Failed to take turn.");
    } finally {
      setTurning(false);
    }
  };

useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }
}, [chats]);

  const currentUser = room?.username?.[currentTurn];
  const isMyTurn = myusername === currentUser;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendChat();
    }
  };

  const addEmoji = (emojiData) => {
    setChatMsg((prev) => prev + emojiData.emoji);
  };

  useEffect(() => {
    if (!roomId || !myusername) return;

    const sendHI = async () => {
      const msg = "hi";
      try {
        await axios.post(
          `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/${roomId}/ping`,
          {
            username: myusername,
            message: msg,
          }
        );
        console.log("✅ Server Connected by", myusername);
      } catch (err) {
        console.error("❌ Ping failed:", err);
      }
    };

    sendHI();
    const interval = setInterval(sendHI, 20000);

    return () => clearInterval(interval);
  }, [roomId, myusername]);

  const handleShare = () => {
    const fullUrl = `${window.location.origin}/drooms/${roomId}/dgame`;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        toast.success("🔗 Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Clipboard error:", err);
        toast.error("Failed to copy the link.");
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Game Section */}
      {/* Game Section */}
      <div className="bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-3xl shadow-2xl p-6 flex flex-col backdrop-blur-sm border border-purple-200">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-3">
          🎮 Room: {room?.roomName}
        </h1>
        <button
          aria-label="Share Room Link"
          type="button"
          onClick={handleShare}
          className="mt-4 mb-4 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition duration-300 shadow"
        >
          <FaShareAlt />
          Share Room Link
        </button>

        <p className="text-gray-700 font-medium mb-2">
          👥 Players:
          {room?.username?.map((user, i) => (
            <span
              key={i}
              className={`mx-1 px-2 py-1 rounded-full text-sm font-semibold ${
                user === currentUser
                  ? "bg-blue-200 text-blue-900"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {user}
            </span>
          ))}
        </p>

        <p className="text-blue-600 font-semibold mb-4">
          🧍 You are: <span className="underline">{myusername}</span>
        </p>

        <div className="bg-white/60 backdrop-blur-lg p-5 rounded-xl shadow-inner mb-4 text-center">
          <p className="text-xl font-bold text-gray-800 animate-pulse">
            🎯 It's <span className="text-blue-600">{currentUser}</span>'s turn!
          </p>
        </div>

        {isMyTurn && (
          <p className="text-green-600 font-semibold text-center animate-bounce mb-4 text-lg">
            ✅ Your turn! Choose: Truth or Drink
          </p>
        )}

        {currentPrompt.text && (
          <div className="bg-white/90 border-l-4 border-purple-500 shadow-md p-5 rounded-2xl mb-4 text-center transition-all duration-500 animate-fade-in">
            <p className="text-lg font-bold text-purple-700">
              🧠 {currentUser} must do:
            </p>
            <p className="text-black mt-2 font-bold">{currentPrompt.text}</p>
          </div>
        )}

        <div className="flex justify-center gap-6 mt-4">
          <button
            aria-label="Truth Button"
            onClick={() => handleTurn("truth")}
            disabled={!isMyTurn || turning}
            className={`transition px-6 py-3 rounded-full text-white font-semibold text-lg shadow-md hover:scale-105 duration-300 ${
              isMyTurn
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            🤫 Truth
          </button>
          <button
            aria-label="Drink Button"
            onClick={() => handleTurn("dare")}
            disabled={!isMyTurn || turning}
            className={`transition px-6 py-3 rounded-full text-white font-semibold text-lg shadow-md hover:scale-105 duration-300 ${
              isMyTurn
                ? "bg-pink-600 hover:bg-pink-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Drink 🍹
          </button>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col h-[500px] border border-purple-200">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">
          💬 Live Chat
        </h2>

        {/* Chat List */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 scroll-smooth">
          {chats.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl max-w-[75%] ${
                msg.username === myusername
                  ? "bg-blue-100 self-end ml-auto shadow-sm"
                  : "bg-gray-100 self-start mr-auto shadow-sm"
              }`}
            >
              <p className="text-sm text-gray-500 font-medium mb-1">
                {msg.username === myusername ? "You" : msg.username}
              </p>
              <p className="text-gray-800 break-words">{msg.message}</p>
            </div>
          ))}
          <div ></div>
        </div>

        {/* Input + Emoji */}
        <div className="relative">
          {showEmoji && (
            <div className="absolute bottom-16 right-0 z-10">
              <EmojiPicker onEmojiClick={addEmoji} theme="light" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <button
            aria-label="Toggle Emoji Picker"
            type="button"
            onClick={() => setShowEmoji(!showEmoji)}
            className="text-xl hover:scale-110 transition"
            title="Add emoji"
          >
            😀
          </button>
          <input
            value={chatMsg}
            onChange={(e) => setChatMsg(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message and hit Enter..."
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
          <button
            aria-label="Send message"
            type="button"
            onClick={sendChat}
            className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition"
          >
            🚀 Send
          </button>
        </div>
      </div>
      <button
        aria-label="Go Back"
        type="button"
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-white bg-black/40 hover:bg-black/60 px-3 py-1 rounded-lg text-sm font-semibold transition"
      >
        ← Back
      </button>
      <ToastContainer />
    </div>
  );
}

export default FullDrinkOnline;
