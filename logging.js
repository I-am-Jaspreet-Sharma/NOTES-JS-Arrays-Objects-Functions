let myName = "Jaspreet Sharma";
let myAge = 21;
let myCollege = "CGC";
const warningLog = "This is a warning";
console.warn("Warning: ", warningLog);
const errorLog = "This is an error log";
console.error("Error: ", errorLog);

const employees = [
    {id: 1, name: "Jaspreet Sharma", age: 21},
    {id: 2, name: "Adarsh", age: 2},
    {id: 3, name: "Mahin", age: 10}
];
console.table(employees);

console.group("Group Starts");
console.log("log 1");
console.log("log 2");
console.log("log 3");
console.groupEnd();

console.time("Loop1");
for(let i = 1; i <= 100; i++){}
console.timeEnd("Loop1");

console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet");
console.count("Jaspreet Sharma");

console.log(1_000_000);
console.log(1000000);