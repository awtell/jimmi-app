import React from 'react';
import './RoomForm.css';
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

  return (
    <div className="room-form">
      <div className="capacity">{formData.capacity}</div>
      <div className="right-side">
        <div className="number">{formData.number}</div>
        <div className="price">{formData.pricePerHour}</div>
      </div>
    </div>
  );
};

export default RoomForm;