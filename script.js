let player= prompt("Welcome to GC Miniature Golf. What is your Name?");

let holes = Number (prompt( "Hi "  + player + " How many holes would you like to play, 3 or 6?"));

let totalScore=0

if (holes === 3){

let scoreOne = Number (prompt ("How many putts for hole 1?"));

let scoreTwo = Number (prompt ("How many putts for hole 2"));

let scoreThree =  Number (prompt ("How many putts for hole 3?"));



totalScore = (scoreOne + scoreTwo + scoreThree)
}
else if (holes === 6){
    let scoreOne = Number (prompt ("How many putts for hole 1?"));

    let scoreTwo = Number (prompt ("How many putts for hole 2"));

    let scoreThree =  Number (prompt ("How many putts for hole 3?"));
    let scoreFour =  Number (prompt ("How many putts for hole 4?"));
    let scoreFive =  Number (prompt ("How many putts for hole 5?"));
    let scoreSix =  Number (prompt ("How many putts for hole 6?"));



totalScore = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive + scoreSix)
}
else{
    console.log ("Sorry, that is not one of the options.")
}
let finalScore = totalScore - holes * 3
if (totalScore < holes * 3){
    console.log (`Great job, ${player}! Your total par was: ${finalScore}`)
}else if(totalScore > holes * 3) {
    console.log (`Nice try, ${player}... Your total par was: +${finalScore}`)
}else {
    console.log (`Good game, ${player}. Your total par was: ${finalScore}`)
}

