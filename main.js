const prompt = require('prompt-sync')({signit : true});


let x = 0;
let y = 0; 

while (true) {

const choice = prompt('Your coordinates are (0,0). Would like to go [up] , [down] , [left], [right] ?'); 


if (choice === 'up' ) {
    console.log('Your coordinates are (0, 1). Would you like to go "up", "right", "down", or "left" ?');
    y = y + 1;
}

else if (choice === 'down' ) {
    console.log('Your coordinates are (0, -1). Would you like to go "up", "right", "down", or "left"?');
    y = y - 1; 
}


else if (choice === 'left') {
    console.log(' Your coordinates are (-1, 0). Would you like to go "up", "right", "down", or "left"?');
    x = x - 1;
    
}

else if (choice === 'right') {
    console.log(' Your coordinates are (0, 1). Would you like to go "up", "right", "down" or "left"?');
    x = x + 1; 

} else {
    console.log('error');
}
console.log('Your Coordinates:', x , 'x and' , y,'y'); 
}




    






