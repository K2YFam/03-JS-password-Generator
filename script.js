// Assignment Code

function generatePassword() {
  
  // variable to set password length
  var passLength = "";

  // Password
  while (
    isNaN(parseInt(passLength)) ||
    parseInt(passLength) < 8 ||
    parseInt(passLength) > 128
  ) {
    passLength = prompt("Password length needs to be between 8-128 characters");
  }
console.log(passLength)
  // Shows lowercase, uppercase, numeric, and/or special characters
  var confirmLower = confirm("Add lowercase?");
  var confirmNumber = confirm("Add numbers?");
  var confirmUpper = confirm("Add uppercase?");
  var confirmChar = confirm("Add characters?");

  // if user answered yes, Add togther varibles of letters and numbers for passcode
  var passCombo = "";
  
  // Character, Numbers and letters for passcode 
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "123456789";
  var upper = lower.toUpperCase();
  var characters = "!#$%&'()*+,-./:;<=>?@^_`{|}~";
// if user picks another measure it will be put to the passcode
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

  //Last password after prompt
  var finalPass = "";
  for (let index = 0; index < passLength; index++) {
    var randomNumber = Math.floor(Math.random() * passCombo.length);
    finalPass += passCombo[randomNumber];
  }
  console.log(finalPass);
  return (finalPass);
}

// Write password to #password process
var generateBtn = document.querySelector("#generate");

// Write password to #password process
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event to create password button
generateBtn.addEventListener("click", writePassword);
