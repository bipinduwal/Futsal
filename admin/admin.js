// sidebar
let menu = document.getElementById("menu")
let sidebar = document.getElementById("sidebar")
let sidebar_status = false
const hideshowsidebar = () => {
    if (sidebar_status == false) {
        sidebar.style.display = "none"
        sidebar_status = true
    }
    else {
        sidebar.style.display = "flex"
        sidebar_status = false
    }
}
menu.addEventListener("click", hideshowsidebar)
// 
// fetching from local storega
// Retrieve and parse the bookings data from localStorage
let data = JSON.parse(localStorage.getItem("bookings"));
let unit_data = data.map((item) => {
    return {
        "booking_id": item.booking_id,
        "name": item.uname,
        "bookingDate" : item.datetime,
        "playDate": item.date,
        "playTime": item.time,
        "payment": item.payment,
        "status": item.status
    }
})
console.log(unit_data)
// Check if data exists and is an array
if (Array.isArray(unit_data)) {
    let total = unit_data.length;
    document.getElementById('total_booking').innerHTML = total
} else {
    document.getElementById('total_booking').innerHTML = "0"

}


let tableBody = document.querySelector('tbody'); // Assuming you're adding to an existing <tbody>

unit_data.forEach(booking => {
    let row = `
    <tr class="hover:bg-gray-100">
        <td class="py-2 px-4">#${booking.booking_id}</td>
        <td class="py-2 px-4">${booking.name}</td>
        <td class="py-2 px-4">${booking.booking_date}</td>
        <td class="py-2 px-4">${booking.playDate}</td>
        <td class="py-2 px-4">${booking.playTime}</td>
        <td class="py-2 px-4 text-green-600">${booking.payment}</td>
        <td class="py-2 px-4 text-green-600">${booking.status}</td>
    </tr>
    `;
    tableBody.innerHTML += row;
});


// 
//home team
    document.getElementById("home_team").addEventListener("click",() => {
        window.location.href = "home_team.html"
    })
//