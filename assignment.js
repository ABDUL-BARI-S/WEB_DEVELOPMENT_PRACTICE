// Day2 JS

// let userName = "Sarah";
// let hour = 9;

// let greeting = `Good morning, ${userName}`;

// console.log(greeting);

// let userAge = 16;

// let minimumAge = 18;

// let isOldEnough = userAge >=minimumAge;

// console.log(isOldEnough);


let number = "12345678";
let lastNo = number.slice(-4);
let toHide = number.length - 4;
let maskedPart = "*".repeat(toHide);

let maskedNumber = maskedPart + lastNo;

console.log(maskedNumber);