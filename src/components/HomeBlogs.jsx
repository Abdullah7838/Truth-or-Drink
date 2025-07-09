import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.1.jpeg";
import blog2 from "../assets/blog2.2.jpeg";
import blog3 from "../assets/blog3.1.jpeg";
import blog4 from "../assets/blog4.2.jpeg";
const blogs = [
  {
    id: 1,
    image: `${blog1}`,
    title:
      "150 Juicy Truth or Drink Questions: Bold, Fun, and... Daring for Your Next Game Night",
    link: "150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night",
  },
  {
    id: 2,
    image: `${blog2}`,
    title:
      "110 Deep Truth or Drink Questions: Explore Your... True Feelings, Thoughts, and Secrets",
    link: "110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets",
  },
  {
    id: 3,
    image: `${blog3}`,
    title: "70 Fun Truth or Drink Questions for Game Night...",
    link: "70-fun-truth-or-drink-questions-for-game-night",
  },
  {
    id: 4,
    image: `${blog4}`,
    title:
      "80 Funny Truth or Drink Questions: Hilarious and... Entertaining Questions for Your Next Game Night",
    link: "80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night",
  },
];

function HomeBlogs() {
  return (
    <div className="px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Latest Articles
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <Link 
            aria-label={`Read ${blog.title}`}
          to={`/${blog.link}`} key={blog.id}>
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden transition-transform hover:scale-105"
            >
              <img
                loading="lazy"
                decoding="async"
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black h-8">
                  {blog.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link 
          aria-label="Browse all articles"
        to="/blogs">
          <button 
            aria-label="Browse all articles"
            type="button"
          className="bg-blue-700 text-white rounded-2xl px-6 py-3 font-black font-serif cursor-pointer hover:bg-blue-800 transition">
            Browse all articles
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeBlogs;
