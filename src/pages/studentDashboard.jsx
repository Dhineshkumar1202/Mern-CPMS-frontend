import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Card from '../components/Card';

const StudentDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <Card title="Submit Application">
                <ApplicationForm />
            </Card>
        </div>
    );
};

export default StudentDashboard;
