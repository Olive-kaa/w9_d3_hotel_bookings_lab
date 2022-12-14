import { useState } from "react";
import { postBookings } from "./BookingService";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        emailAddress: "",
        checkedIn: false
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData); // {} gets filled with formData
        // console.log(e)
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    } 

    const onSubmit = (e) => {
        e.preventDefault();
        postBookings(formData).then((data) => {
            addBooking(data);
        })

        setFormData({
            name: "",
            emailAddress: ""
        })
    }

    return(
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name: </label>
                <input onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} required/>
            </div>
            <div className="formWrap">
                <label htmlFor="emailAddress">Email: </label>
                <input onChange={onChange}
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress} required/>
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
    )
}

export default BookingForm;