const prompt = require('prompt-sync')({ signit: true });


let x = - 2;
let y = - 2;

while (true) { 

    const choice = prompt('Is this the right store in the mall? Would like to go [up] , [down] , [left], [right] ?');



    if (choice === 'up') {
        console.log('Are we at the right store? Would you like to walk "up", "right", "down", or "left" ?');
        y = y + 1;
    }

    else if (choice === 'down') {
        console.log('Are we at the right store? Would you like to walk  "up", "right", "down", or "left"?');
        y = y - 1;
    }


    else if (choice === 'left') {
        console.log('Are we at the right store? Would you like to walk "up", "right", "down", or "left"?');
        x = x - 1;

    }

    else if (choice === 'right') {
        console.log('Are we at the right store? Would you like to walk  "up", "right", "down" or "left"?');
        x = x + 1;

    } 
    
    else {
        console.log(' Are you sure??? ');
    }
    
    console.log('Your Coordinates:', x, 'x and', y, 'y in the mall');

    if (x === 2 && y === 2) {
        console.log('You made it to your store.');
    }
}