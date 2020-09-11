// alert(prompt("Tell me something in 140 characters or less.").slice(0,140) + "...");

// let userName = prompt("What is your name?").toLowerCase();

// let firstLetter = userName.slice(0,1).toUpperCase();
// let restOfName = userName.slice(1,userName.length);

// userName = firstLetter + restOfName;

// alert("Hello, " + userName);

let string = prompt("Write a sentence in lower case only.")

function toCamelCase(str){
    let words = str.split(" ");
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  let sentence = words.join(" ");
    return(alert(sentence));
  
  }
  
  toCamelCase (string);