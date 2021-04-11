'use strict';

const PseudoQueue=require('../queue-with-stacks');

test('the dequeue value to be first in first out',()=>{
    let test=new PseudoQueue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);

    let dequeue= test.dequeue();

    expect(dequeue).toEqual(10);   
});

test('the length of stackOne after the dequeue to decrease by one',()=>{
    let test=new PseudoQueue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);

    let dequeue= test.dequeue();

    expect(test.stackOne.length).toEqual(2);   
});

test('insert successfully to the stackOne',()=>{
    let test=new PseudoQueue();

    test.enqueue(10);
    test.enqueue(20);
    test.enqueue(30);

    test.enqueue(40);

    expect(test.stackOne.length).toEqual(4);   
    expect(test.stackOne.top.value).toEqual(40);   
});
