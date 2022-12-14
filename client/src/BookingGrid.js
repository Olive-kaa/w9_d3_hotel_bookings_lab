import BookingCard from "./BookingCard";

const BookingGrid = ({bookings, removeBooking, updateCheckIn}) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard booking={booking} removeBooking={removeBooking} updateCheckIn = {updateCheckIn} key={booking._id} />
    })

    return (
        <>
            {bookingsList}
        </>
    )   
}


export default BookingGrid;