import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, User, LogOut, Menu, X, Bell, Settings } from "lucide-react";
import Notifications from "./Notifications";
import UserSettings from "./UserSettings";

function Navbar({ logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();
  
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-blue-600">Truth or Drink</span>
              <span className="text-gray-800"> Pro</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/community/home"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <Home className="mr-2" size={22} />
              Home
            </Link>
            
            {/* Notifications Button */}
            <button
              onClick={() => setShowNotifications(true)}
              className="relative flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <Bell className="mr-2" size={22} />
              Notifications
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
            
            {/* Settings Button */}
            <button
              onClick={() => setShowSettings(true)}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <Settings className="mr-2" size={22} />
              Settings
            </button>
            <Link
              to="/community/profile"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <User className="mr-2" size={22} />
              {username ? username : 'Profile'}
            </Link>
            {/* <button
              onClick={() => {
                logout();
                navigate("/community/login");
              }}
              className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              <LogOut className="mr-2" size={22} />
              Logout
            </button> */}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md rounded-b-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Link
          to="/community/home"
          onClick={() => setIsOpen(false)}
          className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-100 transition"
        >
          <Home className="mr-3" size={20} />
          Home
        </Link>
        <Link
          to="/community/profile"
          onClick={() => setIsOpen(false)}
          className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-100 transition"
        >
          <User className="mr-3" size={20} />
          {username ? username : 'Profile'}
        </Link>
        
        {/* Mobile Notifications */}
        <button
          onClick={() => {
            setShowNotifications(true);
            setIsOpen(false);
          }}
          className="flex items-center w-full px-5 py-3 text-gray-700 hover:bg-gray-100 transition"
        >
          <Bell className="mr-3" size={20} />
          Notifications
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>
        
        {/* Mobile Settings */}
        <button
          onClick={() => {
            setShowSettings(true);
            setIsOpen(false);
          }}
          className="flex items-center w-full px-5 py-3 text-gray-700 hover:bg-gray-100 transition"
        >
          <Settings className="mr-3" size={20} />
          Settings
        </button>
        
        {/* <button
          onClick={() => {
            logout();
            navigate("/community/login");
            setIsOpen(false);
          }}
          className="flex items-center w-full px-5 py-3 text-red-500 hover:bg-gray-100 transition"
        >
          <LogOut className="mr-3" size={20} />
          Logout
        </button> */}
      </div>
      
      {/* Notifications Component */}
      <Notifications 
        email={email} 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
      
      {/* User Settings Component */}
      <UserSettings 
        email={email} 
        isOpen={showSettings} 
        onClose={() => setShowSettings(false)} 
      />
    </nav>
  );
}

export default Navbar;
