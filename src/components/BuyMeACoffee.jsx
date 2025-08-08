import React from "react";
import { Link } from "react-router-dom";
function BuyMeACoffee() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/buy-me-a-coffee"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300 border border-yellow-300 backdrop-blur-sm"
      >
        <span className="text-xl animate-pulse">☕</span>
        <span className="text-sm sm:text-base">Buy Me a Coffee</span>
      </Link>
    </div>
  );
}

export default BuyMeACoffee;
