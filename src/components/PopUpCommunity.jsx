import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PopUpCommunity() {
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  const hasJoined = localStorage.getItem('hasJoinedCommunity');
  if (!hasJoined) {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); 

    return () => clearTimeout(timer); 
  }
}, []);



const handleJoin = () => {
    localStorage.setItem('hasJoinedCommunity', 'true');
    setIsOpen(false);

};


const handleClose = () => {
    setIsOpen(false);

};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto overflow-hidden animate-slide-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Popup Content */}
        <div className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-12 px-6 sm:px-8 text-center">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-48 h-48 bg-teal-200 opacity-20 rounded-full blur-2xl transform -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 opacity-20 rounded-full blur-2xl transform translate-x-1/4 translate-y-1/4"></div>
          </div>

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight animate-fade-in-up">
              Join Truth or Drink Community
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Connect with passionate people worldwide, share ideas, play together, and build lasting friendships.
            </p>

            {/* Call to Action Button */}
            <Link
              to="/community"
              onClick={handleJoin}
              className="inline-block bg-teal-600 text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
            >
              Join Now
            </Link>

            {/* Community Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 animate-fade-in-up animation-delay-400">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-teal-600">10K+</span>
                <span className="text-sm font-medium">Active Members</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-teal-600">50+</span>
                <span className="text-sm font-medium">Countries Represented</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-teal-600">Daily</span>
                <span className="text-sm font-medium">Events & Activities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}

export default PopUpCommunity;