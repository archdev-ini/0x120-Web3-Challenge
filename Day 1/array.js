// Arrays Stores List of data
//concat creates a new array by combining two or more arrays
// map creates a new array by applying a function to each element of the original array
// Example of using concat and map with arrays

const skills = ["Html", "CSS", "JavaScript"];
const newSkills = skills.concat("React")

console.log(skills); // ["Html", "CSS", "JavaScript"]
console.log(newSkills); // ["Html", "CSS", "JavaScript", "React"]

const skillLevels = skills.map((skill) => `${skill} (Beginner)`);
console.log(skillLevels); // ["Html (Beginner)", "CSS (Beginner)", "JavaScript (Beginner)"]