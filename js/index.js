"use strict";
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var playerChoice = '';
var getPlayerChoice = function (choice) {
    playerChoice = choice;
    console.log("Player choice is ".concat(choice));
    playGame();
};
// listen for player choice, and call getPlayerChoice,
// passing in the respected value
rock.addEventListener('click', function () {
    console.log('clicked rock');
    getPlayerChoice('rock');
});
paper.addEventListener('click', function () {
    console.log('clicked paper');
    getPlayerChoice('paper');
});
scissors.addEventListener('click', function () {
    console.log('clicked scissors');
    getPlayerChoice('scissors');
});
// CPU selection:
var getCpuChoice = function () {
    // first get random number:
    var randNum = (Math.floor(Math.random() * 3) + 1);
    // console.log(randNum)
    // initiate finalchoice var
    var finalChoice;
    randNum === 1 ? finalChoice = 'rock' :
        randNum === 2 ? finalChoice = 'paper' :
            finalChoice = 'scissors';
    console.log(finalChoice);
    return finalChoice;
    // check through all the cases, maybe use switch 
    // statement?
};
var playGame = function () {
    var cpuChoice = getCpuChoice();
};
