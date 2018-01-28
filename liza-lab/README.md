# Lab 10 - Stacks and Queues

**Author**: Liza Oh

## Overview
This is a stack and queue data structure. Contains push(), pop(), and peek() methods on the Stack prototype and enqueue() and dequeue() methods on the Queue prototype.

## Getting Started
The user must:
-Npm init their project
-Install Jest
-To run test they can enter 'npm test'
-To run individual tests on each method the user can use the following examples:

**Queue Examples:**
In the following example, the user can pass through '10' and they can expect '10' to be added to the back of the queue

```javascript
this.queue.enqueue(10);
```

In the following example, the user can pass through '10' again, expect '10' to be added to the back of the queue, then add 20 to the back of the queue. Then the user can remove the oldest data added to the queue, in this case '10' by using dequeue. So they will be left with '20', the most recent added value.

``` javascript
  this.queue.enqueue(10);
  this.queue.enqueue(20);
  expect(this.queue.first.value).toEqual(10);
  expect(this.queue.dequeue().value).toEqual(10);
  expect(this.queue.first.value).toEqual(20);
```

**Stack Examples:**
In the following example, the user can pass through '1' and they can expect '1' to be added to the top of the stack by using push().

```javascript
  this.stack.push(1);
  expect(this.stack.top.value).toEqual(1);
```

In the following example, the user can again pass through '1' to add '1' to the top of the stack, then by using pop() they can expect the top most node from the stack to be removed.

``` javascript
  this.stack.push(1);
  expect(this.stack.top.value).toEqual(1);
  expect(this.stack.pop().value).toEqual(1);
```

In the following example, the user can again pass through '1' to add '1' to the top of the stack, then by using peek() they can expect the top most node from the stack to be returned.

```javascript
  this.stack.push(1);
  expect(this.stack.peek().value).toEqual(1);
```


## Architecture
Javascript
Node
Jest