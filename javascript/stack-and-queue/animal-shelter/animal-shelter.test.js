
const { Animal, AnimalShelter } = require('../animal-shelter/animal-shelter');

describe('AnimalShelter', () => {
  let shelter;
  beforeEach(() => {
    shelter = new AnimalShelter();
  });
  it('should successfully enqueue an animal into the shelter', () => {
    const dog = new Animal('dog', 'Buddy');
    shelter.enqueue(dog);
    expect(shelter.dequeue('dog')).toBe(dog);
  });
  it('should successfully enqueue multiple animals into the shelter', () => {
    const dog1 = new Animal('dog', 'Buddy');
    const dog2 = new Animal('dog', 'Max');
    const cat1 = new Animal('cat', 'Whiskers');
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat1);
    expect(shelter.dequeue('dog')).toBe(dog1);
    expect(shelter.dequeue('dog')).toBe(dog2);
    expect(shelter.dequeue('cat')).toBe(cat1);
  });
  it('should successfully dequeue an animal from the shelter', () => {
    const cat = new Animal('cat', 'Whiskers');
    shelter.enqueue(cat);
    expect(shelter.dequeue('cat')).toBe(cat);
  });
  it('should return null when calling dequeue on an empty shelter', () => {
    const result = shelter.dequeue('cat');
    expect(result).toBeNull();
  });
  it('should return null when calling dequeue with an invalid preference', () => {
    expect(shelter.dequeue('bird')).toBeNull();
  });
  it('should return null when calling dequeue with a preference that has no animals', () => {
    const dog = new Animal('dog', 'Buddy');
    shelter.enqueue(dog);
    expect(shelter.dequeue('cat')).toBeNull();
  });
  it('should return null when calling dequeue on an empty shelter', () => {
    expect(shelter.dequeue('dog')).toBeNull();
  });
  it('should return true if the shelter is empty', () => {
    expect(shelter.isEmpty()).toBe(true);
  });
  it('should return false if the shelter is not empty', () => {
    const dog = new Animal('dog', 'Buddy');
    shelter.enqueue(dog);
    expect(shelter.isEmpty()).toBe(false);
  });
});

