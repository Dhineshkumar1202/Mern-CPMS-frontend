import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import Sidebar from '../components/Sidebar';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const AdminDashboard = () => {
    const navigate = useNavigate();  

    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    
    useEffect(() => {
        if (!token || role !== 'admin') {
            navigate(role === 'student' ? '/student-dashboard' : '/login');
        }
    }, [token, role, navigate]);

    const barChartData = {
        labels: ['Drive 1', 'Drive 2', 'Drive 3', 'Drive 4'],
        datasets: [
            {
                label: 'Students Placed',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Interviews Scheduled',
                data: [15, 10, 20, 12],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Placement Drive Statistics',
            },
        },
    };

    const cardData = [
        { title: 'Total Students', value: '120', color: '#4CAF50', icon: '👨‍🎓' },
        { title: 'Students Placed', value: '85', color: '#2196F3', icon: '✅' },
        { title: 'Ongoing Drives', value: '4', color: '#FF9800', icon: '🚀' },
        { title: 'Interviews Scheduled', value: '25', color: '#9C27B0', icon: '📅' },
    ];

    const cardStyle = {
        borderRadius: '8px',
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: '20px', backgroundColor: '#f4f6f9' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Admin Dashboard</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    {cardData.map((card, index) => (
                        <div key={index} style={{ ...cardStyle, backgroundColor: card.color }}>
                            <span style={{ fontSize: '40px' }}>{card.icon}</span>
                            <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{card.title}</h2>
                            <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{card.value}</p>
                        </div>
                    ))}
                </div>

                <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Placement Statistics</h2>
                    <div style={{ height: '300px' }}>
                        <Bar data={barChartData} options={chartOptions} />
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Interview Schedule Overview</h2>
                    <div style={{ height: '300px' }}>
                        <Line data={lineChartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
