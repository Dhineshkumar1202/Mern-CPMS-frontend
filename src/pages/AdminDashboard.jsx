import React from 'react';
import Sidebar from '../components/Sidebar';



const AdminDashboard = () => {
    return (
        <div className="flex">
        <div className="flex-grow p-6 bg-gray-100">
        <Sidebar/>
        </div>
        </div>
    );
};

export default AdminDashboard;
