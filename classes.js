class Cricketer{
    constructor(name,role){
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100;
    }
    introduce(){
        return `${this.name} the ${this.role} | matches played: ${this.matchesPlayed} | stamina: ${this.stamina}`;
    }
    hello = "Hello, how are you";
    arrow = () => `arrow`;
}
const player1 = new Cricketer("Virat", "Batsman"); // {hello: "Hello, how are you", arrow: [Function], name: "Virat", role: "Batsman", matchesPlayed: 0, stamina: 100}
console.log(player1);

const player2 = new Cricketer("Bumrah", "Bowler"); // {hello: "Hello, how are you", arrow: [Function], name: "Bumrah", role: "Bowler", matchesPlayed: 0, stamina: 100}

console.log(player1.hasOwnProperty("name")); // true
console.log(typeof Cricketer); // "function"

console.log(player1.hasOwnProperty("introduce")); // false
console.log(player1.__proto__ === Cricketer.prototype); // true
console.log(player1.introduce()); // "Virat the Batsman | matches played: 0 | stamina: 100"

console.log(player1.hasOwnProperty("hello")); // true
console.log(player1.hello); // "Hello, how are you"
console.log(Cricketer.prototype.hello); // undefined

console.log(player1.hasOwnProperty("arrow")); // true
console.log(player1.arrow()); // "arrow"
console.log(Cricketer.prototype.arrow); // undefined

// Difference between Class and Regular Function?
// Any regular function written inside Class gets automatically added in className.prototype. But in case of regular function, we have to add it manually into its prototype.
// Any data field or arrow function written inside Class gets automatically added in the Constructor function as this.fieldName = fieldValue. This has to be done manually in case of regular function.

class Debutant{
    constructor(name){
        this.name = name;
        this.walkOut = () => `${this.name} walks out to bat for the first time`;
    }
}
const debutant1 = new Debutant("Shubman"); // {name: "Shubman", walkOut: [Function]}
const somethingFromLastClass = debutant1.walkOut; // [Function: walkOut]
console.log(somethingFromLastClass()); // "Shubman walks out to bat for the first time"

const debutant2 = new Debutant("Yashasvi"); // {name: "Yashasvi", walkOut: [Function]}
console.log(debutant1.walkOut === debutant2.walkOut); // false