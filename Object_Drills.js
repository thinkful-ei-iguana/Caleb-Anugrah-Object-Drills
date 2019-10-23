'use strict';

// 1. Object initializers and methods
const loaf = {
  flour: 300,
  water: 210,
  hydration () {
    return (this.water / this.flour)*100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);

console.log(loaf.hydration());


// 2. Iterating over an object's properties