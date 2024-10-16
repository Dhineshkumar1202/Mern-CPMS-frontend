import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        bottom: '0',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <p>&copy; {new Date().getFullYear()} College Placement Management System</p>
      </div>
      <div>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          LinkedIn
        </a>
        {' | '}
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Twitter
        </a>
        {' | '}
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};

export default Footer;
