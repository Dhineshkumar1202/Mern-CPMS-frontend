import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/student-dashboard'); 
    } catch (error) {
      console.error(error);
    }
  };

  // Inline CSS styles
  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    width: '100%',
    padding: '6px',
    marginBottom: '6px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', 
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '12px',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
      
 
      
      <div>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          placeholder="Enter your password"
        />
      </div>
      <button 
        type="submit" 
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
