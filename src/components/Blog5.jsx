import React from 'react';
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import blog3 from '../assets/blog4.1.jpeg';
import blog1 from '../assets/blog1.1.jpeg'
import blog2 from '../assets/blog2.2.jpeg'
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
];

function Blog5() {
  return (
    <div className="bg-white text-black px-4 sm:px-8 md:px-12 lg:px-16 py-8 max-w-5xl mx-auto">
              <img src={blog3} alt="truthordrink.pro" className="w-full h-auto mb-8 rounded-lg" />
        
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        100 Fun Truth or Drink Questions for Game Night
      </h1>

      {/* Meta Description */}
      <p className="text-lg sm:text-xl italic text-center mb-8">
        Explore 100 random Truth or Drink questions that will keep your game unpredictable, fun, and full of surprises. Perfect for friends, family, or any group looking for some entertaining chaos!
      </p>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready for Some Fun?</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Get ready for a game night filled with 100 random Truth or Drink questions! Whether you're playing with friends, family, or a partner, these questions will keep everyone laughing, sharing wild confessions, and having fun. Each question will spark hilarious stories, awkward confessions, and moments of pure laughter.
          Grab your drinks and let’s dive into the fun!
        </p>
      </section>

      {/* How to Play */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How to Play Truth or Drink</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">Gather Your Group</h3>
            <p className="text-base sm:text-lg">At least two players are needed, but the more players, the more fun!</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">Prepare Drinks</h3>
            <p className="text-base sm:text-lg">Each player should have a drink ready (alcoholic or non-alcoholic).</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">Ask Questions</h3>
            <p className="text-base sm:text-lg">Players take turns asking Truth or Drink questions. The person being asked must either answer truthfully or take a sip of their drink.</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">No Pressure</h3>
            <p className="text-base sm:text-lg">If someone doesn’t feel like answering, they can always take a drink instead.</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium">Keep the Fun Going</h3>
            <p className="text-base sm:text-lg">Continue playing until everyone is laughing too hard or you run out of questions!</p>
          </div>
        </div>
      </section>
      <Link to="/" className="flex justify-center">
              <button className="flex items-center max-w-xs justify-center gap-3 w-full cursor-pointer bg-blue-500 text-white border border-gray-300 rounded-full py-3 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-400 mb-4 transition-all duration-200 active:scale-95">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <FaPlay className="text-blue-600 w-4 h-4" />
                </div>
                Play Online
              </button>
            </Link>

      {/* Questions Sections */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">100 Random Truth or Drink Questions with Suggestions</h2>
        <p className="text-base sm:text-lg mb-4">Here are 100 random Truth or Drink questions with suggestions to spice up your game!</p>

        {/* Section 1 */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-medium mb-2">1. Fun and Unexpected Truth or Drink Questions</h3>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
            <li><span className="text-black font-semibold">What’s the weirdest food combination you secretly enjoy?</span><br />Spill the beans on your odd cravings!</li>
            <li><span className="text-black font-semibold">If you could switch lives with anyone for a day, who would it be and why?</span><br />Pick your dream life for a day!</li>
            <li><span className="text-black font-semibold">What’s the most embarrassing thing you’ve done while on a date?</span><br />Let’s hear your date disasters!</li>
            <li><span className="text-black font-semibold">Have you ever accidentally texted the wrong person? What did it say?</span><br />Oops! Spill the awkward story!</li>
            <li><span className="text-black font-semibold">If you could eat only one thing for the rest of your life, what would it be?</span><br />Choose your forever food!</li>
            <li><span className="text-black font-semibold">What’s the most ridiculous lie you’ve told and gotten away with?</span><br />Fess up to your fibbing skills!</li>
            <li><span className="text-black font-semibold">If you had to pick one celebrity to be your best friend, who would it be?</span><br />Pick your perfect celebrity bestie!</li>
            <li><span className="text-black font-semibold">What’s something you’ve done that you’re proud of but nobody knows?</span><br />Time to share a hidden achievement!</li>
            <li><span className="text-black font-semibold">What’s the most random thing you’ve bought that you regret?</span><br />Let’s hear about your impulse purchases!</li>
            <li><span className="text-black font-semibold">What’s your most unusual talent or skill?</span><br />Show off your quirky skills!</li>
            <li><span className="text-black font-semibold">What’s one thing you can’t live without?</span><br />Time for your essentials!</li>
            <li><span className="text-black font-semibold">If you could have any superpower, what would it be and why?</span><br />What’s your ideal superpower!</li>
            <li><span className="text-black font-semibold">What’s the best piece of advice you’ve ever received?</span><br />Share your wisdom!</li>
            <li><span className="text-black font-semibold">If you had to pick a favorite holiday, which one would it be?</span><br />Choose your best holiday!</li>
            <li><span className="text-black font-semibold">If you could only listen to one song for the rest of your life, what would it be?</span><br />Pick your forever tune!</li>
            <li><span className="text-black font-semibold">What’s the most unusual pet you’ve ever wanted to have?</span><br />Time to talk about exotic pets!</li>
            <li><span className="text-black font-semibold">What’s the weirdest dream you’ve ever had?</span><br />Share your strange dreams!</li>
            <li><span className="text-black font-semibold">What’s the most ridiculous thing you’ve ever done on a dare?</span><br />Spill the wild dare stories!</li>
            <li><span className="text-black font-semibold">What’s the worst haircut you’ve ever had?</span><br />Time to laugh at your hair fails!</li>
            <li><span className="text-black font-semibold">What’s something you’ve never done but want to try?</span><br />Time to spill your bucket list item!</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-medium mb-2">2. Awkward and Funny Truth or Drink Questions</h3>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
            <li><span className="text-black font-semibold">What’s the most embarrassing thing you’ve done in front of your boss?</span><br />Let’s talk about office mishaps!</li>
            <li><span className="text-black font-semibold">What’s the weirdest thing you’ve Googled?</span><br />Time to reveal your search history!</li>
            <li><span className="text-black font-semibold">Have you ever accidentally worn something out in public that didn’t match?</span><br />Spill the fashion fail!</li>
            <li><span className="text-black font-semibold">What’s the most awkward thing you’ve done when you first met someone?</span><br />Time to share your first-meeting disasters!</li>
            <li><span className="text-black font-semibold">What’s the funniest thing you’ve done while trying to impress someone?</span><br />Time to laugh at yourself!</li>
            <li><span className="text-black font-semibold">What’s the weirdest compliment you’ve ever received?</span><br />Let’s hear about your awkward compliments!</li>
            <li><span className="text-black font-semibold">What’s the most awkward thing you’ve done at a family gathering?</span><br />Time to talk about awkward family moments!</li>
            <li><span className="text-black font-semibold">What’s the most childish thing you still do?</span><br />Confess your inner child!</li>
            <li><span className="text-black font-semibold">What’s your most embarrassing text you’ve sent?</span><br />Let’s talk about awkward texts!</li>
            <li><span className="text-black font-semibold">What’s the weirdest habit you have that most people don’t know about?</span><br />Reveal your quirks!</li>
            <li><span className="text-black font-semibold">What’s the most embarrassing thing you’ve done at school?</span><br />Spill your school stories!</li>
            <li><span className="text-black font-semibold">What’s the most embarrassing thing you’ve done in front of a crush?</span><br />Time to share your love blunders!</li>
            <li><span className="text-black font-semibold">What’s the weirdest thing you’ve done to impress someone?</span><br />Confess your stunts!</li>
            <li><span className="text-black font-semibold">What’s the funniest thing you’ve done after a few drinks?</span><br />Spill the funny drunk stories!</li>
            <li><span className="text-black font-semibold">What’s your most awkward moment at work?</span><br />Let’s talk about your office mishaps!</li>
            <li><span className="text-black font-semibold">What’s the weirdest thing you’ve done when no one was watching?</span><br />Time to reveal your secret quirks!</li>
            <li><span className="text-black font-semibold">Have you ever made a prank call? What happened?</span><br />Let’s talk about your prankster moments!</li>
            <li><span className="text-black font-semibold">What’s your signature dance move?</span><br />Time to show off your moves!</li>
            <li><span className="text-black font-semibold">What’s the most embarrassing song you know all the lyrics to?</span><br />Spill your guilty pleasure songs!</li>
            <li><span className="text-black font-semibold">What’s the worst fashion choice you’ve made?</span><br />Time to laugh at your wardrobe mistakes!</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-medium mb-2">3. Bold and Revealing Truth or Drink Questions</h3>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
            <li><span className="text-black font-semibold">Have you ever had a crush on a friend’s partner?</span><br />Spill the tea on your forbidden crush!</li>
            <li><span className="text-black font-semibold">What’s the most outrageous thing you’ve done to get someone’s attention?</span><br />Confess your bold stunts!</li>
            <li><span className="text-black font-semibold">What’s the worst thing you’ve ever done for love?</span><br />Spill your romantic disasters!</li>
            <li><span className="text-black font-semibold">What’s one thing you’ve always wanted to say to someone but haven’t?</span><br />Let it all out!</li>
            <li><span className="text-black font-semibold">If you could go back in time, what moment would you relive?</span><br />Pick your most cherished moment!</li>
            <li><span className="text-black font-semibold">What’s one thing you regret not doing?</span><br />Time to share your biggest regret!</li>
            <li><span className="text-black font-semibold">If you could change one thing about your past, what would it be?</span><br />Reflect on your past!</li>
            <li><span className="text-black font-semibold">What’s the hardest thing you’ve ever had to forgive?</span><br />Let’s talk about your forgiveness journey!</li>
            <li><span className="text-black font-semibold">What’s one thing you would change about yourself if you could?</span><br />Self-reflection time!</li>
            <li><span className="text-black font-semibold">What’s the biggest secret you’ve ever kept from someone?</span><br />Time to come clean!</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-medium mb-2">4. Deep and Thought-Provoking Truth or Drink Questions</h3>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
            <li><span className="text-black font-semibold">What’s the best piece of advice you’ve ever received?</span><br />Share the wisdom you’ve gained!</li>
            <li><span className="text-black font-semibold">If you could go back in time and relive one moment, what would it be?</span><br />Choose a moment to relive forever!</li>
            <li><span className="text-black font-semibold">What’s the most difficult thing you’ve ever had to forgive?</span><br />Spill the confession!</li>
            <li><span className="text-black font-semibold">What’s one thing you regret not doing?</span><br />Time to share your biggest regret!</li>
            <li><span className="text-black font-semibold">If you could change one thing about your past, what would it be?</span><br />Reflect on your past!</li>
            <li><span className="text-black font-semibold">What’s the hardest truth you’ve ever had to accept?</span><br />Spill the painful truth!</li>
            <li><span className="text-black font-semibold">What’s the most meaningful thing someone has done for you?</span><br />Share a heartfelt memory!</li>
            <li><span className="text-black font-semibold">What’s the biggest risk you’ve ever taken?</span><br />Tell us about your daring adventure!</li>
            <li><span className="text-black font-semibold">What’s the most significant challenge you’ve overcome?</span><br />Talk about your personal growth!</li>
            <li><span className="text-black font-semibold">What’s something you’ve learned about yourself in the last year?</span><br />Reflect on your self-discovery!</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-medium mb-2">5. Would You Rather Questions</h3>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
            <li><span className="text-black font-semibold">Would you rather always speak in riddles or always speak in rhymes?</span><br />Pick your communication challenge!</li>
            <li><span className="text-black font-semibold">Would you rather live in the future or the past?</span><br />Which time period would you choose?</li>
            <li><span className="text-black font-semibold">Would you rather be able to talk to animals or speak every language?</span><br />What’s your ideal superpower?</li>
            <li><span className="text-black font-semibold">Would you rather always have to tell the truth or always have to lie?</span><br />Truth or lies – which one would you pick?</li>
            <li><span className="text-black font-semibold">Would you rather have unlimited money but no friends or no money but tons of friends?</span><br />Choose your lifestyle!</li>
            <li><span className="text-black font-semibold">Would you rather live on a beach or in the mountains?</span><br />Where would you prefer to live?</li>
            <li><span className="text-black font-semibold">Would you rather be famous for something ridiculous or be completely anonymous?</span><br />Pick your fame dilemma!</li>
            <li><span className="text-black font-semibold">Would you rather never be able to use your phone again or never be able to watch TV again?</span><br />Choose your digital dilemma!</li>
            <li><span className="text-black font-semibold">Would you rather always wear shoes that are too tight or always wear shoes that are too loose?</span><br />Pick your footwear misfortune!</li>
            <li><span className="text-black font-semibold">Would you rather lose all your money or all your memories?</span><br />Time for deep choices!</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Conclusion:</h2>
        <p className="text-base sm:text-lg leading-relaxed">
          With these 100 random Truth or Drink questions, your game night is guaranteed to be filled with laughter, wild confessions, and unforgettable moments. Whether you're playing with close friends, family, or even a new group, these questions will break the ice and create hilarious memories.
          Remember, the best part of Truth or Drink is that there are no wrong answers—just fun, honesty, and maybe a few sips along the way. So grab your drinks, gather your crew, and let the chaos begin!
          Ready for the next round? Save this list, shuffle the questions, and play again for an entirely different experience. Cheers to a night of laughter and great stories!
        </p>
      </section>




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
}

export default Blog5;