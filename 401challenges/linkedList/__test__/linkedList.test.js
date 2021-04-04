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

test("Should add node to the end of the linked list", () => {
    let ll = new LinkedList();
  
    ll.insert(100);
    ll.insert(200);
    ll.insert(300);
    ll.append(10);
  
    expect(ll.toString()).toEqual("{300} => {200} => {100} => {10} => NULL");
})
  
test("Should add nodes to the end of the linked list", () => {
    let ll = new LinkedList();
  
    ll.insert(100);
    ll.insert(200);
    ll.insert(300);
    ll.append(10);
    ll.append(20);
    ll.append(30);
    ll.append(40);
  
    expect(ll.toString()).toEqual("{300} => {200} => {100} => {10} => {20} => {30} => {40} => NULL");
})
  
  
test("Should insert a node before a node located i the middle of a linked list", () => {
    let ll = new LinkedList();
  
    ll.insert(100);
    ll.insert(200);
    ll.insert(300);
    ll.insertBefore(200, 1000);
  
    let finalLinkedList = ll.toString();
    let array = finalLinkedList.split(" ");
  
    expect(array[2]).toEqual("{1000}");
  
})
  
test("Should insert a node before the first node of a linked list", () => {
    let ll = new LinkedList();
  
    ll.append(100);
    ll.append(200);
    ll.insert(300);
   
  
    let finalLinkedList = ll.toString();
    let array = finalLinkedList.split(" ");
  
    expect(array[0]).toEqual("{300}");
  
})
  
test("Should insert a node after a node located i the middle of a linked list", () => {
    let ll = new LinkedList();
  
    ll.insert(100);
    ll.insert(200);
    ll.insert(300);
    ll.insertAfter(200, 1000);
  
    let finalLinkedList = ll.toString();
    let array = finalLinkedList.split(" ");
  
    expect(array[4]).toEqual("{1000}");
  
})
  
test("Should insert a node after the last node of the linked list", () => {
    let ll = new LinkedList();
  
    ll.insert(100);
    ll.insert(200);
    ll.insert(300);
    ll.append(1000);
  
    expect(ll.toString()).toEqual("{300} => {200} => {100} => {1000} => NULL");
  
})






