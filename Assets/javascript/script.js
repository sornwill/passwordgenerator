// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompts
alert("Welcome to Password Generator!");
var passLength = prompt("Please indicate how long of a password. Min : 8. Max : 128.");

var askLower = prompt("Would you like lowercase letters? type 'yes' or 'no'.");
var askUpper = prompt("Would you like uppercase letters? Type 'yes' or 'no',");
var askNum = prompt("Would you like numbers? type 'yes' or 'no'.");
var askSpecial = prompt("Would you like special characters such as '!,@,#,$,%,&,?'? Type 'yes' or 'no',");
//Generator functions





// Arrays of different combinations 


var lowerABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z"]; //26 chars

var upperABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z"]; // 26 chars

var nums = ["0","1","2","3","4","5","6","7","8","9"]; // 10 chars 

var specChars = ["!","@","#","$","%","&","?"]; //7 chars

var lowUpABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z"]; // 52 chars

var lowNumAbc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]; // 36 chars

var lowSpecABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","!","@","#","$","%","&","?"]; // 31 chars

var upNumABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]; // 36 chars

var upSpecABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","!","@","#","$","%","&","?"]; // 31 chars

var numSpecialChars = ["!","@","#","$","%","&","?","0","1","2","3","4","5","6","7","8","9"]; //17 chars

