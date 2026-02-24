function bootNavigation(mapLoaded)
{
    try{
        console.log(`Is Navigation loaded: ${mapLoaded}`);
        if(!mapLoaded) throw new Error("Map was not passed in this function");
        return "NAV_OK";
    }
    catch(error){
        console.error(error);
        console.error(`Navigation Failed: ${error.message}`);
    }
    finally{
        console.log("Navigation Sequence Completed");
    }
}
const status1 = bootNavigation(true);
// "Is Navigation loaded: true"
// "Navigation Sequence Completed"
console.log(`Result: ${status1}`); // "Result: NAV_OK"

const status2 = bootNavigation(false);
// "Is Navigation loaded: false"
// error: Map was not passed in this function
// "Navigation Failed: Map was not passed in this function"
// "Navigation Sequence Completed"
console.log(`Result: ${status1}`); // "Result: NAV_OK"