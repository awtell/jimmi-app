import React, { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import RoomForm from './Components/TableList/RoomForm';
import im1 from '../../assets/im1.jpeg';
import im2 from '../../assets/im2.jpeg';
import ImageGallery from './Components/ImageGallery/ImageGallery';

const HomePage: React.FC = () => {

    const roomFormRef = useRef<HTMLDivElement>(null);

    const scrollToRoomForm = () => {
        console.log("Scrolling to room form");
        roomFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div>
                <NavBar onPressItem={(item) => scrollToRoomForm()} />
                <ImageGallery images={[im1, im2]} />
            </div>
            <div>
                 <RoomForm
                    ref={roomFormRef}
                  onSubmit={data => console.log("Submitted")} />
            </div>
           
        </>
    );
}

export default HomePage;
