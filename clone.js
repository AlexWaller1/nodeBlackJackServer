// clone.js

class Clone {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  greeting() {
    console.log(`Welcome to the world, ${this.name}`);
  }
}

module.exports = Clone;
