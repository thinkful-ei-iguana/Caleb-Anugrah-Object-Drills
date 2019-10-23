'use strict';

// 1. Object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration () {
    return (this.water / this.flour)*100;
  }
};

// console.log(loaf.flour);
// console.log(loaf.water);

// console.log(loaf.hydration());


// 2. Iterating over an object's properties

const random = {
  foo: 17,
  bar: 'what?',
  fum: true,
  quux: 1000,
  spam: false
};

for (const property in random) {
//  console.log(`${property} ${random[property]}`)
}

// 3. Arrays in objects

const feast = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
let fourthMeal = feast.meals;

//console.log(fourthMeal[3]);

// 4. Arrays of objects

const michaelScott = {
  name: 'michael',
  jobTitle: 'regional manager'
};
const dwight = {
  name: 'dwight',
  jobTitle: 'assistant to the regional manager',
};
const jim = {
  name: 'jim',
  jobTitle: 'Salesperson'
};

const theOffice = [michaelScott, dwight, jim];

for(let i = 0; i < theOffice.length; i++) {
  const person = theOffice[i];
 // console.log(person.name +' - '+ person.jobTitle);

}

// 5. Properties that aren't there