'use strict';

const LinkedList = ('./LinkedList');

class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }

    hash(key) {
        let characters = key.split('');
        let asciiSum = characters.reduce((sum, character) => {
            return sum + character.charCodeAt(0);
        }, 0);

        let initialHash = asciiSum * 599
        return initialHash % this.size;
    }

    set(key, value) {
        let position = this.hash(key);
        let data = { [key]: value }

        this.buckets[position] = data;
    }

    get(key) {
        let position = this.hash(key);
        if (this.buckets[position]) {
            console.log('this.buckets[position]', this.buckets[position]);
            return this.buckets[position][key];
        }
    }

    has(key) {
        let position = this.hash(key);
        let result = this.buckets[position] ? true : false
        return result;
    }

    keys() {
        let results = this.buckets.reduce((keysArr, bucket) => {
            if(bucket){
                return [...keysArr, ...Object.keys(bucket)];
            }
        }, []);
        return results;
    }
}

const table = new HashTable(500);

console.log('table:', table);

let hashOne = table.hash('Roary');
let hashTwo = table.hash('Brigadier');

table.set('Roary', 'is a kitty');
table.set('Brigadier', 'will be my doggo');

console.log('get', table.get('Roary'));
console.log('yah', table.has('Roary'));
console.log('nah', table.has('Finn'));
let keys = table.keys();
console.log('keys: ', keys);