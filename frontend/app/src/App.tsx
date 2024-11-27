import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentSignup from './pages/StudentSignup';
import ClubAdminSignup from './pages/ClubAdminSignup';
import PlatformAdminSignup from './pages/PlatformAdminSignup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Student" element={<StudentSignup />} />
        <Route path="/ClubAdmin" element={<ClubAdminSignup />} />
        <Route path="/PlatformAdmin" element={<PlatformAdminSignup />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
