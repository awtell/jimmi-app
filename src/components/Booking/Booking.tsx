// src/components/Booking.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Booking.css';

const Booking = () => {
    const id = 1;
    useEffect(() => {
        // Your useEffect code here
    }, [id]);

    return (
        <>
            <div style={{ color: 'black' }}>
                <nav>
                    <ol className="breadcrumb">
                        {/* Update the Home link */}
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
                <h2>Booking Details</h2>
                {/* Display booking details here */}
            </div>
        </>
    );
};

export default Booking;
