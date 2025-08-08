import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function Friends(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/admin");
        setUsers(res.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleClick = (email) => {
    navigate(`/community/account/${email}`);
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for the user card
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      background: "linear-gradient(135deg, #ffffff, #f8fafc)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animation for profile image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      rotate: 5,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  // Animation for text content
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animation for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-[1000px] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 text-center"
          variants={titleVariants}
        >
          Discover Your Friends
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {users
              .filter((user) => user.email !== props.email) // 🔥 exclude current user
              .map((user) => (
                <motion.div
                  key={user.email}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => handleClick(user.email)}
                  className="relative bg-white rounded-2xl p-6 cursor-pointer overflow-hidden group"
                  style={{
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-4 relative z-10">
                    <motion.img
                      variants={imageVariants}
                      src={user.profilePhoto}
                      alt={user.username}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <motion.div
                      variants={textVariants}
                      className="flex flex-col"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {user.username}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-gray-700">
                        Joined:{" "}
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default Friends;
