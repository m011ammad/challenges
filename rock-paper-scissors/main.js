// rock is 1
// paper is 2
// scissors is 3

function optionSelector() {
    let r = Math.floor( (Math.random() * 3) + 1);
    switch (r) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            console.log(error);
            break;
    }
}

// declare variables
let resultTxt = document.getElementById("result-txt");
let resultTxtInfo = document.getElementById("result-txt-info");
let resultTxtScore = document.getElementById("result-txt-score");
let userScore = 0;
let systemScore = 0;

// rock selected
document.getElementById("rock").addEventListener("click", () => {
    switch (optionSelector()) {
        case 1:
            resultTxt.innerHTML = "Draw!";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        case 2:
            systemScore++;
            resultTxt.innerHTML = "You Lose";
            resultTxtInfo.innerHTML = "Papper Beats Rock";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        case 3:
            userScore++;
            resultTxt.innerHTML = "You Win";
            resultTxtInfo.innerHTML = "Rock Beats Scissors";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        default:
            console.log("ERROR");
            break;
    }
})

// paper selected
document.getElementById("paper").addEventListener("click", () => {
    switch (optionSelector()) {
        case 1:
            userScore++;
            resultTxt.innerHTML = "You Win";
            resultTxtInfo.innerHTML = "Papper Beats Rock";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        case 2:
            resultTxt.innerHTML = "Draw!";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        case 3:
            systemScore++;
            resultTxt.innerHTML = "You Lose";
            resultTxtInfo.innerHTML = "Scissors Beats Papper";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        default:
            console.log("ERROR");
            break;
    }
})

// scissors selected
document.getElementById("scissors").addEventListener("click", () => {
    switch (optionSelector()) {
        case 1:
            systemScore++;
            resultTxt.innerHTML = "You Lose";
            resultTxtInfo.innerHTML = "Rock Beats Scissors";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        case 2:
            userScore++;
            resultTxt.innerHTML = "You Win";
            resultTxtInfo.innerHTML = "Scissors Beats Papper";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        case 3:
            resultTxt.innerHTML = "Draw!";
            resultTxtScore.innerHTML = `${userScore} - ${systemScore}`;
            break;
        default:
            console.log("ERROR");
            break;
    }
})