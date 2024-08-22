console.log('A2_Exercise_1')
console.log('---- ---- ----')



let book1Quantity = 25
let book2Quantity = 15
let book3Quantity = 20
let book1Price = 350
let book2Price = 250
let book3Price = 200


let book1Value = book1Quantity * book1Price
let book2Value = book2Quantity * book2Price
let book3Value = book3Quantity * book3Price
let totalInventoryValue = book1Value + book2Value + book3Value

console.log('Indian Bookstore Inventory Report')
console.log('---------------------------------')

console.log('Book 1: Mahabharata')
console.log(' - Quantity: ' , book1Quantity)
console.log(' - Price: ₹' + book1Price)
console.log(' - Value: ₹' + book1Value)
console.log('')
console.log('Book 2: Ramayana')
console.log(' - Quantity: ' , book2Quantity)
console.log(' - Price: ₹' + book2Price)
console.log(' - Value: ₹' + book2Value)
console.log('')
console.log('Book 3: Gitanjali')
console.log(' - Quantity: ' , book3Quantity)
console.log(' - Price: ₹' + book3Price)
console.log(' - Value: ₹' + book3Value)
console.log('')
console.log('Total Inventory Value: ₹' + totalInventoryValue)