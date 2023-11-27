// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  prompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var passwordLength;
var lowerCase;
var allowableCharacters;
var passwordLowerCase;
var upperCase;
var passwordUpperCase;
var number;
var passwordNumeric;
var specialCaracter;
var passwordSpecial;

function prompts() {
  //Length of the password:
  passwordLength = prompt(
    "Choose password length of at least 8 characters and no more than 128 characters"
  );

  //validation of password length
  while (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    passwordLength = prompt(
      "You can do it! Try again. Choose password length between 8 and 128 characters!"
    );
  }

  // lowercase
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  allowableCharacters = "";
  passwordLowerCase = confirm("Do you want to include lower case characters?");
  if (passwordLowerCase) {
    allowableCharacters += lowerCase;
  }

  // uppercase
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordUpperCase = confirm("Do you want to include upper case characters?");

  if (passwordUpperCase) {
    allowableCharacters += upperCase;
  }

  //numbers
  number = "0123456789";
  passwordNumeric = confirm("Do you want to include numeric characters?");
  if (passwordNumeric) {
    allowableCharacters += number;
  }

  //special characters
  specialCaracter = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
  passwordSpecial = confirm("Do you want to include special characters?");

  if (passwordSpecial) {
    allowableCharacters += specialCaracter;
  }

  // Validation and reload
  if (
    !passwordLowerCase &&
    !passwordUpperCase &&
    !passwordNumeric &&
    !passwordSpecial
  ) {
    if (alert("Please choose at least one character type!")) {
    } else window.location.reload();
  }
}
// generate password
function generatePassword() {
  password = " ";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowableCharacters.length);
    var randomCharacter = allowableCharacters[randomIndex];
    password += randomCharacter;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
