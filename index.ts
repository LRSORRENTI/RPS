const rock: HTMLElement = document.getElementById('rock')!;
const paper: HTMLElement = document.getElementById('paper')!;
const scissors: HTMLElement = document.getElementById('scissors')!;

let playerChoice: string = '';

const getPlayerChoice = (choice: string) => {
    playerChoice = choice;
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
    // first get random number:
    const randNum: number = (Math.floor(Math.random() * 3) + 1);
    // console.log(randNum)
    // initiate finalchoice var
    let finalChoice: string;
    randNum === 1 ? finalChoice = 'rock' :
    randNum === 2 ? finalChoice = 'paper' :
    finalChoice = 'scissors'
    console.log(finalChoice)
    return finalChoice;
    // check through all the cases, maybe use switch 
    // statement?
}


const playGame = () => {
    const cpuChoice = getCpuChoice();
    
}
