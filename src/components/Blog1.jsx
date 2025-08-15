import React from "react";
import blog1 from "../assets/blog1.1.webp";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import blog2 from '../assets/blog2.2.webp'
import blog3 from '../assets/blog3.1.webp'
import blog4 from '../assets/blog4.2.webp'
import blog5 from '../assets/blog4.1.webp'

const blogs = [
      {
        id: 2,
        image: `${blog2}`,
        title: "110 Deep Truth or Drink Questions: Explore Your True Feelings, Thoughts, and Secrets",
        link:"110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets",
      },
      {
        id: 3,
        image: `${blog3}`,
        title: "70 Fun Truth or Drink Questions for Game Night",
        link:"70-fun-truth-or-drink-questions-for-game-night"
      },
      {
        id: 4,
        image: `${blog4}`,
        title: "80 Funny Truth or Drink Questions: Hilarious and Entertaining Questions for Your Next Game Night",
        link:"80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night",
      },
  {
    id: 5,
    image: `${blog5}`,
    title: " 100 Fun Truth or Drink Questions for Game Night",
    link:"100-fun-truth-or-drink-questions-for-game-night",
  },
];

function Blog1() {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-10 lg:px-12 py-10 max-w-5xl mx-auto">
      <img
        src={blog1}
         alt="Cover image for Truth or Drink blog"
        className="w-full h-auto rounded-lg mb-8"
          loading="lazy"

      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        150 Juicy Truth or Drink Questions: Bold, Fun, and Daring for Your Next
        Game Night
      </h1>

      <p className="mb-8 text-gray-800">
        Get ready for an unforgettable game night with 150 juicy Truth or Drink
        questions! Perfect for adult gatherings, friends, or couples looking to
        share bold confessions.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Ready for the Juiciest Game Night Ever?
      </h2>
      <p className="mb-4 text-gray-800">
        Are you looking to turn up the heat at your next Truth or Drink game
        night? <br />
        These 150 juicy questions will keep the party going, whether you’re with
        friends, a romantic partner, or a group of adults looking for fun.{" "}
        <br />
        With everything from flirty and embarrassing to daring and wild, you’ll
        have no shortage of moments to remember. <br />
        Get ready for bold confessions, flirty fun, and a lot of laughs. <br />
        Grab your drinks and let’s dive into the juiciest game you’ve ever
        played!
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        How to Play Truth or Drink
      </h2>
      <h3 className="text-xl sm:text-2xl font-medium mb-2">
        Gather Your Group
      </h3>
      <p className="mb-4 text-gray-800">The more, the better!</p>

      <h3 className="text-xl sm:text-2xl font-medium mb-2">Prepare Drinks</h3>
      <p className="mb-4 text-gray-800">
        Each player should have their drink ready (alcoholic or non-alcoholic).
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-2">Ask Questions</h3>
      <p className="mb-4 text-gray-800">
        Players take turns asking Truth or Drink questions. The person being
        asked must either answer the question truthfully or take a sip of their
        drink.
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-2">No Pressure</h3>
      <p className="mb-4 text-gray-800">
        If someone doesn’t feel comfortable answering, they can always take a
        drink instead.
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-2">
        Keep the Fun Going
      </h3>
      <p className="mb-8 text-gray-800">
        Continue playing until everyone is laughing too hard to go on, or until
        you run out of questions!
      </p>
      <Link 
      aria-label="Play Online"
       to="/" className="flex justify-center">
        <button aria-label="Play Online" className="flex items-center max-w-xs justify-center gap-3 w-full cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-full py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-400 mb-4 transition-all duration-200 active:scale-95">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <FaPlay className="text-blue-600 w-4 h-4" />
          </div>
          Play Online
        </button>
      </Link>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        150 Juicy Truth or Drink Questions
      </h2>
      <p className="mb-8 text-gray-800">
        Let’s dive into the 150 juicy questions that will take your Truth or
        Drink game to the next level! From embarrassing stories to wild
        confessions, we’ve got you covered.
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        1. Bold and Flirty Truth or Drink Questions
      </h3>
      <p className="mb-4 text-gray-800">
        These questions are perfect for flirting and having fun with friends or
        a partner.
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Who would be on your celebrity hall pass list?
          </span>{" "}
          <span className="text-gray-900">Spill the beans!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most flirtatious thing you’ve ever done?
          </span>{" "}
          <span className="text-gray-900">
            Time to share your boldest moves!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever kissed someone in this room?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the sexiest thing you’ve ever done on a first date?
          </span>{" "}
          <span className="text-gray-900">Spill the story!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could make out with anyone here, who would it be?
          </span>{" "}
          <span className="text-gray-900">Let’s get bold!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your favorite physical feature on a partner?
          </span>{" "}
          <span className="text-gray-900">Time for some compliments!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever had a secret crush on someone you shouldn’t have?
          </span>{" "}
          <span className="text-gray-900">Be bold and confess!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most attractive thing about me?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about attraction!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever made the first move?
          </span>{" "}
          <span className="text-gray-900">Be honest, would you?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What would you do if I kissed you right now?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the sexiest outfit you own?
          </span>{" "}
          <span className="text-gray-900">Let’s hear it!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever flirted with someone just to get something?
          </span>{" "}
          <span className="text-gray-900">Confess now!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the wildest thing you’ve done on a first date?
          </span>{" "}
          <span className="text-gray-900">Time to get daring!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever kiss someone in this room?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most romantic thing you’ve ever done for someone?
          </span>{" "}
          <span className="text-gray-900">Let’s hear the love story!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If I asked you to kiss me, would you?
          </span>{" "}
          <span className="text-gray-900">Be honest, would you?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the best pickup line someone has ever used on you?
          </span>{" "}
          <span className="text-gray-900">Spill the beans!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the sexiest thing someone could wear?
          </span>{" "}
          <span className="text-gray-900">Time to describe your fantasy!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most flirtatious thing you’ve done in the past week?
          </span>{" "}
          <span className="text-gray-900">Truth time!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If I asked you to wear something sexy for me, would you do it?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        2. Juicy Confessions Truth or Drink Questions
      </h3>
      <p className="mb-4 text-gray-800">
        Get ready to reveal your wildest and juiciest secrets with these
        confessions.
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Have you ever cheated on someone?
          </span>{" "}
          <span className="text-gray-900">Confession time!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the wildest thing you’ve done in a relationship?
          </span>{" "}
          <span className="text-gray-900">Spill the secrets!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever been caught sending a naughty text?
          </span>{" "}
          <span className="text-gray-900">Oops, spill the story!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing that’s happened to you during
            sex?
          </span>{" "}
          <span className="text-gray-900">Let’s laugh it off!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever kissed someone you weren’t supposed to?
          </span>{" "}
          <span className="text-gray-900">Time for the truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most intimate thing you’ve done with someone you just
            met?
          </span>{" "}
          <span className="text-gray-900">Get ready to spill!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the biggest secret you’ve ever kept from someone?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about it!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most scandalous thing you’ve ever done?
          </span>{" "}
          <span className="text-gray-900">
            Get ready for the juiciest confession!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever had a crush on someone in this room?
          </span>{" "}
          <span className="text-gray-900">Be honest!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing you’ve done for love?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about it!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most outrageous thing you’ve done during a breakup?
          </span>{" "}
          <span className="text-gray-900">Spill it all!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever lied to a partner about something big?
          </span>{" "}
          <span className="text-gray-900">Spill the truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever hooked up with someone you didn’t find attractive?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing you’ve done in front of your
            family?
          </span>{" "}
          <span className="text-gray-900">Time for some laughs!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever had a one-night stand?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever regretted sleeping with someone?
          </span>{" "}
          <span className="text-gray-900">Confess now!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever kissed a friend’s ex?
          </span>{" "}
          <span className="text-gray-900">Let’s spill the tea!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most scandalous text you’ve ever sent?
          </span>{" "}
          <span className="text-gray-900">Get ready to blush!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the craziest thing you’ve done while drunk?
          </span>{" "}
          <span className="text-gray-900">Spill the secrets!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever been in an open relationship?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about it!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        3. Daring Truth or Drink Questions
      </h3>
      <p className="mb-4 text-gray-800">
        These questions will push the limits and get everyone talking about
        their boldest moments.
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Would you ever sleep with someone you met that same day?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the kinkiest thing you’ve fantasized about?
          </span>{" "}
          <span className="text-gray-900">Get ready to spill your secret!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever tried something sexual just to please a partner?
          </span>{" "}
          <span className="text-gray-900">Be bold!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your ultimate turn-on?
          </span>{" "}
          <span className="text-gray-900">Share your deepest desires!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your ideal sexual experience?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about fantasies!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever make the first move?
          </span>{" "}
          <span className="text-gray-900">Be honest—would you?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your favorite way to kiss someone?
          </span>{" "}
          <span className="text-gray-900">Describe your perfect kiss!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever role-play in the bedroom?
          </span>{" "}
          <span className="text-gray-900">Tell us about the experience!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most intense thing you’ve done during sex?
          </span>{" "}
          <span className="text-gray-900">The juicier, the better!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Ever tried to seduce someone just to see if you could?
          </span>{" "}
          <span className="text-gray-900">Be bold and spill it!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest sexual regret?
          </span>{" "}
          <span className="text-gray-900">Time for truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s something you’ve always wanted to try sexually but haven’t
            yet?
          </span>{" "}
          <span className="text-gray-900">Let’s go deep!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever send an intimate video to someone you’ve just met?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever kiss someone in this room?
          </span>{" "}
          <span className="text-gray-900">Truth or drink?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the dirtiest text you’ve sent?
          </span>{" "}
          <span className="text-gray-900">Get ready to blush!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">What’s your biggest turn-on?</span>{" "}
          <span className="text-gray-900">Let’s talk about it!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever hooked up with a friend’s ex?
          </span>{" "}
          <span className="text-gray-900">Spill the details!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most outrageous thing you’ve done for love?
          </span>{" "}
          <span className="text-gray-900">Time to share your secret!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever had a one-night stand?
          </span>{" "}
          <span className="text-gray-900">Let’s get real!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most sexual thing you’ve done in public?
          </span>{" "}
          <span className="text-gray-900">Confession time!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        4. Embarrassing Truth or Drink Questions
      </h3>
      <p className="mb-4 text-gray-800">
        We all have awkward moments—now’s the time to spill!
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing you’ve done in front of your
            crush?
          </span>{" "}
          <span className="text-gray-900">We’ve all been there!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever sent a text to the wrong person?
          </span>{" "}
          <span className="text-gray-900">Oops, spill the story!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing that’s happened to you in public?
          </span>{" "}
          <span className="text-gray-900">Let’s laugh it off together!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the funniest thing you’ve done while sleepwalking?
          </span>{" "}
          <span className="text-gray-900">Sleepy antics revealed!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing you’ve done during a date?
          </span>{" "}
          <span className="text-gray-900">Time for the truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever mistaken someone for being pregnant?
          </span>{" "}
          <span className="text-gray-900">Awkward moments happen!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most awkward thing you’ve said to someone you just met?
          </span>{" "}
          <span className="text-gray-900">Cringe-worthy, but funny!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most embarrassing thing that’s happened to you in front
            of your parents?
          </span>{" "}
          <span className="text-gray-900">Let’s get real!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever tripped or fallen in public?
          </span>{" "}
          <span className="text-gray-900">Clumsy moments unite!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever walked into the wrong restroom?
          </span>{" "}
          <span className="text-gray-900">Bathroom blunders!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        5. Steamy Truth or Drink Questions
      </h3>
      <p className="mb-4 text-gray-800">
        For those looking to turn up the heat, these are perfect!
      </p>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What’s the sexiest dream you’ve ever had?
          </span>{" "}
          <span className="text-gray-900">Let’s get a little naughty!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the wildest thing you’ve done in bed?
          </span>{" "}
          <span className="text-gray-900">Spill your wildest moment!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever tried something sexual just to please a partner?
          </span>{" "}
          <span className="text-gray-900">Be bold!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your ultimate turn-on?
          </span>{" "}
          <span className="text-gray-900">Share your deepest desires!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your ideal sexual experience?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about fantasies!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever make the first move?
          </span>{" "}
          <span className="text-gray-900">Be honest—would you?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your favorite way to kiss someone?
          </span>{" "}
          <span className="text-gray-900">Describe your perfect kiss!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever role-play in the bedroom?
          </span>{" "}
          <span className="text-gray-900">Tell us about the experience!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the hottest thing you’ve done during a getaway?
          </span>{" "}
          <span className="text-gray-900">
            Let’s hear about that vacation spice!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever gotten someone to fall for you using only your words?
          </span>{" "}
          <span className="text-gray-900">The power of seduction!</span>
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Conclusion: Ready to Spill Some Juicy Secrets?
      </h2>
      <p className="mb-8 text-gray-800">
        With 150 juicy Truth or Drink questions, your next game night will be
        filled with daring confessions, embarrassing stories, and unforgettable
        moments. Whether you’re playing with friends, a partner, or a group of
        adults, these questions will push boundaries and ensure that your night
        is full of laughs, fun, and plenty of wild revelations. <br />
        So grab your drinks, pick your questions, and let the juicy fun begin!
      </p>




      <div className="px-6 py-12 bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-black">
              Latest Articles
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <Link 
                aria-label="Read More"
                to={`/${blog.link}`} key={blog.id}>
                  <div
                    key={blog.id}
                    className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden transition-transform hover:scale-105"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                        loading="lazy"

                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-black">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
    </div>
  );
}

export default Blog1;
