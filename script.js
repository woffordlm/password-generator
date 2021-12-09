// declaring global variables and the array that confimrmed characters will be sent to
var generateBtn = document.getElementById("generate");
var allCharactersConfirmed = []


// This funciton is a sequence that asks the user password criteria
function generatePassword(){
  //  resettin the array so that the application can be used as many times as the user likes. 
  allCharactersConfirmed = [];
  var passwordLength = prompt("How many characters do you want the password to contain?");
  
  // This if statment directs the user to pick a password length between 8 through 128
  // if the password does not meet the criteria then the user is sent back into the generate password function
  if (passwordLength < 8 || passwordLength > 128){
      confirm("Password must be at least 8 characters and no more than 128 characters.");
      generatePassword();
    } 
  // If the number of characters meets the requirement, run through the if statements
  else if (passwordLength >= 8 || passwordLength <= 128){
    var confirmCharacterCount = alert("Your password will contain " + passwordLength + "characters.")
      
    // These statments will run the user through a series of confirming criteria and then validation of the criteria
    // if the user confirms that they want a specific criteria then the selected characters will be pushed to the global array of characters  
    var confirmSpecialCharacters = confirm("Click OK to cinfirm you want special characters.");
      if (confirmSpecialCharacters === true){
        var specialTrue = alert ("You password will contain special characters.") 
        allCharactersConfirmed.push('~','!','@','#','$','%','^','&','*','_','-','+','=', '{','[','}',']','|')
        }
    var confirmNumeric = confirm("Confirm that you want numbers in your password.");
      if (confirmNumeric === true){
        var numbersTrue = alert ("Your password will include numbers.")
        allCharactersConfirmed.push('0','1','2','3','4','5','6','7','8','9')
      }
    var confirmLowerCase = confirm("Confirm that you want lowercase characters in your password.");
      if (confirmLowerCase === true){
        allCharactersConfirmed.push('q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m')
        var lowerTrue = alert("Your password will contain lowercase letters.")      
      }
    var confirmUpperCase = confirm ("Confirm that you want uppercase characters in your password");
      if (confirmUpperCase === true){
        allCharactersConfirmed.push('Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M')
        var upperTrue = alert("Your password will include uppercase letters.")    
      }  
      
      // This last condtional will send checks to see that there is at least 10 chracters in the array
      // the number characters are the smallest amount of character choices so they act as the minimum requirement 
      // if the the criteria does not meet the requirement then the user is sent back into the generate password funtion
    if (allCharactersConfirmed.length < 10){
      var lastValidation = confirm("You need to pick at least one character type to be in your password.")
      generatePassword();
      }
    }
    // added an emply array to push the selected characters to
    var shuffledPassword = ""

    for (var i = 0; i < passwordLength; i++) {
      shuffledPassword = shuffledPassword + allCharactersConfirmed[Math.floor(Math.random() * allCharactersConfirmed.length)];
    }
  
   return shuffledPassword;
}
// this function takes the result of the generate password and stores it in a variable
// this variable is thien placed in the element in the html where the password is presented
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// // this event listener listens for a click and then initiates the writePassword function once clicked
generateBtn.addEventListener("click", writePassword);


