'use strict';

const {LinkedList}= require('../linkedList/linked-list');

let list1= new LinkedList();
list1.insert(2);
list1.insert(5);
list1.insert(7);
list1.insert(10);
// list1.toString()
console.log(list1.head);

let list2 = new LinkedList();
list2.insert(4);
list2.insert(6);
list2.insert(8);
list2.insert(12);
// list1.toString();

function zipL(list1, list2) {
    let zippedList = new LinkedList();
    let value1 = list1.head;
    // console.log('*****check value1*****',value1);
    let value2 = list2.head;
    let length = list1.length + list2.length;
    // console.log('**********',length);
    if(list1 && list2){

        for (let i = 0; i < length; i++) {
            if (i % 2 === 0) {   
                zippedList.append(value1.value);
                value1 = value1.next;
            } else if (i % 2 !== 0) {       
                zippedList.append(value2.value);
                value2 = value2.next;
            }
        }
        return zippedList.toString();
    }else{
        return "Exception";
    }
}

zipL(list1,list2);


module.exports=zipL;

