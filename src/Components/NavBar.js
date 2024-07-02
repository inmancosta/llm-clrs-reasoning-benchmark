// src/Components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white text-gray-800 p-6 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="https://github.com/ataylor24/llm_algorithmic_reasoning" className="text-xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-8 inline-block mr-2" />
          
        </Link>
        <div className="space-x-4">
          <Link to="/get-started" className="hover:text-gray-300">Get Started</Link>
          <Link to="/leaderboard" className="hover:text-gray-300">LeaderBoard</Link>
          <Link to="/datasets" className="hover:text-gray-300">Datasets</Link>
          <Link to="/team" className="hover:text-gray-300">Team</Link>
          <Link to="/updates" className="hover:text-gray-300">Updates</Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
