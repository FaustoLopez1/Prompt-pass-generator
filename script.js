// Assignment Code
var generateBtn = document.querySelector("#generate");

//Add variables
var check;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


// Start Password variable values: 

character = ["!", "#", "<","=", "'", "+", ",", "-", ".", "/", "(", ")", "*", "\:",">", "$", "%", "&", "\;", "?", "@", "[","_", "`", "{", "|", "]", "^",  "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
//  
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion


alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");


// Add event listener to generate button


get.addEventListener("click", function () {
    pwd = generatePassword();
    document.getElementById("password").placeholder = pwd;
});

//function to generate password

function generatePassword() {
    // Asks for user input

    check = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));


    //user validation 


    if (!check) {
        alert("Must pick");
    } else if (check < 8 || check > 128) {
      check = parseInt(prompt("You must choose"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Do you want contain numbers?");
        confirmCharacter = confirm("Do you want special characters?");
        confirmUppercase = confirm("Do you want uppercase letters?");
        confirmLowercase = confirm("Do you want contain lowercase letters?");
    };

    // Else if for 4 negative options


    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose!");

    }
    // if that prompts to determine choices


    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 options


    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 options 


    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 option


    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion


    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:


    for (var i = 0; i < check; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string


    var pwd = password.join("");
    UserInput(pwd);
    return pwd;
}
//password into the textbox


function UserInput(pwd) {
    document.getElementById("password").textContent = pwd;


}
