import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white'
      }}
    >
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
            Signup
          </Link>
        </li>
        <li>
          <Link to="/student-dashboard" style={{ color: 'white', textDecoration: 'none' }}>
            Student Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard" style={{ color: 'white', textDecoration: 'none' }}>
            Admin Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
