const distilEssence = (ingredient) => `Mixing elixir with ${ingredient}`;
console.log(distilEssence); // [Function: distilEssence]
console.log(distilEssence("berries")); // "Mixing elixir with berries"

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

function oldBrewingLogs()
{
    console.log(`Type: ${Array.isArray(arguments) ? "Array" : typeof arguments}`);
    console.log(arguments);
    console.log(Array.from(arguments));
}

console.log(oldBrewingLogs); // [Function: oldBrewingLogs]
oldBrewingLogs("Sage", "rosemary"); // "Type: object" | ["Sage", "rosemary"] | ["Sage", "rosemary"]

// arguments is not an array but an object. But still it prints as an array (from line 8)
// Line 8 should have printed: {"0": "Sage", "1": "rosemary"}

const arrowBrew = () => console.log(arguments);
console.log(arrowBrew); // [Function: arrowBrew]
// arrowBrew(); // ReferenceError: arguments is not defined

// Arrow functions does not have arguments object

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

// IMPURE FUNCTION (depends upon external state)

let globalCount = 0;
function brewAndCount()
{
    globalCount++; // changing external variable
}

// PURE FUNCTION (does not depend upon external state)

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

// IIFE (Immediately Invoked Function Expression)

const potionShop = (function(){})();
//                      ^         ^
//                      |         |
//         function definition   calling the function

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

// Higher Order Function

// A function is said to be Higher Order Function if it takes other functions as arguments or return other functions. Eg: map(), filter(), reduce(), etc.

// ---------------------------------------------------------------------------------------------------------------------------------------------------- //

// CLOSURES

function makeFunc()
{
    const name = "Jaspreet Sharma";
    function displayName()
    {
        console.log(name);
    }
    return {displayName};
}

const myFunc = makeFunc(); // object -> {displayName: [Function: displayName]}
console.log(myFunc.name); // undefined
console.log(myFunc); // object -> {displayName: [Function: displayName]}
console.log(myFunc.displayName); // [Function: displayName]
myFunc.displayName(); // "Jaspreet Sharma"

// myFunc stores the displayName function, but it neither stores the value nor stores any reference related to name variable. Then how does upon calling myFunc(), it prints "Jaspreet Sharma" (value stored in name)
// name remains in memory because it is needed by the displayName function

const potionShop2 = (function(){
    let inventory = 0;
    return {
        brew() {
            inventory++;
            return `Brew potion #${inventory}`;
        },
        getStock() {
            return inventory;
        }
    }
})(); // object -> {brew: [Function: brew], getStock: [Function: getStock]} 
console.log(potionShop2); // object -> {brew: [Function: brew], getStock: [Function: getStock]}

console.log(potionShop2.brew()); // "Brew potion #1"
console.log(potionShop2.getStock()); // 1
console.log(potionShop2.inventory); // undefined
