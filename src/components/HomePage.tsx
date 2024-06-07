import React from 'react';
import NavBar from './NavBar';
import ImageGallery from './ImageGallery';
import RoomForm from './RoomForm';
import im1 from '../assets/im1.jpeg';
import im2 from '../assets/im2.jpeg';

const HomePage: React.FC = () => {
    return (
        <>
            <div>
                <NavBar />
                <ImageGallery images={[im1, im2]} />
            </div>
            <div> <RoomForm onSubmit={data => console.log("Submitted")} />
            </div>
        </>
    );
}

export default HomePage;
