import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopupNotice from "./PopupNotice";
function DrinkRooms({ setMainUsername }) {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  setMainUsername("");
 useEffect(() => {
  const fetchRooms = () => {
    fetch("https://truth-or-dare-backend-1kg2.onrender.com/drink/api/public") 
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch public rooms:", err);
        setLoading(false);
      });
  };

  fetchRooms(); 
  const interval = setInterval(fetchRooms, 10000);

  return () => clearInterval(interval); 
}, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#9333ea] to-[#ec4899] py-10">
      <PopupNotice />
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
          🔮 Join or Create a Room
        </h1>

        <Link to="/create-drink-room">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-indigo-700 font-bold py-3 px-5 rounded-xl shadow hover:bg-indigo-100 transition-all duration-300 mb-8">
            <FaPlusCircle />
            Create Your Own Room
          </button>
        </Link>

        <h2 className="text-2xl font-semibold text-center mb-4 border-b border-white/30 pb-2">
          🌐 Public Rooms
        </h2>

        {loading ? (
          <div className="text-center animate-pulse text-gray-200">
            Loading rooms...
          </div>
        ) : rooms.length === 0 ? (
          <div className="text-center text-gray-300">
            No public rooms available
          </div>
        ) : (
          <div className="space-y-4">
            {rooms.map((room) => (
              <Link to={`/drooms/${room._id}/dgame`} key={room._id}>
                <div className="w-full bg-white/20 hover:bg-white/30 cursor-pointer py-3 px-5 rounded-xl transition-all duration-300 border border-white/20 shadow backdrop-blur mt-1">
                  <p className="text-lg font-semibold flex justify-between items-center">
                    {room.roomName}
                    <span className="text-sm bg-white/30 text-white px-3 py-1 rounded-full ml-2">
                      👥 {Array.isArray(room.username) ? room.username.length : 0} Online
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => navigate(-1)} 
        className="absolute top-4 left-4 text-white bg-black/40 hover:bg-black/60 px-3 py-1 rounded-lg text-sm font-semibold transition"
      >
        ← Back
      </button>
    </div>
  );
}

export default DrinkRooms;
