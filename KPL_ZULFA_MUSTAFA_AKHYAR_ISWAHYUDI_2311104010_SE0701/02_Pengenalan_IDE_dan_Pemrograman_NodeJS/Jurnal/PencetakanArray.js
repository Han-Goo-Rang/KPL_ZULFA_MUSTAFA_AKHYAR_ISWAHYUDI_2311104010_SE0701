const readline = require('readline');

function bagianB() {
    const arr = Array.from({ length: 50 }, (_, index) => index);
    arr.forEach((num) => {
        let output = `${num}`;
        if (num % 2 === 0 && num % 3 === 0) {
            output += " #$#$";
        } else if (num % 2 === 0) {
            output += " ##";
        } else if (num % 3 === 0) {
            output += " $$";
        }
        console.log(output);
    });
}

bagianB();