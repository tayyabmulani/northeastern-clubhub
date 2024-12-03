import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentSignup from './pages/Signup Pages/StudentSignup';
import StudentHome from './pages/StudentHome';
import StudentLogin from './pages/Login Pages/StudentLogin';
import ClubAdminSignup from './pages/Signup Pages/ClubAdminSignup';
import ClubAdminLogin from './pages/Login Pages/ClubAdminLogin';
import ClubAdminHome from './pages/ClubAdminHome';
import PlatformAdminSignup from './pages/Signup Pages/PlatformAdminSignup';
import PlatformAdminLogin from './pages/Login Pages/PlatformAdminLogin';
import PlatformAdminHome from './pages/PlatformAdminHome';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Student" element={<StudentSignup />} />
        <Route path="/ClubAdmin" element={<ClubAdminSignup />} />
        <Route path="/PlatformAdmin" element={<PlatformAdminSignup />} />
        <Route path="/Student-home" element={<StudentHome />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/club-admin-login" element={<ClubAdminLogin />} />
        <Route path="/club-admin-signup" element={<ClubAdminSignup />} />
        <Route path="/club-admin-dashboard" element={<ClubAdminHome />} />
        <Route path="/platform-admin-login" element={<PlatformAdminLogin />} />
        <Route path="/platform-admin-signup" element={<PlatformAdminSignup />} />
        <Route path="/platform-admin-dashboard" element={<PlatformAdminHome />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
