'use strict';

const {LinkedList} = require('../../linkedList/linked-list');
const zipLists = require('../ll-zip.js');

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


test("if the returned list from the zip function equal to the same list should be... ", () => {
    // expect(zipLists(ll1,ll2)).toEqual(ll3);
    expect(zipLists(ll1,ll2).toString()).toEqual(ll3.toString());
})

test("2 lists not equal length", () => {

    expect(zipLists(ll1, ll3)).toEqual("Exception");
  
});

test("if one of the list is undefined",()=>{
    let ll4=undefined;
    expect(zipLists(ll1, ll4)).toEqual("Exception");

});
  