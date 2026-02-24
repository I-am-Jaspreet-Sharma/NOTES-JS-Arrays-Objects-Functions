// output : "Hello, JASPREET"
function x(strings, ...values)
{
    return strings[0] + values[0].toUpperCase();
}
console.log(x`Hello, ${"jaspreet"}`);

// function html(strings, ...values)
// {
//     return strings[0] + values[0]
// }