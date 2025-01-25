let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawgame = () => {
    msg.innerText = "game was dwaw. play again";
    msg.style.backgroundColor = "#081b31"; 
};

const showwinner = (userwin,userchoice, compChoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red"; 
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!");
        msg.innerText = `you lost! ${compChoice} beats  Your ${userchoice}`;
        msg.style.backgroundColor = "green"; 
    }
};

const playGame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userchoice == compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoice === "paper" ? false : true ;
        } else if(userchoice === "paper"){
            userwin = compChoice === "scissors" ? false : true ;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});