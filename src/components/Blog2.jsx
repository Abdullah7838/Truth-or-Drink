import React from "react";
import blog2 from "../assets/blog2.2.jpeg";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import blog1 from '../assets/blog1.1.jpeg'
import blog3 from '../assets/blog3.1.jpeg'
import blog4 from '../assets/blog4.2.jpeg'
import blog5 from '../assets/blog4.1.jpeg'


const blogs = [
    {
        id: 1,
        image: `${blog1}`,
        title: "150 Juicy Truth or Drink Questions: Bold, Fun, and Daring for Your Next Game Night",
        link:"150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night",
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

const Blog2 = () => {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-10 lg:px-12 py-10 max-w-5xl mx-auto">
      <img
        src={blog2}
        alt="truthordrink.pro"
        className="w-full h-auto rounded-lg mb-8"
      />

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        110 Deep Truth or Drink Questions: Explore Your True Feelings, Thoughts,
        and Secrets
      </h1>

      <p className="mb-8 text-gray-800">
        Looking for deep Truth or Drink questions to spark meaningful
        conversations? Explore 110 deep and thoughtful questions perfect for
        serious discussions, revelations, and thought-provoking fun with your
        friends or partner.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Ready to Dive Deeper?
      </h2>
      <p className="mb-4 text-gray-800">
        Are you ready to explore the deeper side of your relationships,
        thoughts, and emotions? <br />
        These 110 deep Truth or Drink questions will spark meaningful
        conversations, help you uncover hidden thoughts, and maybe even reveal
        secrets you never knew about yourself or others. <br />
        These questions are perfect for moments of introspection, whether you're
        with a romantic partner, close friends, or in a larger group. <br />
        Get ready to reflect on life, love, regrets, and personal growth. <br />
        Grab your drink and get ready for an evening full of profound truths!
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        How to Play Truth or Drink
      </h2>
      <h3 className="text-xl sm:text-2xl font-medium mb-2">
        Gather Your Group
      </h3>
      <p className="mb-4 text-gray-800">
        You can play with as few as two players, but the more, the better!
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-2">Prepare Drinks</h3>
      <p className="mb-4 text-gray-800">
        Each player should have their drink ready (whether alcoholic or
        non-alcoholic).
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-2">Ask Questions</h3>
      <p className="mb-4 text-gray-800">
        Players take turns asking Truth or Drink questions. The person being
        asked must either answer truthfully or take a sip of their drink.
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
        Continue playing until everyone is laughing too hard to continue or
        until you run out of questions!
      </p>
      <Link to="/" className="flex justify-center">
        <button className="flex items-center max-w-xs justify-center gap-3 w-full cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-full py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-400 mb-4 transition-all duration-200 active:scale-95">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <FaPlay className="text-blue-600 w-4 h-4" />
          </div>
          Play Online
        </button>
      </Link>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        110 Deep Truth or Drink Questions
      </h2>
      <p className="mb-8 text-gray-800">
        Let’s dive in! Here are 110 deep Truth or Drink questions designed to
        take your Truth or Drink game to the next level. These questions explore
        emotions, regrets, relationships, and the big questions in life.
      </p>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        1. Reflective and Thoughtful Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What’s something you’ve never told anyone, but you wish you could?
          </span>{" "}
          <span className="text-gray-900">Time to share a deep secret!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest regret in life so far?
          </span>{" "}
          <span className="text-gray-900">Let’s get real!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you believe everything happens for a reason? Why or why not?
          </span>{" "}
          <span className="text-gray-900">Tell us your perspective!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the hardest lesson you’ve learned in life?
          </span>{" "}
          <span className="text-gray-900">Time for some reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What is your biggest fear, and how do you cope with it?
          </span>{" "}
          <span className="text-gray-900">
            Let’s dive into your deepest emotionsMagical!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s something you wish people understood about you?
          </span>{" "}
          <span className="text-gray-900">
            Get ready for an honest confession!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could change one thing about your past, what would it be?
          </span>{" "}
          <span className="text-gray-900">Time for truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you’ve always wanted to do but never had the
            courage to?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about your dreams!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What would you do if you knew you couldn’t fail?
          </span>{" "}
          <span className="text-gray-900">What’s your wildest dream?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the one thing you value most in life?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about what really matters to you!
          </span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        2. Emotional and Vulnerable Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What’s the hardest part about trusting people?
          </span>{" "}
          <span className="text-gray-900">
            Open up about your trust issues!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever been truly heartbroken? How did you handle it?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about the pain!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s something you’ve never forgiven yourself for?
          </span>{" "}
          <span className="text-gray-900">Time to reflect and confess!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most vulnerable thing you’ve ever done?
          </span>{" "}
          <span className="text-gray-900">Time to get real and deep!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever lost someone you loved? How did you cope?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about loss.</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you fear people will find out about you?
          </span>{" "}
          <span className="text-gray-900">Spill your deepest fears!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What do you think is the purpose of life?
          </span>{" "}
          <span className="text-gray-900">Share your philosophy!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you need from a partner to feel truly loved?
          </span>{" "}
          <span className="text-gray-900">Spill your relationship needs!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most important quality you look for in a partner?
          </span>{" "}
          <span className="text-gray-900">Share your values!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest insecurity, and how do you deal with it?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about your inner struggles!
          </span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        3. Relationship and Love Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Do you believe in love at first sight? Why or why not?
          </span>{" "}
          <span className="text-gray-900">Share your perspective on love!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest fear in a relationship?
          </span>{" "}
          <span className="text-gray-900">
            Time for some deep vulnerability!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever been in love? What did it feel like?
          </span>{" "}
          <span className="text-gray-900">Time to reflect on love!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could change one thing about your last relationship, what
            would it be?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about past love!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the best relationship advice you’ve ever received?
          </span>{" "}
          <span className="text-gray-900">Share your wisdom!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you’ve never told your partner but wish you could?
          </span>{" "}
          <span className="text-gray-900">
            Time to spill the hidden truths!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most important lesson you’ve learned from a breakup?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about learning from the past!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What would you say is the key to a healthy relationship?
          </span>{" "}
          <span className="text-gray-900">Spill your relationship wisdom!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How do you handle disagreements in a relationship?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about communication!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">What’s your love language?</span>{" "}
          <span className="text-gray-900">Spill the secret to your heart!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        4. Personal Growth and Life Goals Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What’s the biggest goal you’ve set for yourself and how close are
            you to achieving it?
          </span>{" "}
          <span className="text-gray-900">Share your ambitions!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If money wasn’t an issue, what would you spend your time doing?
          </span>{" "}
          <span className="text-gray-900">What’s your dream life?</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the one thing you want to accomplish before you die?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about your legacy!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the best decision you’ve ever made for your personal growth?
          </span>{" "}
          <span className="text-gray-900">Time to celebrate progress!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What are you most proud of achieving in your life?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about your successes!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s something you want to change about yourself?
          </span>{" "}
          <span className="text-gray-900">Time for some self-reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What makes you feel truly alive?
          </span>{" "}
          <span className="text-gray-900">Let’s get deep!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the biggest lesson you’ve learned about yourself?
          </span>{" "}
          <span className="text-gray-900">Time to reflect!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could meet your future self, what would you ask them?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about your future!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could have any career, what would it be?
          </span>{" "}
          <span className="text-gray-900">Dream big!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        5. Deep Philosophical Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What do you think happens after we die?
          </span>{" "}
          <span className="text-gray-900">
            Spill your thoughts on life and death!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you think people can truly change?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about transformation!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your definition of true happiness?
          </span>{" "}
          <span className="text-gray-900">
            Let’s dive into your philosophy of joy!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Is it more important to be loved or to love others?
          </span>{" "}
          <span className="text-gray-900">Truth time!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What do you think is the meaning of life?
          </span>{" "}
          <span className="text-gray-900">Let’s get deep and reflective!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you’d never compromise on?
          </span>{" "}
          <span className="text-gray-900">Spill your non-negotiables!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you believe in fate or free will?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about destiny!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the hardest truth you’ve ever had to accept?
          </span>{" "}
          <span className="text-gray-900">Let’s dive deep into reality!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What would you do if you found out your life was a lie?
          </span>{" "}
          <span className="text-gray-900">Time for deep thoughts!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your view on success and failure?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about life’s ups and downs!
          </span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        6. Deep Childhood and Family Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What was your relationship like with your parents growing up?
          </span>{" "}
          <span className="text-gray-900">
            Let’s dive into your family dynamics!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing from your childhood you wish you could relive?
          </span>{" "}
          <span className="text-gray-900">Let’s reflect on the past!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you think your childhood has shaped the person you are today?
          </span>{" "}
          <span className="text-gray-900">Time for some introspection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the best advice your parents ever gave you?
          </span>{" "}
          <span className="text-gray-900">Share some family wisdom!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most meaningful memory from your childhood?
          </span>{" "}
          <span className="text-gray-900">
            Let’s reflect on the good old days!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you believe family should always come first?
          </span>{" "}
          <span className="text-gray-900">
            Spill your thoughts on family values!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How would you describe your ideal family life?
          </span>{" "}
          <span className="text-gray-900">
            Time to talk about your family dreams!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What was your relationship with your siblings like growing up?
          </span>{" "}
          <span className="text-gray-900">
            Time to share your family dynamics!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How has your family influenced your choices in life?
          </span>{" "}
          <span className="text-gray-900">Get deep about your roots!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the biggest lesson your family taught you?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about your upbringing!
          </span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        7. Difficult Life Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Have you ever felt completely alone? How did you handle it?
          </span>{" "}
          <span className="text-gray-900">Let’s dive into vulnerability!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s something you’ve never been able to forgive?
          </span>{" "}
          <span className="text-gray-900">Spill the truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Have you ever been betrayed by someone close to you?
          </span>{" "}
          <span className="text-gray-900">Time to share your pain!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most difficult thing you’ve ever had to forgive?
          </span>{" "}
          <span className="text-gray-900">Let’s reflect on forgiveness!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your emotional barrier you’ve had to break?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about emotional growth!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you find it hard to ask for help? Why or why not?
          </span>{" "}
          <span className="text-gray-900">Time to get vulnerable!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you’ve struggled with for a long time?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about your battles!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s something you’ve lost that you wish you could get back?
          </span>{" "}
          <span className="text-gray-900">Reflect on your losses!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How do you cope with failure?
          </span>{" "}
          <span className="text-gray-900">Time for deep reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest fear about the future?
          </span>{" "}
          <span className="text-gray-900">Let’s get real about tomorrow!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        8. Major Life Decisions Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What’s the biggest decision you’ve ever made in life?
          </span>{" "}
          <span className="text-gray-900">Spill the details!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you believe in second chances? Why or why not?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about forgiveness!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one decision you made that completely changed your life?
          </span>{" "}
          <span className="text-gray-900">Time to reflect!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you think you have a purpose in life? What is it?
          </span>{" "}
          <span className="text-gray-900">Spill your purpose!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could go back and change one decision, what would it be?
          </span>{" "}
          <span className="text-gray-900">Time for deep reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you change anything about your life if you could?
          </span>{" "}
          <span className="text-gray-900">Time for an honest reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most challenging thing you’ve faced in your career?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about overcoming challenges!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the best piece of advice you’ve received about life
            decisions?
          </span>{" "}
          <span className="text-gray-900">Share the wisdom!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most life-changing experience you’ve had so far?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about the impact!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Would you ever relocate for love or a career?
          </span>{" "}
          <span className="text-gray-900">Time for a deep discussion!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        9. Life Purpose and Legacy Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            What do you want to be remembered for?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about your legacy!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the biggest impact you want to have on the world?
          </span>{" "}
          <span className="text-gray-900">Share your life purpose!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you believe in living for the moment or planning for the future?
          </span>{" "}
          <span className="text-gray-900">Truth time!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your idea of a fulfilled life?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about happiness!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What do you think your life’s mission is?
          </span>{" "}
          <span className="text-gray-900">Share your truth!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you think your career has been your calling?
          </span>{" "}
          <span className="text-gray-900">Time for self-reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the legacy you want to leave behind?
          </span>{" "}
          <span className="text-gray-900">Time to discuss your impact!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">How do you define success?</span>{" "}
          <span className="text-gray-900">Let’s talk about success!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What do you think is the purpose of love in life?
          </span>{" "}
          <span className="text-gray-900">
            Spill your thoughts on love’s meaning!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How do you hope to inspire others in your lifetime?
          </span>{" "}
          <span className="text-gray-900">Let’s get inspiring!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        10. Existential Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Do you believe in fate or free will?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about destiny!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What do you think happens after we die?
          </span>{" "}
          <span className="text-gray-900">
            Spill your thoughts on the afterlife!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you think people can truly change?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about transformation!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s one thing you’d never compromise on?
          </span>{" "}
          <span className="text-gray-900">Spill your non-negotiables!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the hardest truth you’ve ever had to accept?
          </span>{" "}
          <span className="text-gray-900">Let’s dive deep into reality!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you found out your life was a lie, what would you do?
          </span>{" "}
          <span className="text-gray-900">Time for deep thoughts!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What is your personal philosophy on life?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about your beliefs!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the one thing you believe the world needs more of?
          </span>{" "}
          <span className="text-gray-900">Spill your thoughts!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest question about the universe?
          </span>{" "}
          <span className="text-gray-900">Time for existential musings!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could change the world, what would you do?
          </span>{" "}
          <span className="text-gray-900">Time to change things!</span>
        </li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-medium mb-4">
        11. Time and Regret Truth or Drink Questions
      </h3>
      <ul className="list-disc pl-6 mb-8">
        <li className="mb-2">
          <span className="text-black block">
            Do you regret anything you didn’t do?
          </span>{" "}
          <span className="text-gray-900">Time to share your regrets!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the most valuable lesson time has taught you?
          </span>{" "}
          <span className="text-gray-900">Time for reflection!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s the one thing you wish you had more time to do?
          </span>{" "}
          <span className="text-gray-900">
            Let’s talk about time management!
          </span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you could stop time for one day, what would you do?
          </span>{" "}
          <span className="text-gray-900">Spill your deepest desires!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you believe it’s better to have loved and lost, than never to
            have loved at all?
          </span>{" "}
          <span className="text-gray-900">Truth time!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How would you spend your last day on Earth?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about final moments!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            Do you think time heals all wounds?
          </span>{" "}
          <span className="text-gray-900">Spill your thoughts!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            How do you make time for things you love?
          </span>{" "}
          <span className="text-gray-900">Time management hacks!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            If you had the chance, would you relive any moment in time?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about the past!</span>
        </li>
        <li className="mb-2">
          <span className="text-black block">
            What’s your biggest fear about growing older?
          </span>{" "}
          <span className="text-gray-900">Let’s talk about aging!</span>
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Conclusion: Ready to Uncover Your Deepest Thoughts?
      </h2>
      <p className="mb-8 text-gray-800">
        With 110 deep Truth or Drink questions, you’ve got plenty of
        conversation starters to uncover your deepest secrets, values, and
        thoughts. Whether you're playing with friends, a partner, or a group,
        these questions will ignite thoughtful, reflective conversations and
        maybe even change the way you see each other. <br />
        So grab your drinks and get ready for an evening full of deep
        reflections, meaningful revelations, and unforgettable moments. Let the
        Truth or Drink game begin!
      </p>


      <div className="px-6 py-12 bg-white">
                  <h2 className="text-3xl font-bold text-center mb-10 text-black">
                    Latest Articles
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {blogs.map((blog) => (
                      <Link to={`/${blog.link}`} key={blog.id}>
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
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
    </div>
  );
};

export default Blog2;
