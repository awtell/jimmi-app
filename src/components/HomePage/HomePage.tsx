import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import RoomForm from './Components/TableList/RoomForm';
import im1 from '../../assets/im1.jpeg';
import im2 from '../../assets/im2.jpeg';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import AboutUs from './Components/AboutUs/AboutUs';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import Footer from './Components/Footer/Footer';

const HomePage: React.FC = () => {
    return (
        <>
            <div>
                <NavBar />
                <ImageGallery images={[im1, im2]} />
        
                <WhatWeDo />
           
                <RoomForm onSubmit={data => console.log("Submitted")} />
     
                <AboutUs />
       
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
