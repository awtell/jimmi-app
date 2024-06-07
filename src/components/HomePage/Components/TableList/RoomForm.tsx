import React from 'react';
import './RoomForm.css';
import im1 from '../../../../assets/im1.jpeg';

interface RoomFormProps {
  onSubmit: (data: RoomFormData) => void;
}

interface RoomFormData {
  capacity: string;
  number: string;
  pricePerHour: string;
}

const RoomForm: React.FC<RoomFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<RoomFormData>({
    capacity: '123',
    number: '51',
    pricePerHour: '$9',
  });

  const handleBooking = () => {
    console.log('Clicked!');
  };

  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div id='tables' className="room-form-container">
    <h2 className="available-seats-title">Available Tables</h2>
    <h3 className="available-seats-subtitle">Select a table to book</h3>
    <div className="room-cards-container">
      <div className="room-card" onClick={handleClick}>
        <div className="image-container">
          <img src={im1} alt="Room" className="room-image" />
          <div className="overlay">
            <div className="overlay-text">
              <div className="room-number">Table {formData.number}</div>
              <div className="room-capacity">Capacity: {formData.capacity}</div>
              <div className="room-price">{formData.pricePerHour} per hour</div>
            </div>
          </div>
        </div>
        <button className="book-button" onClick={handleBooking}>Book Now</button>
      </div>
      <div className="room-card" onClick={handleClick}>
        <div className="image-container">
          <img src={im1} alt="Room" className="room-image" />
          <div className="overlay">
            <div className="overlay-text">
              <div className="room-number">Table {formData.number}</div>
              <div className="room-capacity">Capacity: {formData.capacity}</div>
              <div className="room-price">{formData.pricePerHour} per hour</div>
            </div>
          </div>
        </div>
        <button className="book-button" onClick={handleBooking}>Book Now</button>
      </div>
      <div className="room-card" onClick={handleClick}>
        <div className="image-container">
          <img src={im1} alt="Room" className="room-image" />
          <div className="overlay">
            <div className="overlay-text">
              <div className="room-number">Table {formData.number}</div>
              <div className="room-capacity">Capacity: {formData.capacity}</div>
              <div className="room-price">{formData.pricePerHour} per hour</div>
            </div>
          </div>
        </div>
        <button className="book-button" onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  </div>
);
};

export default RoomForm;
