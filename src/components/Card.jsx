import React from 'react';

const Card = ({ title, children }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 m-4">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Card;
