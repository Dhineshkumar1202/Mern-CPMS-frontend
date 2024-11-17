import React from 'react';
import Navbar from './Navbar';  // Import Navbar
import Sidebar from './Sidebar'; // Import Sidebar
import { Outlet } from 'react-router-dom'; // This is for rendering nested routes (like student dashboard)

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Navbar />

        {/* The main content area, where pages will be rendered */}
        <div style={{ padding: '20px' }}>
          <Outlet /> {/* This renders the current page based on routing */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
