import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login(props) {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const navigate = useNavigate();

    const Login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://twitter-backend-inky.vercel.app/api/login', {
                email, password
            });
            
            // Store both email and username in local storage
            localStorage.setItem('username', res.data.username);
            await props.setLogin(email);
            navigate('/community/home');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('Wrong Email or Password');
                return;
            } else {
                toast.error('Server Error');
            }
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>

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
                <div className="flex items-center justify-center min-h-screen px-6">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl w-full max-w-sm">
                        <h2 className="text-3xl font-bold text-center text-white mb-6">
                            Welcome Back
                        </h2>

                        <form onSubmit={Login}>
                            <div className="mb-4">
                                <label className="block text-white/90 font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    onChange={(e) => SetEmail(e.target.value)}
                                    type="email"
                                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-white/90 font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    onChange={(e) => SetPassword(e.target.value)}
                                    type="password"
                                    className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* <div className="mb-4 flex justify-between items-center">
                                <label className="flex items-center text-white/70 text-sm">
                                    <input type="checkbox" className="mr-2" /> Remember me
                                </label>
                                <a href="#" className="text-purple-300 text-sm hover:underline">
                                    Forgot password?
                                </a>
                            </div> */}

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition"
                            >
                                Log In
                            </button>
                        </form>

                        <p className="text-white/70 text-sm text-center mt-4">
                            Don't have an account?{" "}
                            <Link to="/community/signup" className="text-purple-300 font-medium hover:underline">
                                Sign Up
                            </Link>
                        </p>
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
        </div>
    );
}

export default Login;