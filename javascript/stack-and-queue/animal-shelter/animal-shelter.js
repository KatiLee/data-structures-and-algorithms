class Animal {
    constructor(species, name) {
      this.species = species;
      this.name = name;
    }
  }
  class AnimalShelter {
    constructor() {
      this.dogs = [];
      this.cats = [];
    }
    enqueue(animal) {
      if (animal.species === 'dog') {
        this.dogs.push(animal);
      } else if (animal.species === 'cat') {
        this.cats.push(animal);
      }
    }
    dequeue(pref) {
      if (pref === 'dog') {
        if (this.dogs.length > 0) {
          return this.dogs.shift();
        } else {
          return null;
        }
      } else if (pref === 'cat') {
        if (this.cats.length > 0) {
          return this.cats.shift();
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    isEmpty() {
      return this.dogs.length === 0 && this.cats.length === 0;
    }
  }
  module.exports = { Animal, AnimalShelter };