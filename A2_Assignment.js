let movie1TicketsSold = 150;
let movie2TicketsSold = 120;
let movie3TicketsSold = 80;
let movie1TicketPrice = 250;
let movie2TicketPrice = 180;
let movie3TicketPrice = 150;

// Calculate revenues for each movie
let movie1Revenue = movie1TicketsSold * movie1TicketPrice;
let movie2Revenue = movie2TicketsSold * movie2TicketPrice;
let movie3Revenue = movie3TicketsSold * movie3TicketPrice;

// Check if each movie is a superhit (revenue > ₹5000)
let isMovie1Superhit = movie1Revenue > 5000;
let isMovie2Superhit = movie2Revenue > 5000;
let isMovie3Superhit = movie3Revenue > 5000;

// Calculate total revenue
let totalRevenue = movie1Revenue + movie2Revenue + movie3Revenue;

// Print the ticket sales report
console.log('Indian Movie Ticket Sales Report ');

console.log('-------------------------------');

console.log('Movie 1: Dilwale Dulhania Le Jayenge');
console.log('- Tickets Sold: ' + movie1TicketsSold);
console.log('- Ticket Price: ₹' + movie1TicketPrice);
console.log('- Revenue: ₹' + movie1Revenue);
console.log('Superhit: ' + isMovie1Superhit ,'\n');

console.log('Movie 2: Kabhi Khushi Kabhie Gham');
console.log('- Tickets Sold: ' + movie2TicketsSold);
console.log('- Ticket Price: ₹' + movie2TicketPrice);
console.log('- Revenue: ₹' + movie2Revenue);
console.log('Superhit: ' + isMovie2Superhit ,'\n');

console.log('Movie 3: 3 Idiots');
console.log('- Tickets Sold: ' + movie3TicketsSold);
console.log('- Ticket Price: ₹' + movie3TicketPrice);
console.log('- Revenue: ₹' + movie3Revenue);
console.log('Superhit: ' + isMovie3Superhit ,'\n');

console.log('Total Revenue: ₹' + totalRevenue);