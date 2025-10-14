import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 font-sans flex items-center justify-center p-4">
      {/* Main Content */}
      <div className="max-w-md mt-25 w-full">
        {/* Error Illustration */}
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            {/* Animated 404 */}
            <div className="text-9xl font-bold text-gray-800 dark:text-white mb-4 relative">
              <span className="relative z-10">404</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-2xl opacity-30 animate-pulse"></div>
            </div>
            
            {/* Error Icon */}
            <div className="absolute -top-4 -right-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-2">
            Oops! The page you're looking for seems to have wandered off.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Don't worry, let's get you back home safely.
          </p>
        </div>

        {/* Home Button */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-600 hover:to-indigo-700"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Back Home
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Need help?{' '}
            <a 
              href="/contact" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed bottom-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"></div>
      <div className="fixed top-10 right-10 w-16 h-16 bg-red-200 dark:bg-red-800 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/2 left-20 w-12 h-12 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default ErrorPage;