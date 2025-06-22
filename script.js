let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

const msg = document.querySelector('#msg'); // Select the message box

const userScorePara = document.querySelector('#user-score'); // Select the user score paragraph
const compScorePara = document.querySelector('#comp-score'); // Select the computer score paragraph

const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']; // Define the options for the computer
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3); // Generate a random index
    return options[randIdx]; // Return the random choice
}

const drawGame = (userChoice, compChoice) => {
    // console.log("Draw Match");
    msg.textContent = `It's a draw! Your choice ${userChoice} and Computer Choice ${compChoice} tie 💔 `;
    msg.style.backgroundColor = "#9e9e0d"; // Change the background color to yellow for a draw
    msg.style.color = "black"; // Change the text color to black for better visibility
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.textContent = userScore; // Update the user score paragraph
        msg.textContent = `You Win! Your choice ${userChoice} beats ${compChoice} 🤩 `; // Update the message box with the win message
        msg.style.backgroundColor = "green"; // Change the background color to green for a win
    } else {
        compScore++;
        compScorePara.textContent = compScore; // Update the computer score paragraph
        msg.textContent = `You Lose! Computer choice ${compChoice} beats ${userChoice} ☹️ `; // Update the message box with the lose message
        msg.style.backgroundColor = "#9c0808"; // Change the background color to red for a loss
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genComputerChoice(); // Get the computer's choice
    // console.log(compChoice);

    if (userChoice === compChoice) {
        //Draw Match
        drawGame();
    } else {
        let userWin = true;
        //Check if user wins
        if (userChoice === 'rock') {
            //scissors, paper
            userWin = compChoice === 'paper' ? false : true; // If computer chose paper, user loses
        } else if (userChoice === 'paper') {
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true; // If computer chose scissors, user loses
        } else {
            //rock, paper
            userWin = compChoice === 'rock' ? false : true; // If computer chose rock user loses
        }
        showWinner(userWin, userChoice, compChoice); // Show the winner based on the user's choice
    }
}

choices.forEach((choice) => { // For each choice, add an event listener
    choice.addEventListener('click', () => { // When a choice is clicked
        const userChoice = choice.getAttribute('id'); // Get the id of the choice
        playGame(userChoice); // Call the playGame function with the user's choice
    });
});