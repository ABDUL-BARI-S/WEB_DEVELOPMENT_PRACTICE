let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore")
let compScore = document.querySelector("#compScore")

// 1st
let comChoice = () =>{
  let options = ['rock', 'paper', 'scissor'];
  let randNum = Math.floor(Math.random() * 3); // 0 or 1 or 2
 
  return options[randNum]; // rock or paper or scissor
}  
// 3.5
const drawGame = () => {
    // console.log('draw');
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
    msg.innerHTML = "It's a draw";
}

//4
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        // console.log(`userWin is ${userWin}`)
        // console.log("You won!");
        userCount++;
        userScore.innerHTML = userCount;
        msg.style.backgroundColor = "green";
        // console.log(userCount)
        msg.innerHTML =`You won as ${userChoice} defeats ${compChoice}`
    } else{
        // console.log('You lose');
        compCount++;
        compScore.innerHTML = compCount;
        // console.log(compCount)
        msg.style.backgroundColor = "red";
        msg.innerHTML = `You lose as ${compChoice} defeats ${userChoice}`
}
}
// 3
const playGame = (userChoice) => {
    let compChoice = comChoice();
    // console.log("Your choice :", userChoice);
    // console.log("Computer choice :",compChoice);
   if(userChoice === compChoice){
       drawGame();
   }
   else {
       let userWin = true;
        if(userChoice === 'rock'){ // paper, scissors
            userWin = compChoice === 'paper' ? false : true;
            // console.log(userWin);
        }
        else if(userChoice === 'paper'){ // rock , scissor
            userWin = compChoice === 'scissor' ? false : true;
            // console.log(userWin);
            
        }else{  // rock , paper
            userWin = compChoice === 'rock' ? false : true;
            // console.log(userWin);
        }
    showWinner(userWin,userChoice,compChoice);
    }
    
}


// 2
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    })
});
                