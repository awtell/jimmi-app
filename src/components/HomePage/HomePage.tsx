import React, { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import RoomForm from './Components/TableList/RoomForm';
import im1 from '../../assets/im1.jpeg';
import im2 from '../../assets/im2.jpeg';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import AboutUs from './Components/AboutUs/AboutUs';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const HomePage: React.FC = () => {

    const roomFormRef = useRef<HTMLDivElement>(null);

    const scrollToRoomForm = () => {
        console.log("Scrolling to room form");
        roomFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div>
                <NavBar />
                <ImageGallery images={[im1, im2]} />
            </div>
            <div>
                <WhatWeDo />
            </div>
            <div>
                <RoomForm
                    ref={roomFormRef}
                    onSubmit={data => console.log("Submitted")} />
            </div>
            <div>
                <AboutUs />
            </div>
        </>
    );
}

export default HomePage;
