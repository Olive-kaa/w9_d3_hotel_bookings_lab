use bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Johnny Bob",
        emailAddress: "johnnybob@gmail.com",
        checkedIn: false
    },
    {
        name: "Janett PolarBear",
        emailAddress: "polarbear@polarbear.com",
        checkedIn: false
    }
]);