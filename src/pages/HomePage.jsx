import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the College Placement System</h1>
      <p style={styles.text}>Get access to your dashboard by logging in.</p>
      <div style={styles.linkContainer}>
        <Link to="/login" style={styles.button}>Login</Link>
        <Link to="/signup" style={styles.button}>Sign Up</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#555',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  // Responsive Design for smaller screens
  '@media (max-width: 768px)': {
    container: {
      padding: '30px',
    },
    header: {
      fontSize: '2rem',
    },
    text: {
      fontSize: '1rem',
    },
    button: {
      padding: '10px 25px',
      fontSize: '1rem',
    },
  },
};

export default HomePage;
