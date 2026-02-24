function tataCar(chassisNumber, modelName)
{
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}
tataCar.prototype.status = function(){
    return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
}
tataCar.prototype.name = "Tata Motors";
const car1 = new tataCar("MH-101", "Nexon"); // constructor invocation - new binding -> this refers to new object created
console.log(typeof car1); // object
console.log(Array.isArray(car1)); // false
console.log(car1 === null); // false
console.log(car1); // tataCar {chassisNumber: "MH-101", modelName: "Nexon", fuelLevel: 100, status: [Function]}
console.log(car1.chassisNumber); // "MH-101"
console.log(car1.modelName); // "Nexon"
console.log(car1.fuelLevel); // 100
console.log(car1.name); // "Tata Motors"
console.log(car1.status()); // method invocation - implicit binding - this refers to car1
// "Tata Nexon #MH-101 | Fuel: 100"
console.log(car1.hasOwnProperty("status")); // false
console.log(car1.__proto__ === tataCar.prototype); // true

const car2 = new tataCar("DL-202", "Harrier"); // constructor invocation - new binding -> this refers to new object created
console.log(car1.status === car2.status); // true

// When a function is called/invoked using a new keyword, then
// 1. A new empty object is created such that prototype of object is pointing to the prototype of the function (newObject.__proto__ === function.prototype)->true
// 2. new binding -> this of function points to the newly created object
// 3. That newly created object is then returned

function createAutoRickshaw(id, route)
{
    return {
        id,
        route,
        run(){
            return `Auto ${this.id} running on ${this.route}`;
        }
    }
}
const auto1 = createAutoRickshaw("UP-1", "Lucknow-Kanpur");
console.log(auto1.__proto__ === Object.prototype); // true
console.log(auto1.run()); // method invocation - implicit binding -> this of run() points to auto1
// "Auto UP-1 running on Lucknow-Kanpur"

const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");
console.log(auto1.run === auto2.run); // false

function car(chassisNumber, modelName)
{
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
    function engine(){
        return `${this.modelName} has V8 engine`;
    }
}
const car3 = new car("MH-101", "Nexon"); // constructor invocation - new binding -> this refers to new object created
console.log(typeof car3); // object
console.log(Array.isArray(car3)); // false
console.log(car3 === null); // false
console.log(car3); // car {chassisNumber: "MH-101", modelName: "Nexon", fuelLevel: 100}
console.log(car3.chassisNumber); // "MH-101"
console.log(car3.modelName); // "Nexon"
console.log(car3.fuelLevel); // 100
console.log(car3.hasOwnProperty("engine")); // false
console.log(car3.__proto__ === car.prototype); // true
console.log(car3.engine); // undefined
