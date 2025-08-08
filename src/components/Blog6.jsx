import React from 'react';
import blog6 from "../assets/blog6.jpeg";
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import blog3 from '../assets/blog4.2.webp';
import blog1 from '../assets/blog1.1.webp'
import blog2 from '../assets/blog2.2.webp'
import blog4 from '../assets/blog4.1.webp'
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
    image: `${blog4}`,
    title: " 100 Fun Truth or Drink Questions for Game Night",
    link:"100-fun-truth-or-drink-questions-for-game-night",
  },
];
const Blog6 = () => {
    
  return (
    <div className="bg-white text-black px-4 sm:px-8 md:px-12 lg:px-16 py-8 max-w-5xl mx-auto">
    <div className="flex justify-center bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
        <img src={blog6} alt="Night Game" className="w-full h-auto mb-8 rounded-lg" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          101+ Deep Truth or Drink Questions to Really Open Up
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Looking to dig beneath the surface and spark meaningful conversations? These deep Truth or Drink questions will challenge your emotional honesty, reveal hidden feelings, and create unforgettable moments with friends, partners, or even strangers. Whether you're playing during a party or a late-night one-on-one, this list is designed to help you open up—or take that shot!
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use These Deep Truth or Drink Questions</h2>
        <p className="text-gray-600 mb-4">Just like the classic game, each player has two choices:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Answer the question honestly, no matter how personal it is.</li>
          <li>Take a drink and skip the answer.</li>
        </ul>
        <p className="text-gray-600 mb-4">These questions are perfect for:</p>
        <ul className="list-disc list-inside text-gray-600 mb-8">
          <li>Couples wanting to connect emotionally</li>
          <li>Friends looking for deeper conversations</li>
          <li>Parties that need more than just surface-level fun</li>
          <li>Building trust in new or developing relationships</li>
        </ul>
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
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">101+ Deep Truth or Drink Questions</h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Questions About Life & Identity</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2">
          <li><span className="font-bold">What’s the one thing you wish people understood about you?</span><br /> Share something that feels true to your core.</li>
          <li><span className="font-bold">Have you ever felt like you’re living a lie?</span><br /> Explore what you might be hiding from the world.</li>
          <li><span className="font-bold">What’s your biggest fear about your future?</span><br /> Open up about the worries you rarely voice.</li>
          <li><span className="font-bold">If you could erase one memory, what would it be and why?</span><br /> Reveal a moment that still haunts you.</li>
          <li><span className="font-bold">What do you pretend to like just to fit in?</span><br /> Confess what you secretly dislike.</li>
          <li><span className="font-bold">Have you ever questioned your purpose in life?</span><br /> Talk about the moments that made you doubt everything.</li>
          <li><span className="font-bold">What part of your personality do you secretly dislike?</span><br /> Admit the traits you struggle to accept.</li>
          <li><span className="font-bold">Do you think you're truly happy right now?</span><br /> Be honest about your current state of mind.</li>
          <li><span className="font-bold">What’s one belief you had as a child that you now completely disagree with?</span><br /> Reflect on how your perspective has changed.</li>
          <li><span className="font-bold">If you died tomorrow, what would you regret the most?</span><br /> Share what you wish you’d done differently.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Questions About Love & Relationships</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="11">
          <li><span className="font-bold">Have you ever stayed in a relationship out of guilt?</span><br /> Reveal times you couldn’t walk away.</li>
          <li><span className="font-bold">Who is the one person who broke your heart the most?</span><br /> Talk about your deepest heartbreak.</li>
          <li><span className="font-bold">Have you ever been in love with someone who didn’t love you back?</span><br /> Admit unrequited feelings.</li>
          <li><span className="font-bold">Do you think you’re good at being in a relationship?</span><br /> Reflect on your role as a partner.</li>
          <li><span className="font-bold">What's the biggest lie you've told a partner?</span><br /> Share something you kept hidden.</li>
          <li><span className="font-bold">Have you ever cheated or thought about cheating?</span><br /> Speak honestly about temptations.</li>
          <li><span className="font-bold">Do you believe in soulmates?</span><br /> Explain your beliefs about love and destiny.</li>
          <li><span className="font-bold">What scares you the most about falling in love?</span><br /> Explore your deepest fears of intimacy.</li>
          <li><span className="font-bold">What's a red flag you ignored in your past relationship?</span><br /> Talk about something you wish you hadn’t overlooked.</li>
          <li><span className="font-bold">Have you ever loved two people at the same time?</span><br /> Admit if your heart was divided.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Questions About Self-Worth & Insecurities</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="21">
          <li><span className="font-bold">What do you see in the mirror that you don’t like?</span><br /> Be honest about your insecurities.</li>
          <li><span className="font-bold">Do you feel you're enough just as you are?</span><br /> Share whether you struggle with self-acceptance.</li>
          <li><span className="font-bold">What’s one thing you’re deeply insecure about but rarely talk about?</span><br /> Reveal a hidden vulnerability.</li>
          <li><span className="font-bold">Have you ever felt truly seen by someone?</span><br /> Describe when you felt understood.</li>
          <li><span className="font-bold">What compliment do you wish someone would give you?</span><br /> Talk about the validation you crave.</li>
          <li><span className="font-bold">When was the last time you cried because you felt unworthy?</span><br /> Open up about painful moments.</li>
          <li><span className="font-bold">Do you think you deserve happiness?</span><br /> Be honest about how you see yourself.</li>
          <li><span className="font-bold">What’s your worst habit when you feel insecure?</span><br /> Explain how you react when self-doubt creeps in.</li>
          <li><span className="font-bold">What’s one thing you’ve never told anyone out of fear of rejection?</span><br /> Share what you’ve kept hidden.</li>
          <li><span className="font-bold">Have you ever felt like a burden to someone?</span><br /> Talk about times you felt you were too much.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Questions About the Past</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="31">
          <li><span className="font-bold">What's your biggest regret in life so far?</span><br /> Confess something you wish you could change.</li>
          <li><span className="font-bold">Who’s someone from your past you wish you could apologize to?</span><br /> Reveal old wounds that never healed.</li>
          <li><span className="font-bold">Have you ever made a choice that changed your life for the worse?</span><br /> Be honest about your mistakes.</li>
          <li><span className="font-bold">What’s a moment from childhood that still haunts you?</span><br /> Share a memory you can’t forget.</li>
          <li><span className="font-bold">Who was your first heartbreak, and how did it happen?</span><br /> Talk about early love and loss.</li>
          <li><span className="font-bold">Did you ever lie to your parents about something major?</span><br /> Confess secrets you kept growing up.</li>
          <li><span className="font-bold">What’s something you wish you said to someone who's no longer in your life?</span><br /> Express words left unsaid.</li>
          <li><span className="font-bold">Have you ever felt abandoned?</span><br /> Describe times you felt alone.</li>
          <li><span className="font-bold">What’s a secret you've kept for years?</span><br /> Reveal something you’ve carried too long.</li>
          <li><span className="font-bold">What’s the most painful lesson you've learned?</span><br /> Share what life has taught you the hard way.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Thought-Provoking & Moral Questions</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="41">
          <li><span className="font-bold">Would you rather be respected or loved?</span><br /> Share what matters most to you.</li>
          <li><span className="font-bold">Is it ever okay to lie to protect someone?</span><br /> Talk about where you draw the line.</li>
          <li><span className="font-bold">Have you ever done something morally wrong and not regretted it?</span><br /> Admit if you’ve broken your own code.</li>
          <li><span className="font-bold">Do you think people are mostly good or bad?</span><br /> Share your view of human nature.</li>
          <li><span className="font-bold">Would you betray a friend for a million dollars?</span><br /> Be honest about your limits.</li>
          <li><span className="font-bold">Have you ever manipulated someone to get what you want?</span><br /> Confess how far you’ve gone.</li>
          <li><span className="font-bold">What's the biggest ethical dilemma you've ever faced?</span><br /> Describe a choice that tested you.</li>
          <li><span className="font-bold">Do you think justice always prevails?</span><br /> Talk about whether you believe in fairness.</li>
          <li><span className="font-bold">If you could commit one crime without consequences, what would it be?</span><br /> Reveal your hidden temptations.</li>
          <li><span className="font-bold">Is forgiveness always deserved?</span><br /> Share your philosophy about letting go.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Vulnerable “Only If You’re Brave” Questions</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="51">
          <li><span className="font-bold">What’s one truth you’re afraid to admit to yourself?</span><br /> Be brave and share it openly.</li>
          <li><span className="font-bold">What part of yourself do you hide from everyone?</span><br /> Reveal what you keep in the shadows.</li>
          <li><span className="font-bold">When did you last feel completely alone?</span><br /> Talk about moments of deep loneliness.</li>
          <li><span className="font-bold">What’s a desire you’ve never dared to express?</span><br /> Share what you keep locked away.</li>
          <li><span className="font-bold">If you had to reveal one secret right now, what would it be?</span><br /> Confess if you dare.</li>
          <li><span className="font-bold">What’s something you’ve never told your best friend?</span><br /> Talk about what you still keep private.</li>
          <li><span className="font-bold">When did you last feel rejected?</span><br /> Describe how it affected you.</li>
          <li><span className="font-bold">What’s your biggest emotional wound?</span><br /> Be honest about what still hurts.</li>
          <li><span className="font-bold">What would break you completely?</span><br /> Reveal your deepest fear.</li>
          <li><span className="font-bold">What do you fear people would think if they truly knew you?</span><br /> Share what you feel you have to hide.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Reflective Deep Questions (For Mature Players)</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="61">
          <li><span className="font-bold">What part of your past are you still trying to heal from?</span><br /> Talk about what you’re still working through.</li>
          <li><span className="font-bold">When did you feel most powerless in life?</span><br /> Describe a time you had no control.</li>
          <li><span className="font-bold">Do you believe people can truly change?</span><br /> Share your thoughts about growth.</li>
          <li><span className="font-bold">What's something you're still angry about?</span><br /> Reveal what still triggers you.</li>
          <li><span className="font-bold">If you could relive one moment—just to feel it again—what would it be?</span><br /> Talk about what you miss most.</li>
          <li><span className="font-bold">Have you ever made peace with someone who hurt you?</span><br /> Share how you found closure.</li>
          <li><span className="font-bold">What does vulnerability mean to you?</span><br /> Explain what being open looks like.</li>
          <li><span className="font-bold">Have you ever chosen silence when you should've spoken?</span><br /> Confess what you didn’t say.</li>
          <li><span className="font-bold">What’s something that still makes you cry?</span><br /> Talk about memories that move you.</li>
          <li><span className="font-bold">Are you proud of the person you’ve become?</span><br /> Be honest about how you see yourself.</li>
        </ol>

        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="71">
          <li><span className="font-bold">What’s your biggest internal conflict right now?</span><br /> Share what’s pulling you in different directions.</li>
          <li><span className="font-bold">If you could restart your life, what would you change?</span><br /> Talk about what you’d do differently.</li>
          <li><span className="font-bold">What are you most afraid to lose?</span><br /> Reveal your deepest attachment.</li>
          <li><span className="font-bold">When did you stop trusting people?</span><br /> Describe what changed your trust.</li>
          <li><span className="font-bold">What dream have you given up on?</span><br /> Talk about ambitions you let go.</li>
          <li><span className="font-bold">Do you think your parents are proud of you?</span><br /> Share whether you feel their approval.</li>
          <li><span className="font-bold">What do you want your legacy to be?</span><br /> Explain how you want to be remembered.</li>
          <li><span className="font-bold">What emotion do you try hardest to hide?</span><br /> Be honest about what you cover up.</li>
          <li><span className="font-bold">Have you ever felt truly safe with someone?</span><br /> Describe that feeling.</li>
          <li><span className="font-bold">What’s the hardest truth you’ve ever had to accept?</span><br /> Talk about the reality that hurt the most.</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Bonus Questions</h3>
        <ol className="list-decimal list-inside text-gray-600 mb-8 space-y-2" start="81">
          <li><span className="font-bold">Do you believe you're hard to love?</span><br /> Share your insecurities about relationships.</li>
          <li><span className="font-bold">What’s something you’ve been pretending is okay—but isn’t?</span><br /> Be honest about what you ignore.</li>
          <li><span className="font-bold">Do you feel more lonely in crowds or when you’re alone?</span><br /> Talk about your experience of loneliness.</li>
          <li><span className="font-bold">What part of your story do you never tell?</span><br /> Reveal what you keep to yourself.</li>
          <li><span className="font-bold">What do you need most right now emotionally?</span><br /> Share what you’re craving.</li>
          <li><span className="font-bold">What’s something that made you who you are—but you'd never want to go through again?</span><br /> Talk about what shaped you.</li>
          <li><span className="font-bold">Do you think you've hurt more people or been hurt more?</span><br /> Reflect on your impact on others.</li>
          <li><span className="font-bold">What do you fear you’ll never recover from?</span><br /> Be honest about lasting pain.</li>
          <li><span className="font-bold">What’s the real reason your last relationship ended?</span><br /> Reveal what you don’t usually say.</li>
          <li><span className="font-bold">If you could speak to your younger self, what would you say?</span><br /> Share your advice.</li>
          <li><span className="font-bold">What’s something you believe that most people don’t?</span><br /> Talk about your unique view.</li>
          <li><span className="font-bold">Do you think you’ve reached your emotional limit?</span><br /> Be honest about your capacity.</li>
          <li><span className="font-bold">What's a truth you've been avoiding?</span><br /> Confess what you haven’t faced.</li>
          <li><span className="font-bold">Have you ever self-sabotaged something good?</span><br /> Share when you got in your own way.</li>
          <li><span className="font-bold">What's something you feel deeply ashamed of?</span><br /> Talk about what you wish you could undo.</li>
          <li><span className="font-bold">Who do you miss, but can’t talk to anymore?</span><br /> Share who’s still in your heart.</li>
          <li><span className="font-bold">What’s something you've forgiven but haven’t forgotten?</span><br /> Reveal what lingers.</li>
          <li><span className="font-bold">Do you feel seen in your current relationships?</span><br /> Talk about whether you feel understood.</li>
          <li><span className="font-bold">What are you tired of pretending to be?</span><br /> Be honest about the mask you wear.</li>
          <li><span className="font-bold">When did you last feel truly alive?</span><br /> Share what made you feel that way.</li>
          <li><span className="font-bold">What’s the question you hope no one ever asks you?</span><br /> Admit what you fear being asked.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-600 mb-4">
          Deep Truth or Drink questions go far beyond casual fun—they can spark powerful conversations that help you understand yourself and the people around you on a much deeper level. Whether you’re playing with close friends, your partner, or even new acquaintances, these questions will challenge your honesty, build trust, and create unforgettable memories.
        </p>
        <p className="text-lg text-gray-600">
          Just remember: if answering feels too vulnerable, there’s always the option to take a drink. Sometimes, that choice says just as much as the truth itself.
        </p>
      </div>

</div>
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
};

export default Blog6;