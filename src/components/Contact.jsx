import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success('Message Sent ✅', {
        style: {
          background: '#111',
          color: '#fff',
          fontWeight: 'bold',
        },
        iconTheme: {
          primary: '#10b981',
          secondary: '#1f2937',
        },
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-6 py-12 flex items-center justify-center">
      <Toaster position="top-right" />
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-md">
          📩 Contact Us
        </h1>

        <p className="mb-8 text-center text-white/90">
          Have feedback, questions, or ideas for new Truths or Drinks? We’d love to hear from you!
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              placeholder="Your message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 flex justify-center items-center bg-pink-600 hover:bg-pink-700 rounded-xl font-semibold text-lg transition duration-300 shadow-md hover:scale-105 active:scale-95 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <Loader2 className="animate-spin w-5 h-5 mr-2" />
            ) : null}
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <p className="text-xs text-center mt-6 text-white/70">
          We’ll respond within 24–48 hours. 💌
        </p>
      </div>
    </div>
  );
};

export default Contact;
