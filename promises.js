function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, { dish, status: "prepared" }), 100);
}
function pickupOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "picked" }), 100);
}
function deliverOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "delivered" }), 100);
}

prepareOrderCB("Biryani", (err, order) => {
    if (err) return console.log(err);
    console.log(`${order.dish}: ${order.status}`);
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err);
        console.log(`${order.dish}: ${order.status}`);
        deliverOrderCB(order, (err, order) => {
            if (err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`);
        });
    });
});

// --------------------------------------------------------------------------------------------------------------------------- //

function prepareOrder(dish){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!dish){
                reject(new Error("No dish is there"));
                return;
            }
            console.log(`${dish} is prepared`);
            resolve({dish, status: "prepared"});
        }, 100);
    });
}
function pickupOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!order){
                reject(new Error("No order is there"));
                return;
            }
            console.log(`${order.dish} is picked`);
            resolve({...order, status: "picked"});
        }, 100);
    });
}
function deliverOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!order){
                reject(new Error("No order is there"));
                return;
            }
            console.log(`${order.dish} is delivered`);
            resolve({...order, status: "delivered"});
        }, 100);
    });
}

prepareOrder("chai")
.then(order => pickupOrder(order))
.then(order => deliverOrder(order))
.catch(error => console.error(error.message))

// --------------------------------------------------------------------------------------------------------------------------- //

function names(name1, name2, name3) {
    setTimeout(() => {
        console.log(`${name1}`);
        setTimeout(() => {
            console.log(`${name2}`);
            setTimeout(() => {
                console.log(`${name3}`);
            }, 500);
        }, 500);
    }, 500);
}
names("Jaspreet", "Hitesh", "Piyush");
names("100", "200", "300");

// --------------------------------------------------------------------------------------------------------------------------- //

function names(name){
    return new Promise((resolve) => setTimeout(() => {console.log(`${name}`); resolve();}, 100));
}
names("Jaspreet")
.then(()=>names("Hitesh"))
.then(()=>names("Piyush"))