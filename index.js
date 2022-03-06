// code your solution here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){

    const part1 = 'You are';

    return function (adj = "special"){

    const part2 = 'worker';

        return `${part1} ${flair}${adj}${flair}!`;
    }

}
wrapAdjective()();