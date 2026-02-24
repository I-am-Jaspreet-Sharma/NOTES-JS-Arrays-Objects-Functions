const aadhar_of_mayur = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");
console.log(aadhar_of_mayur); // Symbol("aadhar")

console.log(typeof aadhar_of_mayur); // "symbol"

console.log(aadhar_of_mayur === aadhar_of_piyush); // false

console.log(aadhar_of_mayur.toString()); // "Symbol(aadhar)"
// console.log(`${aadhar_of_mayur}`); // TypeError: Cannot convert Symbol to String

console.log(aadhar_of_mayur.description); // "aadhar"

const nonIndian = Symbol();
console.log(nonIndian.description); // undefined

const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");
const citizenRecord = {
    name: "Ved Pandey",
    age: 21,
    [biometricHash]: "a7sds87dd4s55d48s45s4",
    [bloodGroup]: "O+",
};
console.log(citizenRecord); // {name: "Ved Pandey", age: 21, [Symbol("biometricHash")]: "a7sds87dd4s55d48s45s4", [Symbol("bloodGroup")]: "O+"}
console.log(Object.keys(citizenRecord)); // ["name", "age"]

console.log(Object.getOwnPropertySymbols(citizenRecord)); // [Symbol("biometricHash"), Symbol("bloodGroup")]

// Symbols guarantee unique identifier
// Symbols do not show up in array returned by Object.keys()

const rtiQueryBook = {
    queries: ["Infra budget", "Ration Card", "Education budget", "Startup Laws"],
};
// for(const query of rtiQueryBook){
//     console.log(`Filing RTI: ${query}`);
// } // TypeError: {} is not iterable

rtiQueryBook[Symbol.iterator] = function(){
    let index = 0;
    const queries = this.queries;
    return {
        next(){
            if(index < queries.length){
                return {value: queries[index++], done: false};
            }
            return {value: undefined, done: true};
        }
    };
};
for (const query of rtiQueryBook) {
    console.log(`Filing RTI: ${query}`);
}
// "Filing RTI: Infra budget"
// "Filing RTI: Ration Card"
// "Filing RTI: Education budget"
// "Filing RTI: Startup Laws"

const governmentScheme = {
    name: "PM Kisan Yojana",
    people: 54,
    [Symbol.toPrimitive](hint){
        if(hint === "string") return "Hello, you trying to stringify an object 🤨";
        if(hint === "number") return this.people;
    }
};
console.log(+governmentScheme); // 54
console.log(`${governmentScheme}`); // "Hello, you trying to stringify an object 🤨";