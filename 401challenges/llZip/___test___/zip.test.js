'use strict';

const {LinkedList} = require('../../linkedList/linked-list');
const zipLists = require('../ll-zip.js');

test("if the returned list from the zip function equal to the same list should be... ", () => {
    let ll1 = new LinkedList();
    ll1.append(77);
    ll1.append(7700);
    ll1.append(7070);
    
    let ll2 = new LinkedList();
    ll2.append(4040);
    ll2.append(404);
    ll2.append(4444);
    
    let ll3 = new LinkedList();
    ll3.append(77);//from ll1
    ll3.append(4040);//ll2
    ll3.append(7700);//ll1
    ll3.append(404);//ll2
    ll3.append(7070);//ll1
    ll3.append(4444);//ll2


    // expect(zipLists(ll1,ll2)).toEqual(ll3);
    expect(zipLists(ll1,ll2).toString()).toEqual(ll3.toString());
})

test("one of the list are not defined", () => {
    const ll2 = new LinkedList();
    const ll1=0;

    ll2.append(200);
    ll2.append(165);
    expect(ll_zip(ll1, ll2).toString()).toEqual("Exception");
  
  })
  
  test("Empty linked lists", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
  
    expect(ll_zip(ll1, ll2).toString()).toEqual("NULL");
  })
