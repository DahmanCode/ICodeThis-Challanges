let seats = document.querySelectorAll(".seat");


let namberOfSeat = []
let namberOfSeatSelected = []
for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * seats.length)
    let randomNumber2 = Math.floor(Math.random() * seats.length)
    namberOfSeat.push(randomNumber)
    namberOfSeatSelected.push(randomNumber2)
}


function randomSeat() {
    for (let i = 0; i < namberOfSeat.length; i++) {
        seats[namberOfSeat[i]].classList.add('booked')
        seats[namberOfSeatSelected[i]].classList.add('selected')
    }

}

seats.forEach(seat => {
    seat.addEventListener('click', selectSeat);
});

function selectSeat() {
    if (this.className.includes('booked')) {
        alert('That seat is booked');

    } else {
        this.classList.toggle("selected")
    }
}

randomSeat()
