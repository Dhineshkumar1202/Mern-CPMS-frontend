import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaChartBar, FaCog } from 'react-icons/fa'; 

const Sidebar = () => {
  
  const sidebarStyle = {
    width: '200px',
    height: '50vh',
    backgroundColor: '#1F2937',
    color: '#FFFFFF',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '40px',
  };

  const menuListStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    width: '100%',
  };

  const menuItemStyle = {
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: '#D1D5DB', 
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#374151', 
    color: '#FFFFFF',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={titleStyle}>Admin Dashboard</h2>
      <ul style={menuListStyle}>
        <li style={menuItemStyle}>
          <Link
            to="/admin/dashboard"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <FaTachometerAlt size={20} style={iconStyle} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link
            to="/admin/ApplicationsList"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <FaUsers size={20} style={iconStyle} />
            <span>Application List</span>
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link
            to="/admin/reports"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <FaChartBar size={20} style={iconStyle} />
            <span>Reports</span>
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link
            to="/admin/settings"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <FaCog size={20} style={iconStyle} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
