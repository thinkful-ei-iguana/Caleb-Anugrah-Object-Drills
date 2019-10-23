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

// 4. Arrays of objects AND 5. Properties that aren't there


const michaelScott = {
  name: 'michael',
  jobTitle: 'regional manager'
};
const dwight = {
  name: 'dwight',
  jobTitle: 'assistant to the regional manager',
  boss: 'michael'
};
const jim = {
  name: 'jim',
  jobTitle: 'Salesperson',
  boss: 'michael'
};

const theOffice = [michaelScott, dwight, jim];

for(let i = 0; i < theOffice.length; i++) {
  const person = theOffice[i];
  
  if (person['boss'] === undefined) {
    //console.log(`${person['jobTitle']} ${person['name']} doesn't report to anybody.`);
  } else {
    //console.log(`${person['jobTitle']} ${person['name']} reports to ${person['boss']}.`);
  }
}

// 6. Cracking the code

const cipher ={
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decode(word) {
  let firstChar = word[0];
  let num = cipher[firstChar];
 
  if (word[0] in cipher) {
    return word[num - 1];
  }
  else {
    return ' ';
  } 
}

function decodeWords(sentence) {
  let finalSentence = '';
  const sentArr = sentence.split(' ');

  for (let i = 0; i < sentArr.length; i++) {
   
    let letter = decode(sentArr[i]);
  
    finalSentence = finalSentence + letter;
  }
  return finalSentence;
}

//console.log(decodeWords('craft block argon meter bells brown croon droop'));

//7. Factory Functions with LOTR
