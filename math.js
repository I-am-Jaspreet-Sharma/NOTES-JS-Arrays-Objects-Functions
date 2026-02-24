console.log(Math.round(4.568959595));

console.log(Math.floor(4.54545956));

console.log(Math.ceil(4.54545956));

console.log(Math.trunc(4.54545956));

console.log(0.1+0.2);

console.log(0.1+0.2 === 0.3);

function equalityAmongDecimals(a, b){
    return Math.abs(a-b) <= Number.EPSILON;
}

console.log(equalityAmongDecimals(0.1+0.2, 0.3));