// Assignment Code
var generateBtn = document.querySelector("#generate");
var allCharactersConfirmed = []



function generatePassword(){
  // prompt question
  var passwordLength = prompt("How many characters do you want the password to contain?");
    if (passwordLength < 8 || passwordLength > 128){
      confirm("Password must be at least 8 characters and no more than 128 characters.");
      generatePassword();
    } 
    // If the number of characters meets the requirement, run through the if statements
    else if (passwordLength >= 8 || passwordLength <= 128){
      var confirmCharacterCount = confirm("Your password will contain " + passwordLength + "characters.")
      var confirmSpecialCharacters = confirm("Click OK to cinfirm you want special characters.");
        if (confirmSpecialCharacters === true){
          allCharactersConfirmed.push('~','!','@','#','$','%','^','&','*','_','-','+','=', '{','[','}',']','|')
          var specialTrue = confirm ("You password will contain special characters.")  
        }
      var confirmNumeric = confirm("Confirm that you want numbers in your password.");
        if (confirmNumeric === true){
          allCharactersConfirmed.push('0','1','2','3','4','5','6','7','8','9')
        var numbersTrue = confirm ("Your password will include numbers.")
        }
      var confirmLowerCase = confirm("Confirm that you want lowercase characters in your password.");
        if (confirmLowerCase === true){
          allCharactersConfirmed.push('q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m')
        var lowerTrue = confirm("Your password will contain lowercase letters.")
        }
      var confirmUpperCase = confirm ("Confirm that you want uppercase characters in your password");
        if (confirmUpperCase === true){
        allCharactersConfirmed.push('Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M')
        var upperTrue = confirm("Your password will include uppercase letters.")
      }  
      console.log(allCharactersConfirmed)
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
  console.log(shuffledPassword)
   return shuffledPassword;
    }
     
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

 
