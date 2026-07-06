
// let teams = [
//     ["Alice", "Bob"], // Team 1: -Alice -Bob
//     ["Charlie", "David"],// Team 2: -Charlie -David
//     ["Eve", "Frank"]
// ];

// for(let i = 0; i < teams.length; i++){
//     console.log(`Team ${i+1}:`);
//     for(let j = 0; j < teams[i].length; j++){
//         console.log(` -${teams[i][j]}`);
//     }
// }


// let matrix1 = [[1,2],[3,4]];
// let matrix2 = [[5,6],[7,8]];
// let result = [];

// for (let i = 0; i < matrix1.length; i++){
//     result[i] = [];
//     // console.log(result[i]);
//     for (j = 0; j < matrix1[i].length; j++){
//         result[i][j] = matrix1[i][j]+ matrix2[i][j];
//     }
// }
// console.log(result);

// let str = 'sameer';
// for (let char of str) {
//     console.log(char);
// }

// let prices = [19.99,29.99,49.99,9.99];
// let total = 0;
// for (let price of prices) {
//     total += price;
// }

// console.log(`Total : $${total.toFixed(2)}`);

// let str = 'sameer ahmed';
// let count = 0;
// for (let i = 0; i <= str.length; i++){
//     if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         count++;
//     }
// }
// console.log(count); 

// let sentence = "Hello World";
// let vowels = 'aeiouAEIOU';
// let count = 0;

// for(let char of sentence){
//     if (vowels.includes(char)){
//         count++;
//     }
// }

// console.log(`Number of vowels: ${count}`);


// let secretNumber = Math.ceil(Math.random() * 100) + 1;
// console.log(secretNumber)
// let guess = 0;
// let attempts = 0;

// while (guess !== secretNumber){
//     guess = Number(prompt("Guess a number between 1 and 100:"))
//     attempts++;

//     if(guess === secretNumber){
//         console.log(`Correct! You guessed it in ${attempts} attempts! secretNumber is ${secretNumber}`);
//     }else if(guess < secretNumber){
//         console.log("Too low! Try higher.");
//     }else if (guess > secretNumber){
//         console.log("Too high! Try lower");
//     }
// }