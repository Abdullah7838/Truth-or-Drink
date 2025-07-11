import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios'; 

function UnSubscribe() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryEmail = searchParams.get('email');
    if (queryEmail && queryEmail.includes('@')) {
      setEmail(queryEmail);
    } else {
      setMessage('❌ Invalid or missing email in URL.');
    }
  }, [searchParams]);

  const handleUnsubscribe = async () => {
  if (!email) {
    setMessage('❌ No email to unsubscribe.');
    return;
  }
console.log('Unsubscribing email:', email);
  setLoading(true);
  setMessage('');

  try {
    const res = await axios.delete('https://truth-or-dare-backend-1kg2.onrender.com/api/drinkunsubscribe', {
      data: { email }  
    });

    setMessage('✅ You have been unsubscribed.');
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      setMessage(`❌ ${err.response.data.error}`);
    } else {
      setMessage('❌ Server error. Please try again later.');
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Unsubscribe</h1>
        <p className="text-gray-700 mb-4">You’re about to unsubscribe this email:</p>

        <input
          type="email"
          value={email}
          disabled
          className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-700 rounded-md mb-3 focus:outline-none"
        />

        {message && <p className="text-sm text-gray-800 mb-3">{message}</p>}

        <button
          onClick={handleUnsubscribe}
          disabled={loading || !email}
          className={`w-full py-2 flex items-center justify-center rounded-md transition
            ${loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'}`}
        >
          {loading ? (
            <svg className="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            'Unsubscribe'
          )}
        </button>
      </div>
    </div>
  );
}

export default UnSubscribe;
