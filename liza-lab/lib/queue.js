'use strict';

const Node = require('./node');

module.exports = class {
  constructor(maxSize=1048) {
    this.first = null;
    this.last = null;
    this.maxSize = maxSize;
    this.size = 0;
  }
  enqueue(value) {
    if(this.size === this.maxSize) throw new Error('this is a fucking error!');

    let node = new Node(value);

    !this.last ? this.first = node : this.last.next = node;
    this.last = node;

    this.size ++;

    return this.last;
  }

  dequeue() {
    let temp = this.first;
    this.first = this.first.next;

    this.size --;
    temp.next = null;

    return temp;
  }
};
