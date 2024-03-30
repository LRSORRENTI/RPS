const rock: HTMLElement = document.getElementById('rock')!;
const paper: HTMLElement = document.getElementById('paper')!;
const scissors: HTMLElement = document.getElementById('scissors')!;

rock.addEventListener('click', () => {
    console.log('clicked rock')
});
paper.addEventListener('click', () => {
    console.log('clicked paper')
});
scissors.addEventListener('click', () => {
    console.log('clicked scissors')
});

const getPlayerChoice = () => {

};


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
    return finalChoice!;
    // check through all the cases, maybe use switch 
    // statement?
}
getCpuChoice();

const playGame = () => {

}
