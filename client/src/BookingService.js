const baseURL ='http://localhost:9000/api/bookings/';

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBookings = (uploadData) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(uploadData),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }) 

}

export const updateBooking = (id, updateData) => {
    const copiedBooking = {...updateData};
    copiedBooking.checkedIn = copiedBooking.checkedIn ? false : true;
    delete copiedBooking._id;
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(copiedBooking),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

