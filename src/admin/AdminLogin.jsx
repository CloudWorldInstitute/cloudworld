import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }
    setError("");
    // Handle login logic here
    onLogin && onLogin({ username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-700 p-4 text-white font-sans">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-transparent rounded-2xl overflow-hidden shadow-2xl">

        {/* Left Side - Login */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#191337] px-6 sm:px-8 md:px-10 py-10 md:rounded-l-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">Cloud World</h2>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <input type="text" placeholder="Username" className="w-full py-3 px-4 rounded-lg bg-[#1b1839] border border-indigo-500 focus:ring-2 focus:ring-pink-500 transition text-white placeholder-indigo-300" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full py-3 px-4 rounded-lg bg-[#1b1839] border border-indigo-500 focus:ring-2 focus:ring-pink-500 transition text-white placeholder-indigo-300" value={password} onChange={e => setPassword(e.target.value)} />
            {error && <div className="text-pink-400 text-center">{error}</div>}
            <button type="submit" className="w-full py-3 bg-pink-500 rounded-lg hover:bg-pink-600 font-semibold text-lg">LOGIN</button>
          </form>
          <div className="mt-8 flex flex-col sm:flex-row justify-between text-sm text-indigo-300 text-center sm:text-left">
            <label className="flex justify-center sm:justify-start items-center cursor-pointer mb-3 sm:mb-0">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-pink-500 mr-2" />Remember me
            </label>
            <a href="#forgot" className="hover:text-pink-400">Forgot your password?</a>
          </div>
        </div>

        {/* Right Side - Welcome */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#191337] px-6 sm:px-10 py-10 relative overflow-hidden md:rounded-r-2xl">
          <div className="hidden md:block absolute inset-0 z-0">
            <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse 60% 38% at 70% 48%, #a78bfa99 30%, #8b5cf677 55%, #191337 100%)' }} />
            <div className="absolute left-0 top-24 w-60 h-60 rounded-full opacity-20 blur-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400"></div>
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome.</h1>
            <p className="text-indigo-200 text-base md:text-lg mb-6 md:w-4/5 mx-auto md:mx-0">Unlock latest cloud and development insights. Please sign in to continue.</p>
            <div className="text-indigo-300 text-sm">
              New to our portal? <a href="#signup" className="text-pink-400 underline ml-2 hover:text-pink-300">Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
