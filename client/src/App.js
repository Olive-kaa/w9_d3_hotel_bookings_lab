import {useState, useEffect} from 'react';
import './App.css';

import { getBookings } from './BookingService';
import BookingForm from "./BookingForm";
import BookingGrid from './BookingGrid';

function App() {
  const [hotelBookings, setHotelBookings] = useState([]);

  useEffect( () => {
    getBookings()
    .then((allBookings) => {
      setHotelBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    const updatedList = hotelBookings.map(b => b);
    updatedList.push(booking);
    setHotelBookings(updatedList);
  }

  const removeBooking = (id) => {
    const updatedList = hotelBookings.map(b => b);
    const indexToDelete = updatedList.map(b => b._id).indexOf(id);
    updatedList.splice(indexToDelete, 1)
    setHotelBookings(updatedList);
  }

  const updateCheckIn = (id) => {
    const updatedList = hotelBookings.map(b => b);
    const indexToUpdate = updatedList.map(b => b._id).indexOf(id);
    updatedList[indexToUpdate].checkedIn = updatedList[indexToUpdate].checkedIn ? false : true;
    setHotelBookings(updatedList);
  }


  return (
    <>
     <BookingForm addBooking = {addBooking} />
     <BookingGrid bookings = {hotelBookings} removeBooking = {removeBooking} updateCheckIn={updateCheckIn}/>
    </>
  );
}

export default App;
