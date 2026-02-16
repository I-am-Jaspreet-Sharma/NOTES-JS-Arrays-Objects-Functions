const threeEmptySeats = Array(undefined); // stores the arguments inside an array if multiple or non-number, creates an array of N empty slots if only N is provided as an argument (where N is a positive integer), gives RangeError if only N is provided as an argument (where N is a negative integer or decimal number)
console.log(threeEmptySeats);

const singlePassenger = Array.of(undefined); // stores the arguments inside an array no matter the data type
console.log(singlePassenger);

// Array() and Array.of() works same for all data types except Numbers
// Array() creates empty slots for positive integers
// Array() gives a RangeError on negative integers and decimals
// But Array.of() takes the value and store it in the slot created

// NOT USEFUL FOR ANYTHING BECAUSE I WILL CREATE AN ARRAY USING [], AND IT IS OPTIMIZED BY THE ENGINE AS WELL

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const trainCode = Array.from("DUST");
console.log(trainCode); // ["D", "U", "S", "T"]

console.log(Array.from(3)); // should give an error but it created an empty array

console.log(Array.from(3.293)); // should give an error but it still created an empty array

console.log(Array.from({id: 1, name: "Jaspreet Sharma", marks: 100})); // should create an array of arrays each containing key at 0th index and corresponing value at 1st index but it created an empty array

console.log(Array.from([1,2,3,4])); // [1,2,3,4]

console.log(Array.from("[1,2,3,4]")); // ["[", "1", ",", "2", ",", "3", ",", "4", "]"]

// console.log(Array.from(null)); // should create an empty array but gave TypeError

// console.log(Array.from(1,2,4,5)); // should create [1,2,4,5] but gave TypeError because the second argument must be a function

// Array.from() creates an array of characters when provided a string
// Array.from() creates an empty array when provided number, object
// Array.from() provides TypeError when provided null or undefined
// Array.from() assumes function as a second argument

// USEFUL ONLY IN THE CASE OF CREATING AN ARRAY OF CHARACTERS FROM A STRING BUT IN THAT CASE ALSO, I CAN USE "HELLO".split("") and it will create an array of characters ["H", "E", "L", "L", "O"] AND .split() METHOD PROVIDES WAY MORE CHOICE OF HOW YOU WANT TO CHOOSE YOUR SPLITTER

console.log("DUST".split("")); // ["D", "U", "S", "T"]

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const tempTrain = ["A", "B", "C", "D", "E"];
console.log(tempTrain.length); // 5

tempTrain.length = 7; // tempTrain = ["A", "B", "C", "D", "E", empty, empty]
console.log(tempTrain);

tempTrain.length = 3; // tempTrain = ["A", "B", "C"]
console.log(tempTrain);

tempTrain.length = 5; // tempTrain = ["A", "B", "C", empty, empty]
console.log(tempTrain);

// .length method can be used to increase or decrease the length of an array
// if the length of an array is decreased, then the information is lost
// if the length of an array is increased, then new empty slots are generated

// USED ONLY FOR FINDING THE LENGTH OF AN ARRAY

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const nums = [1,2,3,4,5];
console.log(nums.splice(0, 3)); // [1,2,3]

console.log(nums); // [4,5]

const nums2 = [1,2,3,4,5];
console.log(nums2.splice(2,0,100)); // []

console.log(nums2); // [1,2,100,3,4,5]

const nums3 = [1,2,3,4,5];
console.log(nums3.splice(2,1,100)); // [3]

console.log(nums3); // [1,2,100,4,5]

// .splice() mutates the array

// I PERSONALLY WOULD NOT USE IT BECAUSE IT DESTROYS THE STRUCTURE OF DATA & THAT LEADS TO CONFUSION AND ERROR AND THAT IS TRUE FOR ALL MUTATING METHODS

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

// ************************* NON-MUTATING METHODS *******************************

const nums4 = [1,2,3,4,5];
console.log(nums4.concat(6,7,8,9,10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(nums4); // [1,2,3,4,5]

console.log(nums4.concat([4,5,6,7,89,5])); // [1,2,3,4,5,4,5,6,7,89,5]
console.log(nums4); // [1,2,3,4,5]

console.log(nums4.concat([[4,5,6,7,89,5]])); // [1,2,3,4,5,[4,5,6,7,89,5]]
console.log(nums4); // [1,2,3,4,5]

console.log(nums4.concat({name: "Jaspreet Sharma", age: 21})); // [1,2,3,4,5,{name: "Jaspreet Sharma", age: 21}]
console.log(nums4); // [1,2,3,4,5]

console.log(nums4.concat(null)); // [1,2,3,4,5,null]
console.log(nums4); // [1,2,3,4,5]

// .concat() is a non-mutating array method which inserts the arguments it take at the end of an array and returns a new array without changing the contents of the original array

console.log(nums4.slice()); // [1,2,3,4,5]
console.log(nums4); // [1,2,3,4,5]

console.log(nums4.slice(0,3)); // [1,2,3]
console.log(nums4); // [1,2,3,4,5]

console.log(nums4.slice(0,1,100)); // [1]
console.log(nums4); // [1,2,3,4,5]

// .slice() is a non-mutating alternative of .splice(), because it is non-mutating we cannot insert or delete or change the contents of original array but can return part of an array or the entire array

// .slice() is used to copy an array, eg: const copyArr = originalArr.slice();

const nums5 = [1,2,3,[4,5,6,[7,8,9]], [[[[[10]]]]]];
console.log(nums5.flat(Infinity)); // [1,2,3,4,5,6,7,8,9,10]
console.log(nums5); // [1,2,3,[4,5,6,[7,8,9]], [[[[[10]]]]]]

console.log(nums5.flat()); // [1,2,3,4,5,6,[7,8,9],[[[[10]]]]]
console.log(nums5); // [1,2,3,[4,5,6,[7,8,9]], [[[[[10]]]]]]

// .flat() is a non-mutating array method which returns a new array containing all the elements and sub-arrays deflated upto default depth of 1 and can deflate upto infinity.

/*
Here the chatgpt version 
 |
 v
Array.prototype.flat() is a non-mutating JavaScript array method that returns a new array with nested sub-arrays flattened into it.
By default, it flattens one level deep (depth = 1), but you can pass a number or Infinity to flatten deeper levels. 
*/

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const nums6 = [1,2,3,4,5];
console.log(nums6.indexOf(1)); // 0
console.log(nums6.indexOf(2)); // 1
console.log(nums6.indexOf(3)); // 2
console.log(nums6.indexOf(4)); // 3
console.log(nums6.indexOf(5)); // 4
console.log(nums6.indexOf(7)); // -1
console.log(nums6.indexOf(Infinity)); // -1
console.log(nums6.indexOf("hello")); // -1
console.log(nums6.indexOf("2")); // -1

const fruits = ["apple", "Banana", "dragon fruit"];
console.log(fruits.indexOf("a")); // -1
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("fruit")); // -1
console.log(fruits.indexOf("dragon")); // -1
console.log(fruits.indexOf("banana")); // -1
console.log(fruits.indexOf("dragon fruit")); // 2

// .indexOf() is an array method that takes a searchElement as a first argument and returns the index of the searchElement in the array if existed, otherwise return -1
// searchElement must exactly match the element in the array

// useful to find the index of an element in the array if the complete element is known

console.log(nums6.includes(6)); // false
console.log(nums6.includes(4)); // true
console.log(nums6.includes(5)); // true
console.log(nums6.includes(Infinity)); // false

console.log(fruits.includes("a")); // false
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("banana")); // false
console.log(fruits.includes("fruit")); // false
console.log(fruits.includes("dragon fruit")); // true

// .includes() is an array method that takes a searchElement as a first argument and returns a boolean value, that is, true if the searchElement exists in an array, otherwise return false
// searchElement must exactly match the element in the array

// useful to find whether the element exists in an array or not, if the complete element is known, but what's the benefit of getting a boolean value, something can be done with index 

// I PERSONALLY WOULD PREFER indexOf() FOR EXACT searchElement MATCH.

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof {}); // object

// Suppose I am getting an input from the user and I used typeof to find the data type of input and it came out to be Object. Now, how would I know whether the input is an array or object or null because all of them have object data type.

console.log(Array.isArray([])); // true
console.log(Array.isArray(null)); // false
console.log(Array.isArray({})); // false

// Now, I am sure that the input I am getting is surely an Array, nothing else.

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const names = ["Jaspreet Sharma", "Hitesh Sir", "Piyush Sir", "Anirudh Sir"];
console.log(names[-1]); // undefined
console.log(names[4]); // undefined
console.log(names[2]); // Piyush Sir

console.log(names.at(-1)); // Anirudh Sir
console.log(names.at(4)); // undefined
console.log(names.at(2)); // Piyush Sir

const nums7 = [1,2,3,4,5];

// .at() takes an argument of a Number and returns element at that index or undefined. If the argument passed is the valid index in the array (element is present at that index in the array), then it returns the element present at that index, otherwise return -1

// .at() can also takes a negative index and it starts accessing the elements from the end of an array. Eg: .at(-1) will access the last element of the array

// accessing out of bounds in an array will return undefined

// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const nums8 = [5,2,8,48,6,71,5,36,1,5,23,35,8];
console.log(nums8.sort((a,b) => a-b)); // array of Numbers -> [1,2,5,5,5,6,8,8,23,35,36,48,71]
console.log(nums8); // array of Numbers -> [1,2,5,5,5,6,8,8,23,35,36,48,71]

// .sort() is a mutating array method takes a compareFunction (or callback) as an argument and returns the array in the sorted fashion


// --------------------------------------------------------------------------------------------------------------------------------------------------- //

const originalArray = ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]];
const copiedArray = [...originalArray]; // array -> originalArray gets shallow copied into copiedArray

console.log(originalArray); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]]
console.log(copiedArray); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]]

originalArray[3].salary = 2000; // array -> ["hello", 1, "How are you ?", {id: 1, salary: 2000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]];

console.log(originalArray); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 2000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]];
console.log(copiedArray); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 2000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]]

// ... spread operator is used to shallow copy an object and array
// shallow copying means the nested objects and arrays will not be copied or passed by value. Insted they will be passed by reference.

const originalArray2 = ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]];
const copiedArray2 = structuredClone(originalArray2); // // array -> originalArray2 gets deep copied into copiedArray2

console.log(originalArray2); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]]
console.log(copiedArray2); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]]

originalArray2[3].salary = 2000; // array -> ["hello", 1, "How are you ?", {id: 1, salary: 2000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]];

console.log(originalArray2); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 2000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]];
console.log(copiedArray2); // array -> ["hello", 1, "How are you ?", {id: 1, salary: 1000}, [1,2,3,4,5], [[1,2], [3,4], [5,6]]]

// structuredClone() is used to deep copy an object and array
// deep copying means the nested objects and arrays will be copied or passed by value.

// --------------------------------------------------------------------------------------------------------------------------------------------------- //