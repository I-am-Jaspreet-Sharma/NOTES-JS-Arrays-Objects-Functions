function cookDish(ingredient, style)
{
    return `${this.name} prepares ${ingredient} in ${style} style!`;
}
const sharmaKitchen = {name: "Sharma jis Kitchen"};
const guptaKitchen = {name: "Gupta jis Kitchen"};
console.log(cookDish.call(sharmaKitchen, "Paneer and Spices", "Muglai")); // explicit invocation - explicit binding
// "Sharma jis Kitchen prepares Paneer and Spices in Muglai style!"

const guptaOrder = ["Chole Kulche", "Punjabi Dhaba"];
console.log(cookDish.apply(guptaKitchen, guptaOrder)); // explicit invocation - explicit binding
// "Gupta jis Kitchen prepares Chole Kulche in Punjabi Dhaba style!"
console.log(cookDish.call(guptaKitchen, ...guptaOrder));
// "Gupta jis Kitchen prepares Chole Kulche in Punjabi Dhaba style!"

// call and apply are both used for explicit invocation of regular functions which allows explicit binding of this with explicitlly passed objects
// Both call and apply takes an object as the first argument
// call takes remaining arguments individually
// apply takes an array which contains all the arguments required to pass as its second argument

function reportDelivery(location, status)
{
    return `${this.name} at ${location}: ${status}`;
}
const deliveryBoy = {name: "Ranveer"};
console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "ordered")); // explicit invocation - explicit binding of this with deliveryBoy
// "Call: Ranveer at Lyari: ordered"
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "Pick Up"])); // explicit invocation - explicit binding of this with deliveryBoy
// "Apply: Ranveer at Mars: Pick Up"

console.log("Bind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT")); // explicit invocation - explicit binding of this with deliveryBoy
// "Bind: " [Function: reportDelivery]
const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT"); // explicit invocation - explicit binding of this with deliveryBoy
console.log(bindReport()); // "Ranveer at Haridwar: WHAT"

const bindReport2 = reportDelivery.bind(deliveryBoy, ["Haridwar", "WHAT"]); // explicit invocation - explicit binding of this with deliveryBoy
console.log(bindReport2()); // "Ranveer at Haridwar, WHAT: undefined"

const bindReport3 = reportDelivery.bind(deliveryBoy); // explicit invocation - explicit binding of this with deliveryBoy
console.log(bindReport3("Haridwar", "WHAT")); // "Ranveer at Haridwar: WHAT"