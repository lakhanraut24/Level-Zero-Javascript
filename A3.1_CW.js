console.log('A3.1_CW')
console.log('---- ---- ----')

console.log('1.1')

let age = 25
let isBirthday = true

if(isBirthday) {
  age = age+ 1
}

console.log('Current Age:',age)

console.log('---- ---- ----')

console.log('1.2')
let passengerAge = 55
let ticketPrice = 100

if (passengerAge > 60) {
  ticketPrice = ticketPrice - (ticketPrice * 0.15 )
  console.log('Ticket price for age greater than 60', ticketPrice)
}