let PlayerOneChoice = "Rock";
let PlayerTwoChoice = "Scissors";

if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a Tie!");
}

else if (
    (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") ||
    (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
    (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper")
) {
    console.log("Player One Win");
}

else {
    console.log("Player Two Win");
}