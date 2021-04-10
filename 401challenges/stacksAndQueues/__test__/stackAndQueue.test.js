'use strict';

const {Stack} = require('../stacks-and-queues');
const {Queue} = require('../stacks-and-queues');



test('Can successfully push onto a stack & multiple',()=>{
    let newStack= new Stack();
    newStack.push(1)
    newStack.push(101)
    newStack.push(10101)
    // console.log(newStack);
    expect(newStack.length).toEqual(3);
    expect(newStack.top.value).toEqual(10101);
});

test('Can successfully pop off the stack',()=>{
    let popOnStack= new Stack();
    popOnStack.push(10);
    popOnStack.push(6);
    popOnStack.push(2);

    popOnStack.pop();

    expect(popOnStack.length).toEqual(2);
    expect(popOnStack.top.value).toEqual(6);
});

test('Can successfully empty a stack after multiple pops',()=>{
    let popOnStack= new Stack();
    popOnStack.push(10);
    popOnStack.push(6);
    popOnStack.push(2);

    popOnStack.pop();
    popOnStack.pop();
    popOnStack.pop();

    expect(popOnStack.length).toEqual(0);
    expect(popOnStack.top).toBeNull();
});

test('Can successfully peek the next item on the stack',()=>{
    let peekOnStack= new Stack();
    peekOnStack.push(10);
    peekOnStack.push(6);
    peekOnStack.push(2);

    peekOnStack.peek();
    expect(peekOnStack.top.value).toEqual(2);
});

test('Can successfully instantiate an empty stack',()=>{
    let newStack= new Stack();

    expect(newStack.top).toBeNull();
    expect(newStack.length).toEqual(0);
});

test('Calling pop or peek on empty stack raises exception',()=>{
    let newStack= new Stack();

    expect(newStack.peek()).toEqual('Exception')
    expect(newStack.pop()).toEqual('Exception')

});

test('Can successfully push into a queue & multiple',()=>{
    let queue= new Queue();

    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);

    expect(queue.length).toEqual(3);
});

test('Can successfully dequeue out of a queue the expected value',()=>{
    let queue= new Queue();

    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);

    queue.dequeue();
    console.log(queue,'*********************');
    expect(queue.front.value).toEqual(6);
    expect(queue.length).toEqual(2);
});

test('Can successfully peek into a queue, seeing the expected value',()=>{
    let queue= new Queue();

    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);

    expect(queue.peek()).toEqual(4);
});

test('Can successfully empty a queue after multiple dequeues',()=>{
    let queue= new Queue();

    queue.enqueue(4);
    queue.enqueue(6);
    queue.enqueue(8);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.length).toEqual(0);
    expect(queue.front).toBeNull();

});

test('Can successfully instantiate an empty queue',()=>{
    let queue= new Queue();

    expect(queue.front).toBeNull();
    expect(queue.length).toEqual(0);
});

test('Calling dequeue or peek on empty queue raises exception',()=>{
    let queue= new Queue();

    expect(queue.dequeue()).toEqual('Exception')
    expect(queue.peek()).toEqual('Exception')
});



