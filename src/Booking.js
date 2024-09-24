import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Booking = () => {
  const [date, setDate] = useState('');
  const [showTime, setShowTime] = useState('');
  const [seats, setSeats] = useState(1);
  const { movieid } = useParams();
  const navigate = useNavigate();
  const handleBooking = () => {
    alert(`Booking confirmed!\nDate: ${date}\nShow Time: ${showTime}\nSeats: ${seats}`);
    navigate(`/bookwithqr/${movieid}`)
  };
  console.log(movieid)
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', width: '300px' }}>
      {/* Navbar */}
      <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        Navbar
      </div>

      {/* Date Picker */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Show Timings */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Available Show Timings:
          <select
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="">Select Time</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </select>
        </label>
      </div>

      {/* Seat Selection */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Choose Number of Seats:
          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            min="1"
            max="10"
            style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
          />
        </label>
      </div>

      {/* Book Button */}
      <div>
        <button
          onClick={handleBooking}
          style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Booking;
