import React from 'react';
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import blog3 from '../assets/blog4.2.webp';
import blog1 from '../assets/blog1.1.webp'
import blog2 from '../assets/blog2.2.webp'
import blog4 from '../assets/blog4.2.webp'
import blog5 from '../assets/blog4.1.webp'


const blogs = [
    {
        id: 1,
        image: `${blog1}`,
        title: "150 Juicy Truth or Drink Questions: Bold, Fun, and Daring for Your Next Game Night",
        link:"150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night",
      },
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
    id: 5,
    image: `${blog5}`,
    title: " 100 Fun Truth or Drink Questions for Game Night",
    link:"100-fun-truth-or-drink-questions-for-game-night",
  },
];

function Blog4() {
  return (
    <div className="bg-white text-black px-4 sm:px-8 md:px-12 lg:px-16 py-8 max-w-5xl mx-auto">
      <img src={blog3} alt="Funny Truth or Drink post cover" className="w-full h-auto mb-8 rounded-lg" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        80 Funny Truth or Drink Questions: Hilarious and Entertaining Questions for Your Next Game Night
      </h1>

      <p className="text-lg italic mb-6 text-center">
        Looking for the best Funny Truth or Drink questions? Explore 80 hilarious questions that will keep your game night full of laughter, surprises, and funny confessions!
      </p>

      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Laugh Your Way Through the Game?</h2>
        <p className="mb-4">
          If you're looking to add some humor and fun to your Truth or Drink game, these 120 funny Truth or Drink questions are just what you need! Whether you're playing with friends, family, or a partner, these questions are designed to make everyone burst into laughter and reveal some embarrassing (yet funny) secrets.
        </p>
        <p className="mb-4">
          Get ready for funny confessions, wild stories, and awkward moments that will have everyone in stitches. Let’s get the party started!
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How to Play Truth or Drink</h2>
        <h3 className="text-xl font-medium mb-2">Gather Your Group</h3>
        <p className="mb-2">At least two players, but the more, the better!</p>

        <h3 className="text-xl font-medium mb-2">Prepare Drinks</h3>
        <p className="mb-2">Each player should have their drink ready (whether alcoholic or non-alcoholic).</p>

        <h3 className="text-xl font-medium mb-2">Ask Questions</h3>
        <p className="mb-2">Players take turns asking Truth or Drink questions. The person being asked must either answer truthfully or take a sip of their drink.</p>

        <h3 className="text-xl font-medium mb-2">No Pressure</h3>
        <p className="mb-2">If someone doesn’t feel comfortable answering, they can always take a drink instead.</p>

        <h3 className="text-xl font-medium mb-2">Keep the Fun Going</h3>
        <p className="mb-2">Continue playing until everyone is laughing too hard to continue or until you run out of questions!</p>
      </section>
<Link
aria-label='Play Online'
 to="/" className="flex justify-center">
        <button aria-label="Play Online" className="flex items-center max-w-xs justify-center gap-3 w-full cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-full py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-400 mb-4 transition-all duration-200 active:scale-95">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <FaPlay className="text-blue-600 w-4 h-4" />
          </div>
          Play Online
        </button>
      </Link>
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">80 Funny Truth or Drink Questions</h2>
        <p className="mb-4">Let’s dive into these 80 funny Truth or Drink questions to spice up your game night and keep everyone laughing!</p>

        {/* Section 1 */}
        <h3 className="text-xl font-medium mb-3">1. Hilarious and Embarrassing Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">What’s the most embarrassing thing you’ve done in public?</span><br /><span className="text-gray-800">Spill the details!</span></li>
          <li><span className="text-black">Have you ever had a wardrobe malfunction?</span><br /><span className="text-gray-800">We all have those moments!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve done while sleepwalking?</span><br /><span className="text-gray-800">Time to reveal the funny stories!</span></li>
          <li><span className="text-black">Have you ever farted in public and blamed it on someone else?</span><br /><span className="text-gray-800">Tell us your best escape!</span></li>
          <li><span className="text-black">What’s the worst date you’ve ever been on?</span><br /><span className="text-gray-800">Let’s hear about that disaster!</span></li>
          <li><span className="text-black">Have you ever tripped and fallen in front of a crowd?</span><br /><span className="text-gray-800">Time to share your clumsy moments!</span></li>
          <li><span className="text-black">What’s the most embarrassing thing you’ve ever said to someone?</span><br /><span className="text-gray-800">Let’s hear that cringeworthy line!</span></li>
          <li><span className="text-black">Have you ever accidentally texted the wrong person something embarrassing?</span><br /><span className="text-gray-800">Oops! Spill the story!</span></li>
          <li><span className="text-black">What’s the weirdest thing you’ve Googled?</span><br /><span className="text-gray-800">Time to share your internet secrets!</span></li>
          <li><span className="text-black">Have you ever eaten something that was completely disgusting just because you were hungry?</span><br /><span className="text-gray-800">Confess your culinary mishaps!</span></li>
        </ul>

        {/* Section 2 */}
        <h3 className="text-xl font-medium mb-3 mt-6">2. Flirty and Funny Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">Who in this room would you most likely go on a date with?</span><br /><span className="text-gray-800">Time to spill the tea!</span></li>
          <li><span className="text-black">What’s the weirdest pickup line you’ve ever used or heard?</span><br /><span className="text-gray-800">Time for some cringe-worthy moments!</span></li>
          <li><span className="text-black">If we were stranded on a desert island, who would you want to be stuck with and why?</span><br /><span className="text-gray-800">Spill your survival plans!</span></li>
          <li><span className="text-black">What’s the most awkward thing you’ve done in front of someone you had a crush on?</span><br /><span className="text-gray-800">Let’s talk about your awkward love life!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve ever done while trying to impress someone?</span><br /><span className="text-gray-800">Time to laugh at yourself!</span></li>
          <li><span className="text-black">What’s the most embarrassing text you’ve sent to a crush?</span><br /><span className="text-gray-800">Let’s hear about that awkward confession!</span></li>
          <li><span className="text-black">Have you ever had a crush on someone here?</span><br /><span className="text-gray-800">Spill the beans!</span></li>
          <li><span className="text-black">What’s the most embarrassing thing you’ve done to flirt with someone?</span><br /><span className="text-gray-800">Confess your flirtation fails!</span></li>
          <li><span className="text-black">What’s the weirdest compliment you’ve ever received?</span><br /><span className="text-gray-800">Let’s hear the cringe-worthy lines!</span></li>
          <li><span className="text-black">Would you rather be caught kissing someone or be caught dancing in public?</span><br /><span className="text-gray-800">Truth time!</span></li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-xl font-medium mb-3 mt-6">3. Outrageous and Funny Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">If you could switch lives with someone for a day, who would it be and why?</span><br /><span className="text-gray-800">Time to imagine your new life!</span></li>
          <li><span className="text-black">What’s the silliest fear you have that makes no sense?</span><br /><span className="text-gray-800">Let’s talk about irrational fears!</span></li>
          <li><span className="text-black">What’s the craziest thing you’ve done while drunk?</span><br /><span className="text-gray-800">Spill the wild stories!</span></li>
          <li><span className="text-black">What’s the most ridiculous thing you’ve done for attention?</span><br /><span className="text-gray-800">We’ve all been there!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve done on a dare?</span><br /><span className="text-gray-800">Time to tell your wild dare stories!</span></li>
          <li><span className="text-black">What’s your worst fashion choice you’ve ever made?</span><br /><span className="text-gray-800">Let’s laugh at your fashion fails!</span></li>
          <li><span className="text-black">What’s the most outrageous lie you’ve told and gotten away with?</span><br /><span className="text-gray-800">Confess your fibs!</span></li>
          <li><span className="text-black">What’s the most embarrassing thing you’ve done in front of your boss?</span><br /><span className="text-gray-800">Confess your office mishaps!</span></li>
          <li><span className="text-black">Have you ever gotten caught doing something embarrassing while alone?</span><br /><span className="text-gray-800">Spill your solo awkward moments!</span></li>
          <li><span className="text-black">What’s the strangest thing you’ve done to impress someone?</span><br /><span className="text-gray-800">Let’s hear your wildest stories!</span></li>
        </ul>

        {/* Section 4 */}
        <h3 className="text-xl font-medium mb-3 mt-6">4. Fun and Light-Hearted Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">If you could only eat one food for the rest of your life, what would it be?</span><br /><span className="text-gray-800">Time for your favorite food confession!</span></li>
          <li><span className="text-black">If you could be any animal for a day, what would you be and why?</span><br /><span className="text-gray-800">Let’s hear your inner animal!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve ever done in the shower?</span><br /><span className="text-gray-800">Spill the funny bathroom stories!</span></li>
          <li><span className="text-black">What’s the weirdest thing you’ve everhljs
          done to get out of an awkward situation?</span><br /><span className="text-gray-800">Time to share your escape tactics!</span></li>
          <li><span className="text-black">If you could be famous for something ridiculous, what would it be?</span><br /><span className="text-gray-800">Let’s talk about your odd claim to fame!</span></li>
          <li><span className="text-black">What’s the most ridiculous thing you’ve ever said during an argument?</span><br /><span className="text-gray-800">Time for some funny quarrels!</span></li>
          <li><span className="text-black">What’s the worst haircut you’ve ever had?</span><br /><span className="text-gray-800">Let’s laugh at your past hairdos!</span></li>
          <li><span className="text-black">Have you ever danced in front of a mirror?</span><br /><span className="text-gray-800">Let’s talk about your dance moves!</span></li>
          <li><span className="text-black">What’s the most embarrassing song you know all the lyrics to?</span><br /><span className="text-gray-800">Spill the tunes!</span></li>
          <li><span className="text-black">What’s the most awkward thing you’ve done at a family gathering?</span><br /><span className="text-gray-800">Time to talk about the awkward moments!</span></li>
        </ul>

        {/* Section 5 */}
        <h3 className="text-xl font-medium mb-3 mt-6">5. Silly and Wacky Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">What’s the weirdest dream you’ve ever had?</span><br /><span className="text-gray-800">Time to share your strange dreams!</span></li>
          <li><span className="text-black">Have you ever tried to sing like a famous singer?</span><br /><span className="text-gray-800">Let’s hear your vocal skills!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve ever done in order to get someone’s attention?</span><br /><span className="text-gray-800">Spill the story of your wildest stunt!</span></li>
          <li><span className="text-black">What’s your guilty pleasure TV show?</span><br /><span className="text-gray-800">Time to confess your binge-watching habits!</span></li>
          <li><span className="text-black">What’s the most ridiculous thing you’ve ever done when no one was watching?</span><br /><span className="text-gray-800">Let’s talk about your secret quirks!</span></li>
          <li><span className="text-black">Have you ever watched a kids' movie as an adult and loved it?</span><br /><span className="text-gray-800">Time to talk about your guilty pleasures!</span></li>
          <li><span className="text-black">If you could switch places with any character from a movie, who would it be?</span><br /><span className="text-gray-800">Let’s talk about your dream character!</span></li>
          <li><span className="text-black">What’s the most hilarious thing that’s ever happened to you at a party?</span><br /><span className="text-gray-800">Spill the party story!</span></li>
          <li><span className="text-black">Have you ever made a prank call?</span><br /><span className="text-gray-800">Time to share your prankster side!</span></li>
          <li><span className="text-black">What’s the most outrageous dare you’ve ever accepted?</span><br /><span className="text-gray-800">Let’s hear your wild dare stories!</span></li>
        </ul>

        {/* Section 6 */}
        <h3 className="text-xl font-medium mb-3 mt-6">6. Embarrassing Confessions Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">Have you ever accidentally waved at someone who wasn’t waving at you?</span><br /><span className="text-gray-800">Spill your awkward moments!</span></li>
          <li><span className="text-black">What’s the most embarrassing thing you’ve done in front of a crush?</span><br /><span className="text-gray-800">Let’s talk about your awkward love life!</span></li>
          <li><span className="text-black">What’s the most embarrassing thing you’ve done in front of your boss?</span><br /><span className="text-gray-800">Confess your office mishaps!</span></li>
          <li><span className="text-black">Have you ever tried to impress someone and failed miserably?</span><br /><span className="text-gray-800">Time to share your embarrassing attempts!</span></li>
          <li><span className="text-black">What’s the most awkward thing you’ve done while trying to flirt?</span><br /><span className="text-gray-800">Let’s talk about your flirting fails!</span></li>
          <li><span className="text-black">What’s the worst haircut you’ve ever had?</span><br /><span className="text-gray-800">Let’s laugh at your past hairdos!</span></li>
          <li><span className="text-black">Have you ever been caught doing something embarrassing while alone?</span><br /><span className="text-gray-800">Spill your solo awkward moments!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve done after a few too many drinks?</span><br /><span className="text-gray-800">Confess your drunk antics!</span></li>
          <li><span className="text-black">What’s the weirdest thing you’ve worn out in public?</span><br /><span className="text-gray-800">Time to talk about your fashion fails!</span></li>
          <li><span className="text-black">Have you ever gotten into a ridiculously awkward situation?</span><br /><span className="text-gray-800">Spill the embarrassing story!</span></li>
        </ul>

        {/* Section 7 */}
        <h3 className="text-xl font-medium mb-3 mt-6">7. Playful and Fun Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">If you had to wear the same outfit for the rest of your life, what would it be?</span><br /><span className="text-gray-800">Time to pick your forever look!</span></li>
          <li><span className="text-black">What’s the most bizarre food combination you secretly enjoy?</span><br /><span className="text-gray-800">Time to share your weird food cravings!</span></li>
          <li><span className="text-black">Have you ever danced in front of a mirror?</span><br /><span className="text-gray-800">Let’s talk about your dance moves!</span></li>
          <li><span className="text-black">What’s the most embarrassing thing you’ve done to get out of an awkward situation?</span><br /><span className="text-gray-800">Spill your escape stories!</span></li>
          <li><span className="text-black">Have you ever tried to make a prank call?</span><br /><span className="text-gray-800">Share your prankster moments!</span></li>
          <li><span className="text-black">What’s the most outrageous dare you’ve ever done?</span><br /><span className="text-gray-800">Time for some wild dares!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve done while sleepwalking?</span><br /><span className="text-gray-800">Sleepy antics time!</span></li>
          <li><span className="text-black">What’s the weirdest thing you’ve Googled?</span><br /><span className="text-gray-800">Let’s hear your internet secrets!</span></li>
          <li><span className="text-black">What’s your signature dance move?</span><br /><span className="text-gray-800">Time to show off!</span></li>
          <li><span className="text-black">What’s the silliest nickname you’ve ever had?</span><br /><span className="text-gray-800">Time to talk about your funny nicknames!</span></li>
        </ul>

        {/* Section 8 */}
        <h3 className="text-xl font-medium mb-3 mt-6">8. Funny Situational Truth or Drink Questions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-black">If you could trade lives with anyone in this room for a day, who would it be?</span><br /><span className="text-gray-800">Spill your thoughts!</span></li>
          <li><span className="text-black">If you could be famous for something ridiculous, what would it be?</span><br /><span className="text-gray-800">Let’s hear your odd claim to fame!</span></li>
          <li><span className="text-black">What’s the weirdest talent you have?</span><br /><span className="text-gray-800">Time to show off your skills!</span></li>
          <li><span className="text-black">If you could time travel, where would you go?</span><br /><span className="text-gray-800">Let’s talk about your time machine plans!</span></li>
          <li><span className="text-black">What’s the funniest thing that has ever happened to you at work?</span><br /><span className="text-gray-800">Spill your office mishaps!</span></li>
          <li><span className="text-black">What’s the most ridiculous thing you’ve said to get out of trouble?</span><br /><span className="text-gray-800">Time for some funny excuses!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve ever done while in an elevator?</span><br /><span className="text-gray-800">Let’s talk about awkward elevator moments!</span></li>
          <li><span className="text-black">What’s the most awkward thing you’ve done at a family gathering?</span><br /><span className="text-gray-800">Let’s hear about those family moments!</span></li>
          <li><span className="text-black">What’s the funniest thing you’ve done while trying to make an impression?</span><br /><span className="text-gray-800">Spill the funny stories!</span></li>
          <li><span className="text-black">What’s the weirdest thing you’ve done when no one was watching?</span><br /><span className="text-gray-800">Let’s talk about your secret antics!</span></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Conclusion: Time to Get Laughing!</h2>
        <p className="mb-4">
          With these 80 Funny Truth or Drink questions, your game night is guaranteed to be filled with laughter, surprises, and plenty of fun moments. Whether you’re playing with close friends, a partner, or a group, these hilarious questions will keep everyone entertained, break the ice, and help you all share some light-hearted and funny confessions.
        </p>
        <p className="mb-4">
          So, gather your friends, pour your drinks, and get ready for an evening of awkward moments, embarrassing stories, and endless laughter. The best part? No matter how many drinks are taken, you’ll walk away with unforgettable memories and maybe even some hilarious new inside jokes!
        </p>
        <p className="mb-4">
          Enjoy the game, stay safe, and most importantly, have fun!
        </p>
      </section>




      <div className="px-6 py-12 bg-white">
                  <h2 className="text-3xl font-bold text-center mb-10 text-black">
                    Latest Articles
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {blogs.map((blog) => (
                      <Link 
                      aria-label={`Read ${blog.title}`}
                      to={`/${blog.link}`} key={blog.id}>
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
}

export default Blog4;