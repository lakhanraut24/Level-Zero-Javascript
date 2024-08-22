console.log('A2.2_HW_2');
console.log('---- ---- ----');
console.log('Exercise 1');
console.log('---- ---- ----');

console.log('1.1');

let rajeshRating = 8.2
let amitRating = 7.9
let isRajeshHigherRated = rajeshRating > amitRating

console.log('Is Rajesh higher rated than Amit?', isRajeshHigherRated)

console.log('---- ---- ----')

console.log('1.2')

let rajeshCollection = 250
let amitCollection = 350
let isRajeshHigherCollection = rajeshCollection > amitCollection

console.log('Does Rajesh have a higher superhit movie collection than Amit?' , isRajeshHigherCollection)

console.log('---- ---- ----')

console.log('1.3')

let rajeshIncome = 50
let amitIncome = 80
let isRajeshLessIncome = rajeshIncome < amitIncome

console.log('Does Rajesh have a lower yearly income than Amit?' ,isRajeshLessIncome)

console.log('---- ---- ----')

console.log('1.4')

let rajeshAds = 10
let amitAds = 8
let isRajeshMoreAds = rajeshAds > amitAds

console.log('Has Rajesh done more ads than Amit?' ,isRajeshMoreAds)

console.log('---- ---- ----')

console.log('1.5')

let rajeshFans = 2000000
let amitFans = 3500000
let isRajeshMoreFans = rajeshFans > amitFans

console.log('Does Rajesh have more fans than Amit?' ,isRajeshMoreFans)

console.log('---- ---- ----')


console.log('Exercise 2')
console.log('---- ---- ----')

console.log('2.1')

let tShirtPrice = 799
let jeansPrice = 599
let budget = 1500

let totalPriceClothing = tShirtPrice + jeansPrice
let areBothUnderBudget = totalPriceClothing <= budget

console.log('Can I buy both a T-shirt and Jeans within my budget?' ,areBothUnderBudget)

console.log('---- ---- ----')

console.log('2.2')

let mathScore = 85
let englishScore = 92
let physicsScore = 78
let minimumAverage = 85

let averageScore = (mathScore + englishScore + physicsScore) / 3
let isQualified = averageScore >= minimumAverage

console.log('Am I qualified for the olympiad?' , isQualified)

console.log('---- ---- ----')

console.log('2.3')

let productQuantity = 60
let isDivisibleBy5 = productQuantity % 5 === 0
let isDivisibleBy10 = productQuantity % 10 === 0

console.log('Can the product quantity be sold in batches of 5?', isDivisibleBy5)
console.log('Can the product quantity be sold in batches of 10?', isDivisibleBy10)