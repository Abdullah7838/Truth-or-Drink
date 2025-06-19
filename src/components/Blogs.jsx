import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const blogs = [
    {
      id: 1,
      image: "https://source.unsplash.com/400x250/?adventure,nature",
      title: "Exploring the Mountains",
      body: "The mountains were quiet, cold, and full of mystery as we climbed higher each day.",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x250/?beach,sunset",
      title: "Sunset at the Beach",
      body: "We sat silently as the sun dipped below the horizon, painting the sky with fire.",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x250/?forest,hike",
      title: "A Walk Through the Forest",
      body: "Crunching leaves underfoot and chirping birds above made the forest feel truly alive.",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/400x250/?desert,travel",
      title: "Desert Wanderlust",
      body: "Endless dunes stretched before us, golden in the sunlight and whispering with secrets.",
    },
  ];

  const truncateWords = (text, count) => {
    return text.split(" ").slice(0, count).join(" ") + "...";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-6 font-mono">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Latest Blogs</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/blog${blog.id}`}><div key={blog.id} className="bg-white text-black rounded-xl overflow-hidden shadow-lg flex flex-col">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
              <p className="text-sm text-gray-700">{truncateWords(blog.body, 8)}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
