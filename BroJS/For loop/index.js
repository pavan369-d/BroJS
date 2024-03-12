// for loop = repeat some code a LIMITED amount of times

for (let i = 10; i >= 0; i--) {
  console.log(i);
  if (i === 0) {
    console.log("Happy New year!");
  }
}

for (let i = 0; i < 20; i++) {
  if (i === 13) {
    //continue; - skips 13 and prints remaining numbers
    break; // prints upto 12 and when number is 13 it breaks out of loop
  } else {
    console.log(i);
  }
}
