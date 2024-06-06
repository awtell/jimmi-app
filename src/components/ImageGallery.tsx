import React from 'react';
import './ImageGallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RoomForm from './RoomForm';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel">
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={image} className="img-fluid" alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <RoomForm onSubmit={data => console.log(data)} />

        </div>
    );
};

export default ImageGallery;
