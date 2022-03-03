console.log(" HW 5 ex 5 - scratch area 2");

// in class example prompt for values
// TODO: define the Dog class here
class Dog {
  constructor(inName, inSpecies, inSize) {
    this.name = inName;
    this.species = inSpecies;
    this.size = inSize;
  }
  bark() {
    return (this.size > 60) ? "Grrr! Grrr!" : "Woof! Woof!"; 
  }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);