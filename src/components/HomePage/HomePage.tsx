import React from 'react';
import NavBar from '../NavBar/NavBar';
import RoomForm from './Components/TableList/RoomForm';
import im1 from '../../assets/im1.jpeg';
import im2 from '../../assets/im2.jpeg';
import ImageGallery from './Components/ImageGallery/ImageGallery';

const HomePage: React.FC = () => {
    return (
        <>
            <div>
                <NavBar />
                <ImageGallery images={[im1, im2]} />
            </div>
            <div>
                 <RoomForm onSubmit={data => console.log("Submitted")} />
            </div>
           
        </>
    );
}

export default HomePage;
