import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [studentId, setStudentId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applications/', { studentId, companyName, jobTitle });
      if (response.status === 201) {
        alert('Application submitted successfully');
        setStudentId('');
        setCompanyName('');
        setJobTitle('');
      }
    } catch (error) {
      setError('Failed to submit the application. Please try again later.');
    }
  };

 
  const formStyles = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyles = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  };

  const errorStyles = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  };

  return (
    <div style={{ padding: '20px' }}>
      {error && <p style={errorStyles}>{error}</p>}
      <form onSubmit={handleSubmit} style={formStyles}>
        <div>
          <label style={{ fontWeight: 'bold' }}>Student ID:</label>
          <input 
            type="text" 
            value={studentId} 
            onChange={(e) => setStudentId(e.target.value)} 
            required 
            style={inputStyles}
          />
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>Company Name:</label>
          <input 
            type="text" 
            value={companyName} 
            onChange={(e) => setCompanyName(e.target.value)} 
            required 
            style={inputStyles}
          />
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>Job Title:</label>
          <input 
            type="text" 
            value={jobTitle} 
            onChange={(e) => setJobTitle(e.target.value)} 
            required 
            style={inputStyles}
          />
        </div>
        <button type="submit" style={buttonStyles}>Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
