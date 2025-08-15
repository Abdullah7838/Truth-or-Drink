import React, {Suspense, lazy } from "react";
import { Component } from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
import LoadingScreen from './components/LoadingScreen'
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const SpinnerAlready = lazy(() => import('./components/SpinnerAlready'));
const Subscriber = lazy(() => import('./components/Subscriber'));
const BotChatMode = lazy(() => import('./components/BotChatMode'));
const BuyMeACoffee = lazy(() => import('./components/BuyMeACoffee'));
const Cookies = lazy(() => import('./components/Cookies'));
const DMCA = lazy(() => import('./components/DMCA'));
const GdprCompliance = lazy(() => import('./components/GdprCompliance'));
const Blog6 = lazy(() => import('./components/Blog6'));
const Spicy = lazy(() => import('./components/Spicy'));
const Couples = lazy(() => import('./components/Couples'));
const Cards = lazy(() => import('./components/Cards'));
const Extreme = lazy(() => import('./components/Extreme'));

//Community
const Main = lazy(() => import('./community/Main'));
const Login = lazy(() => import('./community/Login'));
const Signup = lazy(() => import('./community/Signup'));
const CommunityHome = lazy(() => import('./community/CommunityHome'));
const Profile = lazy(() => import('./community/Profile'));
const Comments = lazy(() => import('./community/Comments'));
const CommunityNavbar = lazy(() => import('./community/CommunityNavbar'));
const CommunityNotFound = lazy(() => import('./community/CommunityNotFound'));
const Friends = lazy(() => import('./community/Friends'));


// Lazy-loaded components
const Admin = lazy(() => import('./Admin/Admin'));
const AdminLogin = lazy(() => import('./Admin/AdminLogin'));
const Account = lazy(() => import('./community/Account'));
const SupportMe = lazy(() => import("./components/SupportMe"));
const UnSubscribe = lazy(() => import("./components/UnSubscribe"));
const UsersAdmin = lazy(() => import("./Admin/UsersAdmin"));
const Privacy = lazy(() => import("./components/Privacy"));
const TMS = lazy(() => import("./components/TMS"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const NotFound = lazy(() => import("./NotFound"));
const OfflineDrink = lazy(() => import("./components/OfflineDrink"));
const OnlineDrink = lazy(() => import("./components/OnlineDrink"));
const DrinkRooms = lazy(() => import("./components/DrinkRooms"));
const CreateDrinkRoom = lazy(() => import("./components/CreateDrinkRoom"));
const OnlineD = lazy(() => import("./components/OnlineD"));
const FullDrinkOnline = lazy(() => import("./components/FullDrinkOnline"));
const TruthAndDrinks = lazy(() => import("./components/TruthAndDrinks"));
const Ultimate = lazy(() => import("./components/Ultimate"));
const Disclaimer = lazy(() => import("./components/Disclaimer"));
const Blogs = lazy(() => import("./components/Blogs"));
const HomeBlogs = lazy(() => import("./components/HomeBlogs"));
const Blog1 = lazy(() => import("./components/Blog1"));
const Blog2 = lazy(() => import("./components/Blog2"));
const Blog3 = lazy(() => import("./components/Blog3"));
const Blog4 = lazy(() => import("./components/Blog4"));
const Blog5 = lazy(() => import("./components/Blog5"));
const QuizMode = lazy(() => import("./components/QuizMode"));
const TruthRunning = lazy(() => import("./components/TruthRunning"));

function NavbarWrapper({ logout }) {
  const location = useLocation();


  if (location.pathname.startsWith('/community')) {
    return <CommunityNavbar logout={logout} />;
  }

  return <Navbar />;
}
class App extends Component {
  constructor(props) {
    super(props);

    const savedEmail = localStorage.getItem('email');
    const isAdminStored = localStorage.getItem('isAdmin') === 'true';

    this.state = {
      email: savedEmail || null,
      isLogin: !!savedEmail, 
      isAdmin: isAdminStored,
      myusername: "",
    };
  }
  setAdmin = () => {
    this.setState({ isAdmin: true }, () => {
      localStorage.setItem('isAdmin', 'true');
    });
  };

  setLogin = (email) => {
    localStorage.setItem('email', email);
    this.setState({ email, isLogin: true });
  };

  logout = () => {
    localStorage.removeItem('email');
    this.setState({ email: null, isLogin: false });
  };
  setMainUsername = (username) => {
  this.setState({ myusername: username });
};
render() {
    return (

    <Router>
      <Suspense fallback={<LoadingScreen />}>
      <BuyMeACoffee/>
      <ScrollToTop />
      {/* <Navbar /> */}
      <NavbarWrapper logout={this.logout} />
      <Subscriber />
        <Routes>
          <Route
            path="/"
            element={
              <Home setMainUsername={this.setMainUsername} myusername={this.state.myusername} />
            }
          />
          <Route path="/privacy-policy" element={<Privacy />} />
           <Route path="/dmca" element={<DMCA />} />
           <Route path="/gdpr-compliance" element={<GdprCompliance />} />
          <Route path="/cookie-policy" element={<Cookies />} />
          <Route path="/terms-and-conditions" element={<TMS />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/truth-or-drink-scary-mommy" element={<Ultimate />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/truth-or-drink-offline" element={<OfflineDrink />} />
          <Route
            path="/online-truth-or-drink"
            element={
              <OnlineDrink
                setMainUsername={this.setMainUsername}
                myusername={this.state.myusername}
              />
            }
          />
          <Route
            path="/truth-or-drink-online"
            element={<DrinkRooms setMainUsername={this.setMainUsername} />}
          />
          <Route
            path="/create-drink-room"
            element={<CreateDrinkRoom setMainUsername={this.setMainUsername} />}
          />
          <Route
            path="/onlined/:roomId"
            element={
              <OnlineD
                setMainUsername={this.setMainUsername}
                myusername={this.state.myusername}
              />
            }
          />
          <Route
            path="/drooms/:roomId/dgame"
            element={<FullDrinkOnline myusername={this.state.myusername} />}
          />
          <Route path="/spin" element={<SpinnerAlready />} />
          <Route
            path="/ultimate-truth-and-drink"
            element={<TruthAndDrinks />}
          />
          <Route
            path="/truth-or-drink-spicy-questions"
            element={<Spicy />}
          />
           <Route
            path="/truth-or-drink-questions-for-couples"
            element={<Couples />}
          />
          <Route
            path="/truth-or-drink-card-game"
            element={<Cards />}
          />
          <Route
            path="/extreme-truth-or-drink-questions"
            element={<Extreme />}
          />
          <Route
            path="/150-juicy-truth-or-drink-questions-bold-fun-and-daring-for-your-next-game-night"
            element={<Blog1 />}
          />
          <Route
            path="/110-deep-truth-or-drink-questions-explore-your-true-feelings-thoughts-and-secrets"
            element={<Blog2 />}
          />
          <Route
            path="/70-fun-truth-or-drink-questions-for-game-night"
            element={<Blog3 />}
          />
          <Route
            path="/80-funny-truth-or-drink-questions-hilarious-and-entertaining-questions-for-your-next-game-night"
            element={<Blog4 />}
          />
          <Route
            path="/100-fun-truth-or-drink-questions-for-game-night"
            element={<Blog5 />}
          />
          <Route
            path="/101-deep-truth-or-drink-questions-to-really-open-up"
            element={<Blog6 />}
          />
          <Route path="/truth-or-drink-adults" element={<QuizMode />} />
          <Route path="/truth-or-drink-single-player-mode" element={<TruthRunning />} />
          <Route path="/unsubscribe" element={<UnSubscribe />} />
          <Route path="/drinking-game-online" element={<BotChatMode />} />
          <Route path="/buy-me-a-coffee" element={<SupportMe />} />
          <Route path="/*" element={<NotFound />} />


          {/* Community Routes */}
          <Route path="community/login" element={<Login setLogin={this.setLogin} />} />
          <Route path="community/signup" element={<Signup setLogin={this.setLogin} />} />
          <Route
            path="community/home"
            element={<Main email={this.state.email} isLogin={this.state.isLogin} logout={this.logout} />}
          />
          <Route path="community/profile" element={<Profile email={this.state.email} logout={this.logout} isLogin={this.state.isLogin}/>} />
          <Route path="community/comments/:id" element={<Comments email={this.state.email} />} />
          <Route path="community/account/:email" element={<Account logout={this.logout} myemail={this.state.email} Uemail={this.state.email}/>} />
          <Route path="/admin" element={<Admin email={this.state.email} isAdmin={this.state.isAdmin}/>} />
           <Route path="/admin/login" element={<AdminLogin email={this.state.email} isAdmin={this.state.isAdmin} setAdmin={this.setAdmin}/>} />
          <Route path="/admin/:email" element={<UsersAdmin isAdmin={this.state.isAdmin} />} />
           <Route path="community/find/friends" element={<Friends email={this.state.email}/>} />
          <Route path="community/not-found" element={<CommunityNotFound />} />

          <Route path="community/" element={<CommunityHome email={this.state.email} />} />

        </Routes>

      <Footer />
      </Suspense>
    </Router>
 );
  }
}

export default App;
