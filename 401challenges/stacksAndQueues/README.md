# Stacks and Queues
stack and Queue are a data structure classes 
- stack is known for : first in last out (FILO)
- queue is known for : first in first out (FIFO)

## Challenge
- to build a stack class 
- to build a queue class

## Approach & Efficiency
- big O space O(1)
- big O time O(1)

## API

* Stack:
    - **push**:  takes any value as an argument and adds a new node with that value to the top

    - **pop**: does not take any argument, removes the node from the top of the stack, and returns the node’s value.

    - **peek**: does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

    - **isEmpty**: that takes no argument, and returns a boolean indicating whether or not the stack is empty.

* Queue:
    - **enqueue**: which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.

    - **dequeue**: that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

    - **peek**: that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

    - **isEmpty**: that takes no argument, and returns a boolean indicating whether or not the queue is empty.