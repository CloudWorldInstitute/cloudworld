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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-700 p-0 m-0 text-white font-sans">
      <div className="flex w-full max-w-4xl h-[480px] bg-transparent rounded-2xl">
        {/* left side - login */}
        <div className="w-1/2 flex flex-col justify-center bg-[#191337] rounded-l-2xl px-10 py-10 shadow-xl">
          {/* Logo & avatar */}
          <div className="flex items-center mb-8">
            <div className="mr-4">
             
            </div>
            <span className="font-bold tracking-wide text-lg">Cloud World</span>
          </div>
          
        

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-indigo-300">
                  <svg width="20" height="20" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path d="M19 19V19.01M4 6h16M4 10h16M4 14h16M4 18h6" strokeWidth="2.2" strokeLinecap="round"/></svg>
                </span>
                <input
                  type="text"
                  className="w-full py-3 pl-10 pr-4 rounded-lg bg-[#1b1839] border border-indigo-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-white placeholder-indigo-300 transition"
                  placeholder="Username"
                  autoComplete="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-indigo-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" rx="1.5"/><path d="M9 10V8a3 3 0 116 0v2"/></svg>
                </span>
                <input
                  type="password"
                  className="w-full py-3 pl-10 pr-4 rounded-lg bg-[#1b1839] border border-indigo-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 text-white placeholder-indigo-300 transition"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && <div className="text-pink-400 text-center">{error}</div>}
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 rounded-lg text-white font-semibold text-lg hover:bg-pink-600 transition"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-8 flex justify-between items-center text-sm text-indigo-300">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-pink-500" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#forgot" className="hover:text-pink-400">Forgot your password?</a>
          </div>
        </div>
        
        {/* right side - swirl + welcome text */}
        <div className="w-1/2 flex flex-col justify-between bg-[#191337] rounded-r-2xl px-14 py-10 items-center relative overflow-hidden">
          {/* Swirl background (approximate) */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full rounded-r-2xl" style={{
              background: 'radial-gradient(ellipse 60% 38% at 70% 48%, #a78bfa99 30%, #8b5cf677 55%, #191337 100%)'
            }} />
            <div className="absolute left-0 top-24 w-60 h-60 rounded-full opacity-20 blur-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400"></div>
          </div>
          {/* Welcome text */}
          <div className="relative z-10 flex flex-col justify-center h-full w-full">
            <h1 className="text-5xl font-bold mb-6">Welcome.</h1>
            <p className="text-indigo-200 text-lg mb-10 w-3/4">Unlock latest cloud and development insights. Please sign in to continue.</p>
            <div className="mt-6 text-indigo-300 text-sm">
              New to our portal? <a href="#signup" className="text-pink-400 underline ml-2 hover:text-pink-300">Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
