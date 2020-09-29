// Assignment Code
var generateBtn = document.querySelector("#generate");

var CharNumber = prompt("How many characters should your password contain?")
var confirmNumbers = confirm("Click ok to include numbers");
  var confirmLower = confirm("Click ok to include lower case letters");
  var confirmUpper = confirm ("Click ok to include uppercase letters");
  var confirmSpecial = confirm ("Click ok to include special characters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (confirmNumbers === true) {
   for (var i = 0; i < 10; i++) 
    var num = math.floor(math.random() * 10) + 1;
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

