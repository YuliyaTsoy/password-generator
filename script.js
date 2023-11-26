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

//validation of password length
if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
  alert("Please choose password length between 8 and 128 characters!")
  
} window.location.reload();

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
