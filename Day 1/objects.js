const project = {
  name: "0x120 Web3 Challenge",
  description: "A 120-day journey to Web3 mastery",
  days: 120,
};
console.log(project.name) // #0x120 Web3 Challenge
console.log(project.description) // A 120-day journey to Web3 mastery
console.log(project.days) // 120
project.secret = "Hidden Gem";
//Objects are stored in key-value pairs 
// you can access object properties using dot notation or bracket notation
// you can dynamically add one or more properties to an object

const wallet = {
  address: "0x1234567890abcdef",
  balance: 0,
};

wallet.network = "Ethereum";
console.log(wallet.address); // 0x1234567890abcdef
console.log(wallet.balance); // 0
console.log(wallet.network); // Ethereum