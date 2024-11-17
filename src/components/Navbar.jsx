import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#007BFF', padding: '10px 20px', color: '#fff' }}>
      <h1>Student Portal</h1>
      <nav>
        <Link to="/student-dashboard" style={{ color: '#fff', margin: '0 15px' }}>Dashboard</Link>
        <Link to="/profile" style={{ color: '#fff', margin: '0 15px' }}>Profile</Link>
        <button style={{ color: '#fff' }}>Logout</button>
      </nav>
    </div>
  );
};

export default Navbar;
