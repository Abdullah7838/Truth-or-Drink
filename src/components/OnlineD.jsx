import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function OnlineD({ setMainUsername }) {
  const [username, setUsername] = useState("");
  const [roomInfo, setRoomInfo] = useState(null);
  const [error, setError] = useState("");
  const [button, setButton] = useState("join room");
  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      setButton("join room");
      setMainUsername("");
      axios
        .get(`https://truth-or-dare-backend-1kg2.onrender.com/drink/api/rooms/${roomId}`)
        .then((res) => setRoomInfo(res.data))
        .catch((err) => {
          setButton("join room");
          console.error("Failed to fetch room info:", err);
          setError("❌ Failed to load room. Make sure it exists.");
        });
    }
  }, [roomId, setMainUsername]);

  const handleJoin = async () => {
    const trimmedName = username.trim();
    setButton("Joining...");
    if (trimmedName === "") {
      setButton("join room");
      setError("⚠️ Username is required");
      return;
    }

    try {
      const res = await axios.patch(
        `https://truth-or-dare-backend-1kg2.onrender.com/drink/api/${roomId}/join`,
        { username: trimmedName }
      );
setButton("join room");
      if (res.status === 200) {
        setMainUsername(trimmedName);
        setError("");
        navigate(`/drooms/${roomId}/dgame`);
      }
    } catch (err) {
      setButton("join room");
      console.error("Error joining room:", err);
      const msg =
        err.response?.status === 409
          ? "⚠️ Username already exists. Choose a different one."
          : err.response?.data?.error || "❌ Failed to join room. Try again.";
      setError(msg);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // go back
    } else {
      navigate("/"); // fallback home
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl w-full max-w-md text-white">
        {/* Room Info */}
        {roomInfo && (
          <div className="mb-6 text-center bg-white/10 p-4 rounded-xl">
            <h1 className="text-2xl font-bold">🔗 Room: {roomInfo.roomName}</h1>
            <p className="text-white/80 text-sm">
              Players: {roomInfo.username?.join(", ") || "None yet"}
            </p>
          </div>
        )}

        <h2 className="text-xl font-bold mb-4 text-center">
          Enter Your Username
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
        />

        {error && (
          <p className="text-red-600 mb-3 text-sm font-bold">{error}</p>
        )}

        <button
          aria-label="Join Room"
          type="button"
          onClick={handleJoin}
          className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg hover:bg-blue-100 transition duration-300"
        >
          {button}
        </button>
      </div>

      <button
        aria-label="Go Back"
        type="button"
        onClick={handleBack}
        className="absolute top-4 left-4 text-white bg-black/40 hover:bg-black/60 px-3 py-1 rounded-lg text-sm font-semibold transition"
      >
        ← Back
      </button>
    </div>
  );
}

export default OnlineD;
