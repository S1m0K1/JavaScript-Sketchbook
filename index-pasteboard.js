// Codecademy Conditionals
// Build a Magic-8 Ball game using conditionals

let question = prompt("What is it you wish to know?");
// console.log(question);

let randomNumber = question; 
randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);

switch (randomNumber) {
  case 1:
  alert("It is decidedly so.");
  break;
  case 2:
  alert("Without a doubt.");
  break;
  case 3:
  alert("You may rely on it.");
  break;
  case 4:
  alert("Most likely.");
  break;
  case 5:
  alert("Outlook good.");
  break;
  case 6:
  alert("Signs point to yes.");
  break;
  case 7:
  alert("Reply hazy, try again.");
  break;
  case 8:
  alert("Cannot predict now.");
  break;
  case 9:
  alert("Concentrate and ask again.");
  break;
  case 10:
  alert("Don't count on it.");
  break;
  case 11:
  alert("My sources say no.");
  break;
  case 12:
  alert("Outlook not so good.");
  break;
  case 13:
  alert("Very doubtful.");
  break;
  default:
  alert("You know the true answer.");
}

// ---
// Codewars Kata: Convert string to camel case 
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase (string) {
    let words = string.split(/-|_/);
    // console.log(words);

    // Note the Regular Expression! See more:
    // https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript

    // See more on best practice for splitting strings into arrays: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  let sentence = words.join("");
    return(console.log(sentence));
  
  }
  
  toCamelCase ("the-stealth-warrior");

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

function toCamelCase(string) {
    let words = string.split("_");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    let sentence = words.join("");
    return (console.log(sentence));
}

toCamelCase("the_stealth_warrior");


// ---
// Limit a piece of text to 140 characters, 
// and append an ... if it's over 140 characters in length: 

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
// Using basic maths to count characters

let message = prompt("Tell me something in 140 characters or less.");
// let response = alert("You've used " + message.length + " characters. You have " + (140-message.length) + " characters remaining.");

// if (message.length > 140) {
//     alert("Your message is " + message.length + " characters. You are " + (message.length-140) + " characters over!");
// }