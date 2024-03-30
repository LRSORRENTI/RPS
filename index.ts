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


getCpuChoice()
