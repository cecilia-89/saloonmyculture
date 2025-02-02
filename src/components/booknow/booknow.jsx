import "./booknow.css";
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const BookNow = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section className="book-visit">

      <div>
        <h2 className="book-visit-title">Book a Visit Now!!</h2>
        <p>It's that easy! Simply select your preferred date and time, and our team will be ready to pamper you.</p>
      </div>

      <form className="book-visit-form">
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="Basic date time picker" />
          </DemoContainer>
        </LocalizationProvider>
        <button type="submit" className="book-visit-btn">Book Now</button>
      </form>
    </section>
  );
};

export default BookNow;
