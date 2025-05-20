let userScore=0;
let compScore=0;


const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const gencompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    
    msg.innerText = "Game Is Draw , Play again!!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin, userChoice , CompChoice) => {
    if(userWin){
      userScore++;
        userScore.innerText = userScore;
    msg.innerText = `YOU WIN!! ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScore.innerText = compScore;
    msg.innerText = `YOU LOSE!! ${CompChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    //console.log("User choice: " , userChoice);
    const compChoice = gencompChoice();
    //console.log("Computer choice: " , CompChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin  = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
    } else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);


    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', ( ) => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

