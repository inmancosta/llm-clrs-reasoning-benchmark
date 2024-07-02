import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 p-6 border-b-2 border-gray-300 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="https://github.com/ataylor24/llm_algorithmic_reasoning" className="text-xl font-bold flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-8 inline-block mr-2" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/get-started" className="hover:text-gray-300">Get Started</Link>
          <Link to="/leaderboard" className="hover:text-gray-300">LeaderBoard</Link>
          <Link to="/datasets" className="hover:text-gray-300">Datasets</Link>
          <Link to="/team" className="hover:text-gray-300">Team</Link>
          <Link to="/updates" className="hover:text-gray-300">Updates</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/get-started" className="block hover:text-gray-300">Get Started</Link>
          <Link to="/leaderboard" className="block hover:text-gray-300">LeaderBoard</Link>
          <Link to="/datasets" className="block hover:text-gray-300">Datasets</Link>
          <Link to="/team" className="block hover:text-gray-300">Team</Link>
          <Link to="/updates" className="block hover:text-gray-300">Updates</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block hover:text-gray-300">GitHub</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

