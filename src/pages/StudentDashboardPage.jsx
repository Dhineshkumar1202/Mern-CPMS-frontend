import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if no token
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch('https://my-project-backend-ssaj.vercel.app/api/protected/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        console.error('Error fetching user data', err);
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome, {user.name}!</h1>
      <p style={styles.text}>Email: {user.email}</p>
      <p style={styles.text}>Role: {user.role}</p>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }}
        style={styles.button}
      >
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  loading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default StudentDashboard;
