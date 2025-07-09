import React, { useEffect, useState } from 'react';

const PopupNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem('popup_seen');
    if (!alreadySeen) {
      setShow(true);
      localStorage.setItem('popup_seen', 'true');
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white max-w-sm w-full rounded-xl shadow-xl p-6 text-center relative">
        <h2 className="text-xl font-semibold text-red-600 mb-3">
          ⚠️ Important Notice
        </h2>
        <p className="text-black/80 mb-4">
          You should have a stable internet connection to play online. Otherwise your game will be interrupted and you will lose your progress.
        </p>
        <button
          aria-label="Close Popup"
          type="button"
          onClick={handleClose}
          className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default PopupNotice;
