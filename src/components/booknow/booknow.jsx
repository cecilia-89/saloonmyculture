import "./booknow.css";
import { useState, useRef } from 'react';
import Lottie from "react-lottie";
import spinner from '../../lotties/spinner-6 (2).json'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import success from '/images/success(1).svg'
import error from '/images/error.svg'


const BookNow = () => {
  const formRef = useRef(null);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showFailurePopup, setShowFailurePopup] = useState(false)
  const url = 'https://salonmycultureapi.onrender.com/api/book-appointment'
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata =  new FormData(e.target)
    const data = {...Object.fromEntries(formdata.entries()), appointment: value.$d}


    try {
      setLoading(true)

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    response.ok && setShowSuccessPopup(true)
    setTimeout(() => setShowSuccessPopup(false), 3000);

    } catch (error) {
      setShowErrorPopup(true)
      setTimeout(() => setShowFailurePopup(false), 3000);

    } finally {
      setLoading(false)
      setValue(null)
      formRef.current.reset()
    }

  }


   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: spinner,
    };


  return (
    <section className="book-visit" id="booknow">

      <div>
        <h2 className="book-visit-title">Book a Visit Now!!</h2>
        <p>It's that easy! Simply select your preferred date and time, and our team will be ready to pamper you.</p>
      </div>

      <form ref={formRef} className="book-visit-form" onSubmit={handleSubmit}>
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
        <button type="submit" disabled={!value} className="book-visit-btn">
          {!loading? 'Book Now' : <Lottie options={defaultOptions} height={20} width={20}/>}
        </button>
      </form>

      {showSuccessPopup&& <Popup status={{
        image: success, 
        title: "Appointment booked successfully!",
        message: "Kindly check your email for confirmation."
        }}/>
      }

      {showFailurePopup&& <Popup status={{
        image: error, 
        title: "Could not book appointment!",
        message: "Please check your internet connectivity and try again."
        }}/>}
    </section>
  );
};



const Popup = ({ status }) => {
  return (
    <div style={{
      position: 'fixed', 
      background: "rgba(0, 0, 0, 0.4)",
      inset: 0,
      height: '100%', 
      display: 'flex', 
      zIndex: 10,
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
        <div style={{
          maxWidth: '300px', 
          borderRadius: '10px', 
          background: 'white', 
          padding: '20px 10px',
          display:"flex",
          textAlign: 'center',
          gap: '10px',
          flexDirection: "column",
          alignItems: "center"
          }}>
          <img style={{width: "50px"}} src={status.image} alt=""/>
          <h3 style={{fontWeight: 'bold'}}>{status.title}</h3>
          <p style={{fontSize: '14px'}}>{status.message}</p>
        </div>
    </div>
  );
};

export default BookNow;
