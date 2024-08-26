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
} else {
  console.log('Ticket price for age less than or equal to 60', ticketPrice)
}

console.log('---- ---- ----')

console.log('1.3')
let num1 = 10
let num2 = 20
let num3 = 15

if (num3 > num1 && num3 > num2){
  console.log('The third number', num3, 'is the largest')
} else {
  console.log('The third number', num3, 'is not the largest')
}

console.log('---- ---- ----')

console.log('1.3')


let items1 = 'Saree'
let items2 = 'Kurta'
let items3 = 'Jeans'
let items4 = 'Shoes'

let price1 = 500
let price2 = 300
let price3 = 900
let price4 = 400

let totalCartPrice = price1 + price2 + price3 + price4

let deliveryChargeStatus = ""
if (totalCartPrice < 1999) {
  let deliveryCharge = 99
  totalCartPrice = totalCartPrice + deliveryCharge
  deliveryChargeStatus = 'Optional delivery charge' + deliveryCharge
} else {
  deliveryChargeStatus = 'No delivery charge'
}

console.log('Shopping Cart:')
console.log('-----------------------------')

console.log('Item:', items1, 'Price:', price1)
console.log('Item:', items2, 'Price:', price2)
console.log('Item:', items3, 'Price:', price3)
console.log('Item:', items4, 'Price:', price4)

console.log('-----------------------------')

console.log('Delivery Charges:', deliveryChargeStatus)

console.log('-----------------------------')

console.log('Total Cart Price:', totalCartPrice)










