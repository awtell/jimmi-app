import React from 'react';
import NavBar from './NavBar';
import ImageGallery from './ImageGallery';
import im1 from '../assets/im1.jpeg';
import im2 from '../assets/im2.jpeg';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <ImageGallery images={[im1, im2]} />
        </div>
    );
}

export default HomePage;
