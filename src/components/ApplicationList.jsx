import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://my-project-backend-ssaj.vercel.app/api/applications/');
        setApplications(response.data);
      } catch (error) {
        setError('Failed to load applications.');
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Applications List</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            <p><strong>Student ID:</strong> {application.studentId}</p>
            <p><strong>Company:</strong> {application.companyName}</p>
            <p><strong>Job Title:</strong> {application.jobTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationsList;
