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

const random = {
  foo: 17,
  bar: 'what?',
  fum: true,
  quux: 1000,
  spam: false
};

for (const property in random) {
  console.log(`${property} ${random[property]}`)
}

// 3. Arrays in objects

const feast = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
let fourthMeal = feast.meals;

console.log(fourthMeal[3]);

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
    console.log(`${person['jobTitle']} ${person['name']} doesn't report to anybody.`);
  } else {
    console.log(`${person['jobTitle']} ${person['name']} reports to ${person['boss']}.`);
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

function createCharacter (name, nickname, race, origin, attack, defense, weapon) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe() {
      console.log(`${this.name} is a ${this.race} of the ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight(character) {
      let x = this.attack - character.defense;
      if (x < 0) {
        x = 0;
      }
      let y = character.attack - this.defense;
      if (y < 0) {
        y = 0;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Sting and the Barrow-blades'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Anduril', 6, 8, 'Dunnedain'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'a bow and arrow'),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 9, 4, 'Hadhafang')
];

characters.find(character => character.nickname === 'aragorn').describe();

const hobbits = characters.filter(character => character.race === 'Hobbit');

const strong = characters.filter(character => character.attack > 5);

//characters.forEach(character => console.log(character.describe()));