import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for navbar styles
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { isAuthenticated, userRole, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/" className='nav-link'>Food Waste Management</Link>
      </div>
      <ul className="navbar-nav">
                {isAuthenticated ? (
                    <>
                        {userRole === 'ngo' && (
                            <li className="nav-brand">
                                <Link className='nav-link' to="/ngo">NGO</Link>
                            </li>
                        )}
                        {userRole === 'restaurant' && (
                            <li className="nav-item">
                                <Link className='nav-link' to="/restaurant">Restaurant</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <button className='nav-link' onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/list">User Records</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/analytics">Analytics</Link>
                        </li>
                    </>
                )}
            </ul>
    </nav>
  );
}

export default Navbar;
