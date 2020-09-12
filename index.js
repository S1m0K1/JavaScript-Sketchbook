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