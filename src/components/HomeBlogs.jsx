import React from "react";
import { Link } from "react-router-dom";

// Import images with multiple sizes for responsive loading
import blog1 from "../assets/blog1.1.webp?w=400;800;1200&format=webp&as=srcset";
import blog2 from "../assets/blog2.2.webp?w=400;800;1200&format=webp&as=srcset";
import blog3 from "../assets/blog3.1.webp?w=400;800;1200&format=webp&as=srcset";
import blog4 from "../assets/blog4.2.webp?w=400;800;1200&format=webp&as=srcset";

const blogs = [
  {
    id: 1,
    image: blog1,
    title:
      "150 Juicy Truth or Drink Questions: Bold, Fun, and... Daring for Your Next Game Night",
    link: "150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night",
  },
  {
    id: 2,
    image: blog2,
    title:
      "110 Deep Truth or Drink Questions: Explore Your... True Feelings, Thoughts, and Secrets",
    link: "110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets",
  },
  {
    id: 3,
    image: blog3,
    title: "70 Fun Truth or Drink Questions for Game Night...",
    link: "70-fun-truth-or-drink-questions-for-game-night",
  },
  {
    id: 4,
    image: blog4,
    title:
      "80 Funny Truth or Drink Questions: Hilarious and... Entertaining Questions for Your Next Game Night",
    link: "80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night",
  },
];

function HomeBlogs() {
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Latest Articles
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog, index) => (
          <Link
            aria-label={`Read: ${blog.title}`}
            to={`/${blog.link}`}
            key={blog.id}
            className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img
              srcSet={blog.image}
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
              src={blog.image.split(",")[0].split(" ")[0]}
              alt={blog.title}
              loading={index === 0 ? undefined : "lazy"} 
              decoding={index === 0 ? "sync" : "async"} 
              fetchPriority={index === 0 ? "high" : "low"} 
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3
                className="text-xl font-semibold mb-2 text-black line-clamp-2"
                title={blog.title}
              >
                {blog.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link aria-label="Browse all articles" to="/blogs">
          <button
            type="button"
            className="bg-blue-700 text-white rounded-2xl px-6 py-3 font-black font-serif cursor-pointer hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Browse all articles
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HomeBlogs;
