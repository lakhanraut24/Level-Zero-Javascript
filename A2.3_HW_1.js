console.log('A2.3_HW_1')
console.log('---- ---- ----')


console.log('Exercise 1')
console.log('---- ---- ----')

console.log('1.1')
let subject1Marks = 85
let subject2Marks = 92
let subject3Marks = 78

let averageMarks = (subject1Marks + subject2Marks + subject3Marks) / 3
let hasDramaSchoolEndorsement = true

let isUserSelected = averageMarks >= 80 || hasDramaSchoolEndorsement
console.log('Is the user selected?', isUserSelected)

console.log('---- ---- ----')

console.log('1.2')
let foodBill = 1500
let hasZomatoGoldMembership = true

let qualifiesForDiscountedBill = foodBill < 2000 || hasZomatoGoldMembership
console.log('Does the user qualify to pay the food bill at a discounted price?', qualifiesForDiscountedBill)

console.log('---- ---- ----')

console.log('1.3')
let piggybank1Balance = 2000
let piggybank2Balance = 1500
let penCost = 50
let notebookCost = 100
let pencilCost = 20

let totalCost = penCost + notebookCost + pencilCost
let canWeAffordStationery = totalCost <= piggybank1Balance || totalCost <= piggybank2Balance
console.log('Can you afford the purchase?', canWeAffordStationery)

console.log('---- ---- ----')


console.log('Exercise 2')
console.log('---- ---- ----')

console.log('2.1')
let personAge = 25
let isAgeInRange = personAge >= 18 && personAge <= 60
console.log('Is the person\'s age between 18 and 60?', isAgeInRange)

console.log('---- ---- ----')


console.log('Exercise 3')
console.log('---- ---- ----')

console.log('3.1')
let tvScreenSize = 55
let tvBrand = 'Sony'
let tvPrice = 50000

let meetsCriteria = tvScreenSize >= 50 && (tvBrand === 'Sony' || tvBrand === 'Samsung') && tvPrice <= 60000
console.log('Does the TV meet the criteria?', meetsCriteria)

console.log('---- ---- ----')

console.log('3.2')
let watchReleaseYear = 2022
let watchSize = 'L'
let watchBrand = 'Apple'

let isDiscountApplicable = watchReleaseYear === 2021 && (watchSize === 'M' || watchSize === 'L') && (watchBrand === 'Apple' || watchBrand === 'Samsung')
console.log('Is the discount applicable?', isDiscountApplicable)