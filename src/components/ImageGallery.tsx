import React from 'react';
import './ImageGallery.css';
import Image from '../assets/im1.jpeg';

const ImageGallery: React.FC = () => {
    return (
        <div className="image-gallery">
            <div className="main-content">
                <div className="image-card">
                    <img src={Image} className="img-fluid" alt="Carbon Design System" />
                    <div className="image-text">Carbon Design System</div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;