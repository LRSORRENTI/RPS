console.log('hello world from ts')

const cpuChoices = ['rock', 'paper', 'scissors'];

const getCpuChoice = () => {
    // first get random number:
    const randNum = (Math.floor(Math.random() * cpuChoices.length) + 1);
    // console.log(randNum)
    // initiate finalchoice var
    let finalChoice;
    randNum === 1 ? finalChoice = 'rock' :
    randNum === 2 ? finalChoice = 'paper' :
    randNum === 3 ? finalChoice = 'scissors':
    randNum === null;
    // check through all the cases, maybe use switch 
    // statment ? seems to work for now, default to null 
    console.log(finalChoice)
}


getCpuChoice()
