// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Length of the password:
var passwordLength = prompt(
  "Choose password length of at least 8 characters and no more than 128 characters"
);

// lowercase
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var allowableCharacters = " ";
var passwordLowerCase = confirm(
  "Do you want to include lower case characters?"
);
if (passwordLowerCase) {
  allowableCharacters += lowerCase;
}

// uppercase
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordUpperCase = confirm(
  "Do you want to include upper case characters?"
);

if (passwordUpperCase) {
  allowableCharacters += upperCase;
}

//numbers
var number = "0123456789";
var passwordNumeric = confirm("Do you want to include numeric characters?");
if (passwordNumeric) {
  allowableCharacters += number;
}

//special characters
var specialCaracter = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
var passwordSpecial = confirm("Do you want to include special characters?");

if (passwordSpecial) {
  allowableCharacters += specialCaracter;
}

// Validation
if (
  !passwordLowerCase &&
  !passwordUpperCase &&
  !passwordNumeric &&
  !passwordSpecial
) {
  alert("Please choose at least one character type!");
}

// generate password
function generatePassword() {
  password = " ";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowableCharacters.length);
    var randomCharacter = allowableCharacters.charAt(randomIndex);
    password += randomCharacter;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
