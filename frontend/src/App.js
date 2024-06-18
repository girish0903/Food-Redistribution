import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Restaurant from './components/Restaurant';

import NGO from './components/Ngo';

import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import { AuthProvider, useAuth } from './components/AuthContext';
import UserList from './components/UserList';
function App() {
  
  const PrivateRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />          
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/list" element={<UserList/>} />
            <Route path="/restaurant" element={<PrivateRoute roles={['restaurant']} element={<Restaurant/>} />} />
            <Route path="/ngo" element={<PrivateRoute roles={['ngo']} element={<NGO/>} />} />
            <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
