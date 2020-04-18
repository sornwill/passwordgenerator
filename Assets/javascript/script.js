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

// BASIC FORMATS
var lowerABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z"]; //26 chars
var upperABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z"]; // 26 chars
var nums = ["0","1","2","3","4","5","6","7","8","9"]; // 10 chars 
var specChars = ["!","@","#","$","%","&","?"]; //7 chars
// COMBINATION OF 2
var lowUpABC = lowerABC.concat(upperABC); // 52 chars Lowercase + Uppercase
var lowNumAbc = lowerABC.concat(nums); // 36 chars Lowercase + Numbers
var lowSpecABC = lowerABC.concat(specChars); // 31 chars Lowercase + Special Characters
var upNumABC = upperABC.concat(nums); // 36 chars Uppercase + Numbers
var upSpecABC = upperABC.concat(specChars); // 31 chars Uppercase + Special Characters
var numSpecialChars = nums.concat(specChars); //17 chars Special Characters + Numbers
// COMBINATION OF 3
var lowUpNumABC = lowerABC.concat(upperABC,nums); // 62 chars Lowercase + Uppercase + Numbers
var lowUpSpecABC = lowerABC.concat(upperABC,specChars); // 59 chars Lowercase + Uppercase + Special Characters
var lowNumSpec = lowerABC.concat(nums,specChars); // 41 chars Lowercase + Numbers + Special Character
var upperNumSpec = upperABC.concat(nums,specChars); // 41 chars Uppercase + Numbers + Special Characters
//all  4
var allChars = lowerABC.concat(upperABC,nums,specChars); //69 chars All characters

// FOR CHARACTER GENERATION
function randomAllChars(){
  return allChars[Math.floor(Math.random()*allChars.length)];
}

function randomLower(){
  return lowerABC[Math.floor(Math.random()*lowerABC.length)];
}

function randomUpper(){
  return upperABC[Math.floor(Math.random()*upperABC.length)];
}

function randomNum(){
  return nums[Math.floor(Math.random()*nums.length)];
}

function randomSpecial(){
  return specChars[Math.floor(Math.random()*specChars.length)];
}


const random = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  special: randomSpecial
};
// Prompts
alert("Welcome to Password Generator!");
var passLength = prompt("Please input how long of a password. Min : 8. Max : 128.");
getLength();

var askLower = prompt("Would you like lowercase letters? type 'yes' or 'no'.");

var askUpper = prompt("Would you like uppercase letters? Type 'yes' or 'no',");

var askNum = prompt("Would you like numbers? type 'yes' or 'no'.");

var askSpecial = prompt("Would you like special characters such as '!,@,#,$,%,&,?'? Type 'yes' or 'no'.");

var length;

genPass();

function getLength() {
    if(passLength >= 8 && passLength <= 128){
     alert("Your desired length : " + passLength);
   } else {
     alert("Please input a number between 8 and 128.");
   }
   return passLength;
  }

  function genPass() {
    for(var length = 0; length <= passLength; length++){
      if(askLower === "yes" && askUpper === "yes" && askNum === "yes" && askSpecial === "yes"){
        alert("true");
      }else{
        alert("false");
      }
    }
    
  }





// testing with console.log
console.log(randomAllChars(allChars));
console.log(randomLower(random.lower));
console.log(randomUpper(upperABC));
console.log(randomNum(nums));
console.log(randomSpecial(specChars));


