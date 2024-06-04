import React from 'react';
import './ImageGallery.css';
import NavBar from './NavBar';
import ImageGallery from './ImageGallery';

const HomePage = () => {
    return (<>
        <NavBar />
        <ImageGallery />
        <div className="home-container">
            {/* <img
                src={Image}
                // alt="Background"
                className="img-fluid"
                alt='Carbon Design System'
            /> */}
            <div className="content">
                <h1>Carbon Design System</h1>
                {/* Add more content here to make the page scrollable */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque non varius justo. Fusce non justo lacus. Morbi lacinia nisl nec vehicula aliquam. Integer euismod, lorem non lacinia tincidunt, ipsum nulla cursus ligula, vitae fermentum urna turpis eu orci. Sed dapibus turpis at nulla posuere, sed pharetra lectus scelerisque. Curabitur nec odio dolor. Quisque vulputate metus ac nulla commodo, in interdum purus cursus. Curabitur ultricies dui id nunc tincidunt, at luctus elit sagittis. In vehicula justo et semper aliquam. Nulla facilisi. Integer sed arcu a leo pulvinar venenatis vel ut ex. Etiam ultrices, ipsum ut sollicitudin lacinia, sapien elit finibus lorem, non varius magna sem sit amet purus. Donec at eros consectetur, fermentum arcu et, fermentum orci.</p>
            </div>
        </div>
    </>
    );
}

export default HomePage;
