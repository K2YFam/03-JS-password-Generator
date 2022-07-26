// Assignment Code

function generatePassword() {
  
  // variable to set password length
  var passLength = "";

  // prompt for password length
  while (
    isNaN(parseInt(passLength)) ||
    parseInt(passLength) < 8 ||
    parseInt(passLength) > 128
  ) {
    passLength = prompt("Password length needs to be between 8-128 characters");
  }
console.log(passLength)
  // confirm what to include lowercase, uppercase, numeric, and/or special characters
  var confirmLower = confirm("Add lowercase?");
  var confirmNumber = confirm("Add numbers?");
  var confirmUpper = confirm("Add uppercase?");
  var confirmChar = confirm("Add characters?");

  // if user answered yes, combined variable of letters and numbers for password
  var passCombo = "";
  
  // letters numbers and characters for password
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "123456789";
  var upper = lower.toUpperCase();
  var characters = "!#$%&'()*+,-./:;<=>?@^_`{|}~";
// if user selects criteria it will be added to the password
  if (confirmLower) {
    passCombo += lower;
  }
  if (confirmNumber) {
    passCombo += numbers;
  }
  if (confirmUpper) {
    passCombo += upper;
  }
  if (confirmChar) {
    passCombo += characters;
  }
  console.log(passCombo);

  // final password after prompts
  var finalPass = "";
  for (let index = 0; index < passLength; index++) {
    var randomNumber = Math.floor(Math.random() * passCombo.length);
    finalPass += passCombo[randomNumber];
  }
  console.log(finalPass);
  return (finalPass);
}

// Write password to the #password input
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
