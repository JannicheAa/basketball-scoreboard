let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

let homeNumber = 0
let guestNumber = 0

//Functions for Home team

function add1PointH() {
   countHome.textContent = homeNumber += 1
}

function add2PointsH() {
    countHome.textContent = homeNumber += 2
 }

 function add3PointsH() {
    countHome.textContent = homeNumber += 3
 }

 //Functions for Guest team

 function add1PointG() {
    countGuest.textContent = guestNumber += 1
 }

 function add2PointsG() {
    countGuest.textContent = guestNumber += 2
 }

 function add3PointsG() {
    countGuest.textContent = guestNumber += 3
 }

 function reset() {
    homeNumber = 0
    guestNumber = 0
    countHome.textContent = homeNumber
    countGuest.textContent = guestNumber
 }