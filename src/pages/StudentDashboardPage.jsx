import React, { useEffect, useState } from 'react';
import Card from '../components/Card';  // Import Card component
import Button from '../components/button';  // Import Button component

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if no token
    }

    // Fetching user data
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://my-project-backend-5you.vercel.app/api/protected/me', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        console.error('Error fetching user data', err);
      }
    };

    // Fetching application data
    const fetchApplications = async () => {
      try {
        const response = await fetch('https://my-project-backend-5you.vercel.app/api/applications', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        setApplications(data.applications);
      } catch (err) {
        console.error('Error fetching application data', err);
      }
    };

    // Fetching interview schedule data
    const fetchInterviews = async () => {
      try {
        const response = await fetch('https://my-project-backend-5you.vercel.app/api/interviews', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await response.json();
        setInterviews(data.interviews);
      } catch (err) {
        console.error('Error fetching interview data', err);
      }
    };

    fetchUserData();
    fetchApplications();
    fetchInterviews();
  }, []);

  if (!user || !applications || !interviews) return <div style={styles.loading}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome, {user.name}!</h1>

      <div style={styles.grid}>
        {/* Application Status Card */}
        <Card title="Your Application Status">
          <ul style={styles.list}>
            {applications.map((app, index) => (
              <li key={index} style={styles.listItem}>
                <strong>{app.company}</strong>: {app.status}
              </li>
            ))}
          </ul>
        </Card>

        {/* Interview Schedule Card */}
        <Card title="Upcoming Interviews">
          <ul style={styles.list}>
            {interviews.map((interview, index) => (
              <li key={index} style={styles.listItem}>
                <strong>{interview.company}</strong> at {interview.time} ({interview.format})
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Placement Drive Participation Card */}
      <Card title="Placement Drives">
        <p>You are participating in 3 upcoming placement drives.</p>
        <Button onClick={() => window.location.href = '/placement-drives'}>View Details</Button>
      </Card>

      {/* Logout Button */}
      <div style={styles.logoutContainer}>
        <Button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }}
          style={styles.logoutButton}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    maxWidth: '1200px',
    margin: 'auto',
    borderRadius: '8px',
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  listItem: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#555',
  },
  loading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '20px',
    color: '#007bff',
  },
  logoutContainer: {
    marginTop: '40px',
    textAlign: 'center',
  },
  logoutButton: {
    padding: '12px 24px',
    fontSize: '1.2rem',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default StudentDashboard;
