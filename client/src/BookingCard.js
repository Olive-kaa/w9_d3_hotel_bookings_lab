import { deleteBooking } from "./BookingService";
import { updateBooking } from "./BookingService";

const BookingCard = ({booking, removeBooking, updateCheckIn}) => { // 'removeBooking' links to function in app
    
    const handleDelete = (() => {
        deleteBooking(booking._id).then(()=> {
            removeBooking(booking._id);
        })   
    })

    const handleCheckIn = () => {
        updateCheckIn(booking._id)
        updateBooking(booking._id, booking)

    }
    
    return (
        <>
        <h1>{booking.name}</h1>
        <p>Email address: {booking.emailAddress}</p>
        <button onClick={handleDelete}>🗑</button>
        <p>Checked In Status: {booking.checkedIn.toString()}</p>
        <button onClick={handleCheckIn}>Update Checked In Status</button>
        </>
    )
}

export default BookingCard;