import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { User, Mail, Lock, ArrowLeft, CheckCircle, XCircle, Gamepad2 } from 'lucide-react';

function Signup(props) {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [usernameAvailable, setUsernameAvailable] = useState(true);
const [usernameError, setUsernameError] = useState('');
const [isVisible, setIsVisible] = useState(false);
const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Check username availability when username changes
    useEffect(() => {
        const checkUsername = async () => {
            if (username.length < 3) {
                setUsernameError('Username must be at least 3 characters');
                return;
            }
            
            if (username.includes('.')) {
                setUsernameError('Username cannot contain dots (.)');
                setUsernameAvailable(false);
                return;
            }
            
            try {
                const response = await axios.get(`http://localhost:3001/api/check-username/${username}`);
                setUsernameAvailable(response.data.available);
                setUsernameError(response.data.available ? '' : response.data.message);
            } catch (error) {
                console.error('Error checking username:', error);
            }
        };
        
        if (username.length > 0) {
            checkUsername();
        } else {
            setUsernameError('');
            setUsernameAvailable(true);
        }
    }, [username]);

    const Signup = async(e) => {
        e.preventDefault();
        
        if (!usernameAvailable || username.length < 3) {
            toast.error(usernameError || 'Please choose a valid username');
            return;
        }
        
        try {
            const res = await axios.post('http://localhost:3001/api/signup', {
                username,
                email,
                password
            });
            
            // Store both email and username in local storage
            localStorage.setItem('username', res.data.username);
            await props.setLogin(email);
            navigate('/community/home');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message || 'Registration failed');
                return;
            } else {
                toast.error('Server Error');
            }
        }
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="w-full py-6 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto flex justify-between items-center px-6">
            <button 
              onClick={() => navigate('/community')}
              className="flex items-center space-x-3 text-white hover:text-purple-300 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Back to Home</span>
              </div>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6 py-12">
          <div className={`w-full max-w-md transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Form Container */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Create an Account
                </h2>
                <p className="text-white/70">
                  Join the community and start playing
                </p>
              </div>

              {/* Signup Form */}
              <form onSubmit={Signup} className="space-y-6">
                
                {/* Username Field */}
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-white/50" />
                    </div>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className={`w-full pl-10 pr-10 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${usernameAvailable ? 'border-white/20 focus:ring-purple-400' : 'border-red-400/50 focus:ring-red-400'}`}
                      placeholder="Choose a username"
                      required
                      minLength="3"
                    />
                    {username.length > 0 && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        {usernameAvailable && !usernameError ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                    )}
                  </div>
                  {usernameError && (
                    <p className="text-red-400 text-xs mt-1">{usernameError}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-white/50" />
                    </div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="w-full pl-10 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-white/90 font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-white/50" />
                    </div>
                    <input
                     onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="w-full pl-10 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Enter your password"
                      required
                      minLength="6"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25"
                >
                  Sign Up
                </button>
              </form>

              {/* Login Link */}
              <div className="text-center mt-6 pt-6 border-t border-white/10">
                <p className="text-white/70 text-sm">
                  Already have an account?{" "}
                  <Link to="/community/login" className="text-purple-300 font-medium hover:text-white transition-colors hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
                position="bottom-left" 
                autoClose={3000} 
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ backgroundColor: "black", color: "white" }} 
            />

      <style >{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Signup;