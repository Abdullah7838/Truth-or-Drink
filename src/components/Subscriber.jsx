import React, { useEffect, useState } from 'react';

const Subscriber = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem('sub_popup_seen');
    if (!alreadySeen) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('https://truth-or-dare-backend-1kg2.onrender.com/api/drinksubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Subscribed successfully!');
        localStorage.setItem('sub_popup_seen', 'true'); 
        setTimeout(() => {
          setShow(false);
        }, 1500); 
      } else {
        setMessage(`❌ ${data.error || 'Subscription failed'}`);
      }
    } catch (err) {
      console.error(err);
      setMessage('❌ Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white max-w-sm w-full rounded-xl shadow-xl p-6 text-center relative">
        <h2 className="text-xl font-semibold text-red-600 mb-3">Subscribe Now</h2>
        <p className="text-black/80 mb-4">Get updates when a new online room is created!</p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md mb-3"
        />

        {message && (
          <div className="text-sm text-gray-700 mb-2">{message}</div>
        )}

        <button
          onClick={handleSubscribe}
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 px-6 py-2 rounded-lg transition mb-2
            ${loading ? 'bg-green-500 cursor-not-allowed opacity-80' : 'bg-green-600 hover:bg-green-700 text-white'}
          `}
        >
          {loading && (
            <svg
              className="w-5 h-5 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          )}
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>

        <button
          onClick={handleClose}
          className="block mx-auto text-sm text-blue-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Subscriber;
