import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const RoomForm = React.forwardRef<HTMLDivElement, RoomFormProps>((props, ref) => {
  const navigate = useNavigate();

  const [formData] = React.useState<RoomFormData>({
    capacity: '123',
    number: '51',
    pricePerHour: '$9',
  });

  const handleBooking = () => {
    console.log('Clicked!');
    props.onSubmit(formData);
    navigate('/booking'); // Navigate to the Booking page
  };

  return (
    <section id="tables" className="room-form-container">
      <div className="container">
        <div className="section-title">
          <h2>Available Tables</h2>
          <p>Book Your Table Now</p>
        </div>
        <div className="row">
          <div className="room-cards-container">
            {[...Array(5)].map((_, index) => (
              <div className="room-card" key={index} onClick={handleBooking}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default RoomForm;