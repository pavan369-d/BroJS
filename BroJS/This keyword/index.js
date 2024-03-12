// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

const person1 = {
  name: "Levi",
  favFood: "noodles",
  display: function () {
    console.log(`I like ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

//person1.display();
//person1.eat();

const person2 = {
  name: "hange",
  favFood: "ricecraker",
  display: function () {
    console.log(`I like ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};
//person2.display();
//person2.eat();

const person3 = {
  name: "hange",
  favFood: "ricecraker",
  display: () => {
    console.log(`I like ${this.favFood}`);
  },
  eat: () => {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};
// if we use this keyword in arrow function this refers to window object not the object the this keyword is in
person3.display();

person3.eat();
