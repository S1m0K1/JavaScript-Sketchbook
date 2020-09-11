let message = prompt("Tell me something in 140 characters or less.");
// let response = alert("You've used " + message.length + " characters. You have " + (140-message.length) + " characters remaining.");

// if (message.length > 140) {
//     alert("Your message is " + message.length + " characters. You are " + (message.length-140) + " characters over!");
// }

// ---
// Limit a piece of text to 140 characters, 
// and append an ... if it's over 140 characters in length: 
// ---

let array = message.split('')
// console.log(array);

let tweet = array.splice(0, 140).join('');
// console.log(tweet + "...");

alert(tweet + "...");

let message = prompt("Tell me something in 140 characters or less.");
if (message.length > 140) {
    alert(message.slice(0, 140) + "...");
} else {
    alert(message);
}

// ---
// Codewars Kata: Convert string to camel case 
// toCamelCase("the-stealth-warrior") // returns "The_Stealth_Warrior"

function toCamelCase(str) {
    let words = str.split("-");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    let sentence = words.join("_");
    return (console.log(sentence));

}

toCamelCase("the-stealth-warrior");

// ---
// Codewars Kata: Convert string to camel case 
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

function toCamelCase(string) {
    let words = string.split("-");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    let sentence = words.join("");
    return (console.log(sentence));

}

toCamelCase("the-stealth-warrior");

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" 

function toCamelCase (string) {
    let words = string.split("_");
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  let sentence = words.join("");
    return(console.log(sentence));
  
  }
  
  toCamelCase ("the_stealth_warrior");

// ---
// Codewars Kata: Convert string to camel case 
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"