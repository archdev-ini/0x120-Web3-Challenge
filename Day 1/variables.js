const challenge = "#0x120";
let progress = 1;

console.log(challenge, progress); // #0x120 1
progress += 1;
console.log(challenge, progress); // #0x120 2
progress = "Learning JS!";
console.log(challenge, progress); // #0x120 Learning JS!
// challenge = "New Challenge"; // Error: cannot reassign const