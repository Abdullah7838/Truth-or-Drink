import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: "data:image/jpeg;base64,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",
    title: "Exploring the Mountains",
    body: "The mountains were quiet, cold, and full of mystery as we climbed higher each day.",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgQwVnoyO6o-p4_1kcOHD7vp8GrENDOC6Z8GT3YClIohGHvb7QaTqGUiqrbdmNde-OzI&usqp=CAU",
    title: "Sunset at the Beach",
    body: "We sat silently as the sun dipped below the horizon, painting the sky with fire.",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcoiGr9k7eNF4gZ7wWwv56ZBzuifhdf2vBqq73Quwbc4YnEKaxN3J9mKsSYu5sUxjkuo&usqp=CAU",
    title: "A Walk Through the Forest",
    body: "Crunching leaves underfoot and chirping birds above made the forest feel truly alive.",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4uB17z3nx4KYmT2MjWNdp1IIUflVWWnkZKFl1Tw5W8rGKEnwijBLgp5Lmm1NoMYTDzk&usqp=CAU",
    title: "Desert Wanderlust",
    body: "Endless dunes stretched before us, golden in the sunlight and whispering with secrets.",
  },
];

function truncateWords(text, limit) {
  return text.split(" ").slice(0, limit).join(" ") + "...";
}

function HomeBlogs() {
  return (
    <div className="px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Latest Blogs
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <Link to={`/blogs/blog${blog.id}`} key={blog.id}>
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {truncateWords(blog.body, 6)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/blogs">
          <button className="bg-blue-700 text-white rounded-2xl px-6 py-3 font-black font-serif cursor-pointer hover:bg-blue-800 transition">
            Browse all articles
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeBlogs;
