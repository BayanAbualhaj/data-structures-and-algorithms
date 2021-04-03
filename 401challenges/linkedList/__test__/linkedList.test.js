'use strict';

const LinkedList=require('../linked-list').LinkedList;


test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
});


test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    let value = 77;
    linkedList.insert(value);
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toEqual(null);
});


test('The head property will properly point to the first node in the linked list', () =>{
    let linkedList = new LinkedList();
    linkedList.insert(77);
    linkedList.insert(84.8);

    expect(linkedList.head.value).toEqual(84.8);
});

test('Can properly insert multiple nodes into the linked list' , () =>{
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);

    expect(linkedList.length).toEqual(2);
});

test('Will return true when finding a value within the linked list that exists' , () =>{
    let linkedList = new LinkedList();
    linkedList.insert(77);
    expect(linkedList.includes(77)).toEqual(true);
    
});

test('Will return false when searching for a value in the linked list that does not exist',()=>{
    let linkedList= new LinkedList();
    linkedList.insert(77);
    expect(linkedList.includes(84)).toEqual(false);
})


test('Can properly return a collection of all the values that exist in the linked list' , ()=>{
    let linkedList = new LinkedList();
    linkedList.insert(73);
    linkedList.insert(84);
    console.log(linkedList);
    
    expect(linkedList.toString()).toEqual("{84} => {73} => NULL");
});







