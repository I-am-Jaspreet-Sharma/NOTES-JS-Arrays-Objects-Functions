const orders = [
    { dish: "pasta", price: 14, spicy: true, qty: 2 },
    { dish: "macroni", price: 10, spicy: false, qty: 5 },
    { dish: "noodles", price: 18, spicy: true, qty: 1 },
    { dish: "salad", price: 5, spicy: false, qty: 3 },
    { dish: "momos", price: 20, spicy: true, qty: 1 },
];

const myData = orders.forEach((order,index) => console.log(`${index+1}: ${order.qty} x ${order.dish}`)); // 5 prints in format specified
console.log(myData); // undefined

console.table(orders); // same

// .forEach() method accepts a callback as an argument and returns void (or nothing or undefined)
// callback should accept a data type as a first argument and index of that data type as the second argument
// .forEach() iterates over each element of the array
// .forEach() is a non-mutating array method

// USEFUL FOR LOGGING SOMETHING OUT OF THE ARRAY OF OBJECTS

// --------------------------------------------------------------------------------------------------------------------------------------------------//

const receiptLines = orders.map(order => `${order.dish}: ${order.qty * order.price}`); // array of strings -> ["pasta: 28", "macroni: 50", "noodles: 18", "salad: 15", "momos: 20"]
console.log(receiptLines); // ["pasta: 28", "macroni: 50", "noodles: 18", "salad: 15", "momos: 20"]

console.table(orders); // same

// .map() accepts a callback as an argument and returns an array
// callback should accept a data type as a first argument
// .map() iterates over each element of the array
// .map() is a non-mutating array method

// USEFUL FOR EXTRACTING AN INFORMATION OUT OF EACH ELEMENT OF AN ARRAY & THEN STORING THAT INFORMATION INSIDE AN ARRAY

// --------------------------------------------------------------------------------------------------------------------------------------------------//

const spicyOrders = orders.filter(order => order.spicy); // array of objects -> [{ dish: "pasta", price: 14, spicy: true, qty: 2 },{ dish: "noodles", price: 18, spicy: true, qty: 1 },{ dish: "momos", price: 20, spicy: true, qty: 1 },];
console.table(spicyOrders); // array of objects -> [{ dish: "pasta", price: 14, spicy: true, qty: 2 },{ dish: "noodles", price: 18, spicy: true, qty: 1 },{ dish: "momos", price: 20, spicy: true, qty: 1 },];

console.table(orders); // same

// .filter() accepts a callback as an argument and returns an array of same data types as the method is applied upon
// callback should accept a data type as a first argument
// .filter() iterates over each element of the array
// .filter() is a non-mutating array method

// USEFUL FOR AS THE NAME SUGGESTS FILTERING OUT ELEMENTS IN AN ARRAY BASED ON CERTAIN CONDITION

// --------------------------------------------------------------------------------------------------------------------------------------------------//

const totalRevenue = orders.reduce((sum, order) => sum + order.qty * order.price, 0); // Number -> 131
console.log(totalRevenue); // Number -> 131

console.table(orders); // same

// .reduce() accepts a callback as the first argument and an initialValue as second argument and return data type same as that of initial value
// callback should accept a data type as a first argument
// .reduce() iterates over each element of the array
// .reduce() is a non-mutating array method

// USEFUL FOR CALCULATIONS THAT REQUIRES OVERALL ARRAY. EG: SUM, MEAN, ETC.

const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish);
    return acc;
}, {spicy: [], mild: []}); // object -> {spicy: ["pasta", "noodles", "momos"], mild: ["macroni", "salad"]}
console.log(grouped); // object -> {spicy: ["pasta", "noodles", "momos"], mild: ["macroni", "salad"]}

// --------------------------------------------------------------------------------------------------------------------------------------------------//

// ************************ .forEach() *********************** //

// orders.forEach(order => {
//     if(order.dish === "noodles") break;
//     console.log(order.dish);
// }) // Error: cannot use break here

// .forEach() method expects synchronous callback, i.e., forEach loop can neither break nor an iteration can be jumped over using continue
// .forEach() method does not wait for promises (async - await)

// DO NOT HANDLE PROMISES USING forEach() method/loop

// --------------------------------------------------------------------------------------------------------------------------------------------------//

// ************************* PIPELINING ***************************** //

const mildReport = orders
    .filter(order => !order.spicy)
    .map(order => {return {dish: order.dish, total: order.qty * order.price}}) 
    .toSorted((a,b) => a.total-b.total) // array of objects -> [{dish: "salad", total: 15}, {dish: "macroni", total: 50}]
console.log(mildReport); // array of objects -> [{dish: "salad", total: 15}, {dish: "macroni", total: 50}]

// .toSorted() is non-mutating alternative of .sort() method. It accepts compareFunction() as an argument and returns a sorted array
// .toSorted() does not mutate the original array