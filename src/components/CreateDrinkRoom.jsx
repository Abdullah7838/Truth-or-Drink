import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function CreateDrinkRoom() {
  const [roomname, setRoomName] = useState('');
  const [roomType, setRoomType] = useState('');
  const [error, setError] = useState('');
  const [Button, setButton] = useState('Create Room');
  const navigate = useNavigate();
  const RoomCreate = async (e) => {
  e.preventDefault();

  if (roomname.trim() === '' || roomType.trim() === '') {
    setError('Please fill in all fields');
    return;
  }
  setButton('Creating...')
  try {
    const res = await axios.post('https://truth-or-dare-backend-1kg2.onrender.com/drink/api/createRoom', {
      roomName: roomname,
      roomType: roomType,
    });
   setButton('Create Room')
    if (res.status === 201) {
      navigate(`/onlined/${res.data.room._id}`);
      setError('');
    }
  } catch (err) {
     setButton('Create Room')
    console.error('Error creating room:', err);

    if (err.response) {
      if (err.response.status === 409) {
        setError('Room name already exists');
      } else if (err.response.status === 400) {
        setError('Please fill in all fields');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } else {
      setError('Unable to connect to server.');
    }
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-4 py-10">
      <form
        onSubmit={RoomCreate}
        className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md text-white"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Create a New Room</h1>

        <label className="block mb-2 text-sm font-medium">Room Name</label>
        <input
          value={roomname}
          onChange={(e) => setRoomName(e.target.value)}
          type="text"
          placeholder="Enter room name"
          className="w-full mb-4 p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <label className="block mb-2 text-sm font-medium">Room Type</label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full mb-6 p-3 cursor-pointer rounded-lg border border-white/30 bg-white/10 text-black focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value="">-- Select Type --</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        {error && (
          <div className="text-red-800 mb-4 text-sm font-medium bg-red-500/30 px-3 py-2 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-white cursor-pointer text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-100 transition-all duration-300"
        >
          {Button}
        </button>
      </form>
    </div>
  );
}

export default CreateDrinkRoom;
