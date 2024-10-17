import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Card from '../components/Card';

const StudentDashboard = () => {
    
    const dashboardStyle = {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4f6f9',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    };

    
    const cardStyle = {
        maxWidth: '600px',
        width: '100%',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px',
    };

   
    const formContainerStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={dashboardStyle}>
            <h1 style={headingStyle}>Student Dashboard</h1>

           
            <div style={cardStyle}>
                <h2 style={{ fontSize: '18px', marginBottom: '15px', fontWeight: '500' }}>Submit Application</h2>
                <div style={formContainerStyle}>
                    <ApplicationForm />
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
