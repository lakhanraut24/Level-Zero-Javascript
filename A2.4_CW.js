console.log('A2.4_CW')
console.log('---- ---- ----')
console.log('Exercise 1')


console.log('---- ---- ----')


console.log('1.1')

let originalPrice = 1000
let discountPercentage = 25
let discountAmount = (originalPrice * discountPercentage) / 100

let finalPrice = originalPrice - discountAmount

console.log('Original Price:' , originalPrice)
console.log('DiscountPercentage:', discountPercentage)
console.log('Discount Amount:', discountAmount)
console.log('Final Price:' , finalPrice)

console.log('---- ---- ----')

console.log('1.2')
let itemOne = 'T-shirt'
let itemTwo = 'Jeans'
let itemThree = 'Shoes'
let itemOnePrice = 500
let itemTwoPrice = 1500
let itemThreePrice = 2000
let itemOneQuantity = 2
let itemTwoQuantity = 1
let itemThreeQuantity = 1

let totalItemOnePrice = itemOnePrice * itemOneQuantity

let totalItemTwoPrice = itemTwoPrice * itemTwoQuantity

let totalItemThreePrice = itemThreePrice * itemThreeQuantity

let totalCartPrice = totalItemOnePrice + totalItemTwoPrice + totalItemThreePrice

console.log('Item One:', itemOne)
console.log('Item Two:', itemTwo)
console.log('Item Three:', itemThree)

console.log("----------------------")

console.log('Price of', itemOne, "x" ,itemOneQuantity, ":", totalItemOnePrice)

console.log('Price of', itemTwo, "x" ,itemTwoQuantity, ":", totalItemTwoPrice);
console.log('Price of', itemThree, "x" ,itemThreeQuantity, ":", totalItemThreePrice);

console.log("----------------------")
console.log('Total Cart Price:', totalCartPrice)