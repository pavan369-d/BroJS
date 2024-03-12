// while loop = repeat some code WHILE some condition is true

//prompt until user name is entered

let userName = "";
/*
while (userName === " ") {
  userName = window.prompt("Enter your name: ");
}
*/

//console.log(userName);
let loggedIn = false;
let passWord = "";

while (userName === "" && passWord === "") {
  userName = window.prompt("Enter name: ");
  passWord = window.prompt("Enter password: ");

  if (userName === "Pavan" && passWord === "pavanV") {
    console.log("Your credentials are correct");
  } else {
    console.log("Please enter your credentials");
  }
}

while (!loggedIn) {
  userName = window.prompt("Enter your name: ");
  passWord = window.prompt("Enter your password");

  if (userName == "myUserName" && passWord == "mypassword") {
    loggedIn = true;
    console.log("You are loggged in!");
  } else {
    console.log("Invalid credentials! Please try again");
  }
}
