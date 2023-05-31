const { PseudoQueue } = require('../stack-queue-pseudo');


describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  it('should enqueue values and dequeue them in the correct order', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);

    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(15);
    expect(queue.dequeue()).toBeNull();
  });

  it('should handle enqueue and dequeue operations with multiple values', () => {
    queue.enqueue(20);
    queue.enqueue(25);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(20);

    queue.enqueue(35);

    expect(queue.dequeue()).toBe(25);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(35);
    expect(queue.dequeue()).toBeNull();
  });

  it('should handle enqueue and dequeue operations with empty queue', () => {
    expect(queue.dequeue()).toBeNull();

    queue.enqueue(40);
    queue.enqueue(45);

    expect(queue.dequeue()).toBe(40);
    expect(queue.dequeue()).toBe(45);
    expect(queue.dequeue()).toBeNull();
  });
});