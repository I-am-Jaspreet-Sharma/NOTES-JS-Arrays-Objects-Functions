console.log(void 0);
console.log(void "heloo");

// to demolish a variable
let squad = [
    {id: 1, name: "Death Stroke", level: 100},
    {id: 2, name: "Killer Croc", level: 500},
    {id: 3, name: "Poison Ivy", level: 690}
];
console.table(squad);
squad = null;
console.log(squad);
squad = undefined;
console.log(squad);