"use strict";
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var playerChoice = '';
var playerChoiceImage = document.getElementById('playerChoiceImage');
var cpuChoiceImage = document.getElementById('cpuChoiceImage');
var getPlayerChoice = function (choice) {
    playerChoice = choice;
    playerChoiceImage.src = "./imgs/".concat(choice, ".png");
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
    var choices = ['rock', 'paper', 'scissors'];
    var randIndex = Math.floor(Math.random() * choices.length);
    var cpuChoice = choices[randIndex];
    cpuChoiceImage.src = "./imgs/".concat(cpuChoice, ".png"); // Update CPU's choice image
    console.log("CPU chose: ".concat(cpuChoice));
    return cpuChoice;
};
;
var outcomes = {
    'rock': {
        'rock': 'Game is a tie!',
        'paper': 'CPU wins!',
        'scissors': 'Player wins!'
    },
    'paper': {
        'rock': 'Player wins!',
        'paper': 'Game is a tie!',
        'scissors': 'CPU wins!'
    },
    'scissors': {
        'rock': 'CPU wins!',
        'paper': 'Player wins!',
        'scissors': 'Game is a tie!'
    }
};
var playGame = function () {
    var cpuChoice = getCpuChoice();
    var result = outcomes[playerChoice][cpuChoice];
    console.log("CPU choice ".concat(cpuChoice, ", player choice ").concat(playerChoice));
    setTimeout(function () {
        alert(result);
    }, "1000");
};
