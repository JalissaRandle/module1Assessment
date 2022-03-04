const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool")
reader.question("Validate your password here:", function(input){
    tokens = input.split('');
    if (input >= 10){
        console.log("Success")
    } else {
        console.log("failure")
    }
});



    