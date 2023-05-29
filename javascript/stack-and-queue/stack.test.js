'use strict';

const { Stack } = require('./index');

describe('Stack', () => {
    it('can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top.value).toEqual(1);
        expect(stack.top.next).toBeNull();
    }); 
    it('can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.top.value).toEqual(3);
        expect(stack.top.next.value).toEqual(2);
        expect(stack.top.next.next.value).toEqual(1);
        expect(stack.top.next.next.next).toBeNull();
    });

    it('can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
    });

    it('can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    it ('can successfully peek at the next item on the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
    });

    it('can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });

    it('can raise an exception when pop or peek are called onto an empty stack', async() => {
        // let stack = new Stack();
        expect.assertions(2);

        try {
          await stack.pop();
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
    
        try {
          await stack.peek();
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
   
      });
    });





// ***Can successfully push onto a stack
// ***Can successfully push multiple values onto a stack
// ***Can successfully pop off the stack
// ***Can successfully empty a stack after multiple pops
// ***Can successfully peek the next item on the stack
// ***Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception