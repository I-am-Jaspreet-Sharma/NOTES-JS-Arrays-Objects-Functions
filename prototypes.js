const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish(){
        return `${this.name} cooks an ancient family recipe`;
    }
};
const raj = Object.create(prithviraj);
console.log(raj); // {}
console.log(raj.name); // "Prithviraj"
console.log(raj.generation); // "grandFather"
console.log(raj.cookTraditionalDish()); // "Prithviraj cooks an ancient family recipe"
console.log(raj.hasOwnProperty("name")); // false
console.log(raj.hasOwnProperty("generation")); // false
console.log(raj.hasOwnProperty("cookTraditionalDish")); // false

// Working of Object.create(objectPassedAsArgument)
// 1. creates an empty object {}
// 2. {}.__proto__ = objectPassedAsArgument
// 3. return {}

raj.name = "Raj";
raj.generation = "father";
raj.runBusiness = function(){
    return `${this.name} runs the family business`;
};
console.log(raj); // {name: "Raj", generation: "father", runBusiness: [Function: runBusiness]}
console.log(raj.name); // "Raj"
console.log(raj.generation); // "father"
console.log(raj.cookTraditionalDish()); // "Raj cooks an ancient family recipe"
console.log(raj.hasOwnProperty("name")); // true
console.log(raj.hasOwnProperty("generation")); // true
console.log(raj.hasOwnProperty("cookTraditionalDish")); // false
console.log(raj.hasOwnProperty("runBusiness")); // true

const ranbir = Object.create(raj);
console.log(ranbir); // {}
console.log(ranbir.name); // "Raj"
console.log(ranbir.generation); // "father"
console.log(ranbir.cookTraditionalDish()); // "Raj cooks an ancient family recipe"
console.log(ranbir.hasOwnProperty("name")); // false
console.log(ranbir.hasOwnProperty("generation")); // false
console.log(ranbir.hasOwnProperty("cookTraditionalDish")); // false
console.log(ranbir.hasOwnProperty("runBusiness")); // false

ranbir.name = "Ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function(){
    return `${this.name} directs blockbuster movies`;
};
console.log(ranbir); // {name: "Ranbir", generation: "son", makeFilm: [Function: makeFilm]}
console.log(ranbir.name); // "Ranbir"
console.log(ranbir.generation); // "son"
console.log(ranbir.cookTraditionalDish()); // "Ranbir cooks an ancient family recipe"
console.log(ranbir.runBusiness()); // "Ranbir runs the family business"
console.log(ranbir.makeFilm()); // "Ranbir directs blockbuster movies"
console.log(ranbir.hasOwnProperty("name")); // true
console.log(ranbir.hasOwnProperty("generation")); // true
console.log(ranbir.hasOwnProperty("cookTraditionalDish")); // false
console.log(ranbir.hasOwnProperty("runBusiness")); // false
console.log(ranbir.hasOwnProperty("makeFilm")); // true