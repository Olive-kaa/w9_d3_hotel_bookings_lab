import BookingCard from "./BookingCard";

const BookingGrid = ({bookings, removeBooking, updateCheckIn}) => {
    const bookingsList = bookings.map((booking, index) => {
        return <BookingCard booking={booking} removeBooking={removeBooking} updateCheckIn = {updateCheckIn} key={index} />
    })

    return (
        <>
            {bookingsList}
        </>
    )   
}


export default BookingGrid;