import "./booknow.css";
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const BookNow = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const url = 'http://localhost:3300/api/book-appointment'
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata =  new FormData(e.target)
    const data = {...Object.fromEntries(formdata.entries()), appointment: value.$d}


    try {
      setLoading(true)

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      console.log(res)

    } catch (error) {
      setError(error)

    } finally {
      setLoading(false)
    }

  }

  return (
    <section className="book-visit">

      <div>
        <h2 className="book-visit-title">Book a Visit Now!!</h2>
        <p>It's that easy! Simply select your preferred date and time, and our team will be ready to pamper you.</p>
      </div>

      <form className="book-visit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="Pick appointment date" value={value} onChange={(newValue) => setValue(newValue)}/>
          </DemoContainer>
        </LocalizationProvider>
        <button type="submit" disabled={!value} className="book-visit-btn">Book Now</button>
      </form>
    </section>
  );
};

export default BookNow;
