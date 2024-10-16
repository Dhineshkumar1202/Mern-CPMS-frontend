import React from 'react';

const Button = ({ onClick, children, type = 'button' }) => {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
            {children}
        </button>
    );
};

export default Button;
