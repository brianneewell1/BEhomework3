//Global Variables
let userChar = [];
let userPass = [];

//System Variables
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%&*()-?_";


// Write password to the #password input
function writePassword() {
  var charNumber = prompt("Choose number of characters for password (between 8-128)");
  if (charNumber < 8) 
  {
    alert ("Password is too short");
    return;
  } 
  if (charNumber > 128) {
    alert ("Password is too long");
    return;
  }

  console.log (charNumber);

  var confirmNumbers = confirm("Click ok to include numbers");
  if(confirmNumbers) {
    userChar.push(...numbers);
  }
  console.log(userChar);

  var confirmLower = confirm("Click ok to include lower case letters");
  if(confirmLower) {
    userChar.push(...lowercase);

    console.log(userChar);
  }
  var confirmUpper = confirm ("Click ok to include uppercase letters");
  if(confirmUpper) {
    userChar.push(...uppercase);

    console.log(userChar);
  }
  var confirmSpecial = confirm ("Click ok to include special characters");
  if(confirmSpecial) {
    userChar.push(...special);

    console.log(userChar);
  }

  for ( let i = 0; i < charNumber; i++ ) {
    userPass.push(userChar[Math.floor(Math.random() * userChar.length)]);
    console.log(userPass.join('+'));
  }

  document.getElementById("password").value = userPass.join("");
}


