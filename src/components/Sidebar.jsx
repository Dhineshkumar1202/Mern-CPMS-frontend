import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f4f4f4',
      padding: '20px',
      height: '100vh',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>Student Menu</h3>
      <ul>
        <li><Link to="/student-dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
