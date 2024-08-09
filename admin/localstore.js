// Your bookings array
let bookings = [
    {booking_id: '001', uname: 'bipin', date: '2020-01-01', time: '10:00', payment: 'success', status: 'confirmed' },
    {booking_id: '002', uname: 'mathya', date: '2020-01-01', time: '10:00', payment: 'success', status: 'confirmed' },
    {booking_id: '003', uname: 'duwal', date: '2020-01-01', time: '10:00', payment: 'success', status: 'confirmed' },
    {booking_id: '004', uname: 'piyush', date: '2020-01-01', time: '10:00', payment: 'success', status: 'confirmed' },
    {booking_id: '005', uname: 'sanjeep', date: '2020-01-01', time: '11:00', payment: 'success', status: 'confirmed' }
];

// Convert bookings array to JSON string
localStorage.setItem('bookings', JSON.stringify(bookings));
// localStorage.clear();

// Log success message to the console
console.log("Success");

// Optionally, update the document content
document.body.innerHTML = "Success";
