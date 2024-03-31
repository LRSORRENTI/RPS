const rock: HTMLElement = document.getElementById('rock')!;
const paper: HTMLElement = document.getElementById('paper')!;
const scissors: HTMLElement = document.getElementById('scissors')!;

let playerChoice: string = '';

const playerChoiceImage = document.getElementById('playerChoiceImage') as HTMLImageElement;
const cpuChoiceImage = document.getElementById('cpuChoiceImage') as HTMLImageElement;

const getPlayerChoice = (choice: string) => {
    playerChoice = choice;
    playerChoiceImage!.src = `./imgs/${choice}.png`;
    console.log(`Player choice is ${choice}`)
    playGame();
};

// listen for player choice, and call getPlayerChoice,
// passing in the respected value
rock.addEventListener('click', () => {
    console.log('clicked rock');
    getPlayerChoice('rock');
});
paper.addEventListener('click', () => {
    console.log('clicked paper');
    getPlayerChoice('paper');
});
scissors.addEventListener('click', () => {
    console.log('clicked scissors');
    getPlayerChoice('scissors');
});



// CPU selection:
const getCpuChoice = (): string => {
    const choices = ['rock', 'paper', 'scissors'];
    const randIndex = Math.floor(Math.random() * choices.length);
    const cpuChoice = choices[randIndex];
    cpuChoiceImage!.src = `./imgs/${cpuChoice}.png`; // Update CPU's choice image
    console.log(`CPU chose: ${cpuChoice}`);
    return cpuChoice;
}

interface OutcomeMap {
    [key: string]: {
        [key: string]: string
    };
};

const outcomes: OutcomeMap = {
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

const playGame = () => {
    const cpuChoice = getCpuChoice();
    const result = outcomes[playerChoice][cpuChoice];
    console.log(`CPU choice ${cpuChoice}, player choice ${playerChoice}`);
    setTimeout(() => {
        alert(result);
      }, "1000" as any);

}
