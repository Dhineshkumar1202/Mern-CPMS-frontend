import React, { useState } from 'react';
import { signup } from '../services/authService'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData); 
      alert('Signup successful!'); 
    } catch (error) {
      console.error(error);
     
    }
  };

  
  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  };

  const inputFocusStyle = {
    borderColor: '#007BFF',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  };

  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#007BFF',
    fontWeight: 'bold',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '12px',
    textAlign: 'center',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={formTitleStyle}>Create Account</h2>

     
      
      <div>
        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your name"
          onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
      </div>

      <div>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your email"
          onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
      </div>

      <div>
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your password"
          onFocus={(e) => e.target.style.borderColor = inputFocusStyle.borderColor}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
      </div>

      <button 
        type="submit" 
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
      >
        Signup
      </button>
    </form>
  );
};

export default Signup;
