let intercepted = "HELLO";
console.log(intercepted.length);

const userName = "OMEGA-7";
console.log(userName.at(99));

const rawTransmission = "ThE EaGlE has LandeD";
console.log(rawTransmission.toLowerCase());

const secretMessage = "The drop point is at Dock 7. Repeat: Dock 7";
console.log(secretMessage.indexOf("Dock"));

console.log(intercepted.split("").join("\n"));

const missionNumber = "42";
console.log(missionNumber.padStart(3, "0"));

const greetingMessage = `
================================
|   WELCOME TO THE MISSION     |
================================


================================
|   Mission: ${missionNumber}   |
================================
`;
console.log(greetingMessage);

const isLoggedIn = true;
const profile = `${isLoggedIn ? "Eagle 42" : "Guest238r39"}`;
console.log(profile);
