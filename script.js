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
    
    else if (passwordLength >= 8 || passwordLength <= 128){
      var confirmSpecialCharacters = confirm("Click OK to cinfirm you want special characters.");
        if (confirmSpecialCharacters === true){
          allCharactersConfirmed.push('~','!','@','#','$','%','^','&','*','_','-','+','=', '{','[','}',']','|')   
        }
      var confirmNumeric = confirm("Confirm that you want numbers in your password.");
        if (confirmNumeric === true){
          allCharactersConfirmed.push('0','1','2','3','4','5','6','7','8','9')
        }
      var confirmLowerCase = confirm("Confirm that you want lowercase characters in your password.");
        if (confirmLowerCase === true){
          allCharactersConfirmed.push('q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m')
        }
      var confirmUpperCase = confirm ("Confirm that you want uppercase characters in your password");
        if (confirmUpperCase === true){
        allCharactersConfirmed.push('Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M')
         }     
    } 


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

 
