const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    const first = this.queue[this.queue.length - 1];
    const next = this.queue[this.queue.length - 2];

    this.queue.pop();

    return { value: first, next: next ? this.getUnderlyingList() : null };
  }

  enqueue(value) {
    this.queue.unshift(value);
  }

  dequeue() {
    return this.queue.pop();
  }
}

module.exports = {
  Queue,
};
