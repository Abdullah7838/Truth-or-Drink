import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Go to Home
        </Link>
        <Link
          to="/contact"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
