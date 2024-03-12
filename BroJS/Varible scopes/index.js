// variable scope- where variable is recognized and accessible (local vs global)

let x = 3; //Global scope variable accessible throughout the program

function addTwo() {
  //local scope variable accesssible within the block
  //let x = 2;
  console.log(x + 2);
}

addTwo();

function addThree() {
  //local scope variable accessible within the block
  //let x = 2,
  y = 3;
  console.log(x + y + 4);
}

addThree();
