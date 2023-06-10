// Array of special characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowerCasedCharacter
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of upper case characters
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// function that asks user what type of password they would like
function userChoices() {
  var length = parseInt(prompt("Choose password length between 8 and 128 characters"));

  if (Number.isNaN(length)) {
    alert("Must be a number");
    return null;
  }
  if (length < 8 || length > 128) {
    alert("Must be equal to or greater than 8 and less than or equal to 128")
    return null;
  }

  var lowercase = confirm("Do you want to use lowercase character(s)");
  var uppercase = confirm("Do you want to use uppercase character(s)");
  var numeric = confirm("Do you want to use numeric values");
  var special = confirm("Do you want to use special characters");


  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    special === false
  ) {
    alert("Please select minimum 1 character type.");
    return null;
  }
  var allChoices = {
    length: length,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };
  return allChoices;
}

// function to get a random index and random character
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//function to create the password, if user doesnt supply anything return null, otherwise we will check what choice they made, and then create a new password out of that choice
function createPassword() {
  var options = userChoices();
  var optionalArray = []
  var promisedArray = []
  var finalArray = []

  if (!options) return null;

  if (options.special) {
    optionalArray = optionalArray.concat(specialCharacters);
    promisedArray.push(getRandom(specialCharacters));

  }
  if (options.numeric) {
    optionalArray = optionalArray.concat(numericCharacters);
    promisedArray.push(getRandom(specialCharacters));

  }
  if (options.uppercase) {
    optionalArray = optionalArray.concat(upperCasedCharacters);
    promisedArray.push(getRandom(upperCasedCharacters));

  }
  if (options.lowercase) {
    optionalArray = optionalArray.concat(lowerCasedCharacters);
    promisedArray.push(getRandom(lowerCasedCharacters));

  }
  for (var i = 0; i < options.length; i++) {
    var possibleArray = getRandom(optionalArray);
    finalArray.push(possibleArray);

  }
  for (var i = 0; i < promisedArray.length; i++) {
    finalArray[i] = promisedArray[i];

  }
  return finalArray.join('');
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input after we have created a password
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);