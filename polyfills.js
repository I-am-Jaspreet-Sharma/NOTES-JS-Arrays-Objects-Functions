Array.prototype.last = function(){
    return this[this.length-1];
};
console.log([1,2,3,4,5].last()); // method invocation - implicit binding -> this of last refers to [1,2,3,4,5]
// 5

console.log(["Ani", "Hitesh", "Jaspreet"].last()); // method invocation - implicit binding -> this of last refers to ["Ani", "Hitesh", "Jaspreet"]
// "Jaspreet"

// ------------------------------------------------------------------------------------------------------------------------------ //

Array.prototype.my_forEach = function(cb){
    for(let i = 0; i < this.length; i++)
    {
        cb(this[i])
    }
}
const arr = [1,2,3,4,5];
arr.my_forEach(el => console.log(el*2));
// 2
// 4
// 6
// 8
// 10
console.log(arr); // [1,2,3,4,5]

// ------------------------------------------------------------------------------------------------------------------------------ //

Array.prototype.my_map = function(cb){
    const arr = [];
    for(let i = 0; i < this.length; i++)
    {
        arr.push(cb(this[i]));
    }
    return arr;
};
const arr2 = [1,2,3,4,5];
console.log(arr2.my_map(el => el*2)); // [2,4,6,8,10]
console.log(arr2); // [1,2,3,4,5]

// ------------------------------------------------------------------------------------------------------------------------------ //

Array.prototype.my_reduce = function(cb, initialValue){
    for(let i = 0; i < this.length; i++)
    {
        initialValue = cb(initialValue, this[i]);
    }
    return initialValue;
};
const arr3 = [1,2,3,4,5];
console.log(arr3.my_reduce((sum, el) => sum+el, 0)); // 15
console.log(arr3); // [1,2,3,4,5]

// ------------------------------------------------------------------------------------------------------------------------------ //

Array.prototype.my_filter = function(cb){
    const arr = [];
    for(let i = 0; i < this.length; i++)
    {
        if(cb(this[i])) arr.push(this[i]);
    }
    return arr;
}
const arr4 = [1,2,3,4,5];
console.log(arr4.my_filter(el => el%2===0)); // [2,4]
console.log(arr4); // [1,2,3,4,5]

// ------------------------------------------------------------------------------------------------------------------------------ //

Array.prototype.my_flat = function(depth = 1){
    const arr = [];
    for(let i = 0; i < this.length; i++)
    {
        if(depth > 0 && Array.isArray(this[i])){
            arr.push(...this[i].my_flat(depth-1));
        }
        else{
            arr.push(this[i]);
        }
    }
    return arr;
}
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}
const arr5 = [1, 2, [1, 2, 4, [5, 6, 9]], 5, 6, 7, 8, [4, 5, 6, 7]];
console.log(arr5.my_flat()); // [1,2,1,2,4,[5,6,9],5,6,7,8,4,5,6,7]
console.log(arraysEqual(arr5.flat(2), arr5.my_flat(2))); // true
console.log(arr5); // [1,2,[1,2,4,[5,6,9]],5,6,7,8,[4,5,6,7]]

// ------------------------------------------------------------------------------------------------------------------------------ //
