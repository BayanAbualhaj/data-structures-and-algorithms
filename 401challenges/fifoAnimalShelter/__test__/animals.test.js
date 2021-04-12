'use strict';
const AnimalShelter= require('../fifo-animal-shelter');

test('to enqueue and dequeue successfully',()=>{
    let test= new AnimalShelter();

    test.enqueue('cat');
    test.enqueue('cat');
    test.enqueue('dog');

    test.dequeue('cat');

    expect(test.length).toEqual(2);
    expect(test.front.value).toEqual('cat');

});

test('if the enqueue or dequeue is an empty string Expected failure',()=>{
let test= new AnimalShelter();

let value=test.enqueue('')

expect(value).toEqual('this shelter is for dogs & cats only.')
});

test('can create a class successfully',()=>{
    let test= new AnimalShelter;

    expect(test.front).toBeNull();
    expect(test.end).toBeNull();
    expect(test.length).toBe(0);

});

