let message = prompt("Tell me something in 140 characters or less.");
// let response = alert("You've used " + message.length + " characters. You have " + (140-message.length) + " characters remaining.");

// if (message.length > 140) {
//     alert("Your message is " + message.length + " characters. You are " + (message.length-140) + " characters over!");
// }

let array = message.split('')
// console.log(array);

let tweet = array.splice(0,140).join('');
// console.log(tweet + "...");

alert(tweet + "...");

let message = prompt("Tell me something in 140 characters or less.");
if (message.length > 140) {
    alert(message.slice(0,140) + "...");
} else {
    alert(message);
}
