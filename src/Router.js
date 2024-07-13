import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing';
import TeamPage from './Pages/Team';
import Overview from './Pages/Overview';
import IntermediateStepsAccuracy from './Pages/IntermediateStepAcc';
import ExactMatchAccuracy from './Pages/ExactMatchAcc';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/leaderboard/overview" element={<Overview />} />
        <Route path="/leaderboard/intermediate-steps" element={<IntermediateStepsAccuracy />} />
        <Route path="/leaderboard/exact-match" element={<ExactMatchAccuracy />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
