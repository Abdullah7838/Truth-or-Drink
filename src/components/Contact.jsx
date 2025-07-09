import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Truth or Drink – Contact Us</title>
        <meta
          name="description"
          content="Play Truth or Drink online or offline with friends. Choose a mode, spin the wheel, and enjoy fun challenges!"
        />
        <meta
          name="keywords"
          content="truth or drink, online party game, spin wheel game, drink game, online game"
        />
        <meta
          property="og:title"
          content="Truth or Drink – Play Drinking Games Online or Offline"
        />
        <meta
          property="og:description"
          content="Play Truth or Drink with friends, online or offline! No signup required. Fun guaranteed!"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
          <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-md">
            📩 Contact Us
          </h1>

          <p className="mb-6 text-center text-white/90 text-lg">
            Have a question, suggestion, or want to collaborate?
            <br />
            We'd love to hear from you. Reach out to us directly via email!
          </p>

          <div className="text-center text-white text-xl font-semibold mt-8">
            📧 Email:{" "}
            <span className="underline underline-offset-4">
             truthordrinks@gmail.com
            </span>
          </div>

          <div className="text-center text-white/80 text-sm mt-4">
            📍 Location: Online Only
          </div>

          <p className="text-xs text-center mt-8 text-white/60">
            We’ll get back to you as soon as possible. 💌
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
