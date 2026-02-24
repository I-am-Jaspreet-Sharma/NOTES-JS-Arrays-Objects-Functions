let age = 10;
const childCondition = age <= 12;
const teenCondition = age > 12 && age <= 19;
const adultCondition = age > 19 && age <= 40;
const seniorCondition = age > 40;
if(childCondition) console.log("You are a child!");
if(teenCondition) console.log("You are a teen!");
if(adultCondition) console.log("You are an adult!");
if(seniorCondition) console.log("You are a senior");