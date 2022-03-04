const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('enter your password here', function(password)(

if(password.legnhth >= 10){
    console.log("pasword meets the length requiremnt")
}else(password.length < 10){
    console.log('password is too short')
})

reader.close()


// console.log("Welcome to the password validator tool")
// reader.question("Validate your password here:", function(input){
//     tokens = input.split('');
//     if (input >= 10){
//         console.log("Success")
//     } else {
//         console.log("failure")
//     }
// });



    