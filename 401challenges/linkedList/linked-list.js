'use strict';

class Node {
    constructor(value,next=null){
        this.value=value;
        this.next= next;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.length=0;
    }

    insert(value){
      
        let newNode= this.head;
        this.head= new Node (value,newNode);
        this.length ++;

    }

    includes(value){
        let search=this.head;

        while(search){
            if(search.value == value){
                return true;
            }
            search = search.next;
        }
        return false;
    }

    toString(){
        let string = "";

        while (this.head) {
            string += `{${this.head.value}} => `
            this.head = this.head.next;
            console.log('wdccecece');
        }
        string += "NULL";
        console.log('dwedecedcercferfcer', string);
        return string;
    }
}

const ll = new LinkedList();

ll.insert(2);
ll.insert(5);
ll.includes(5);
ll.toString();
console.log(ll);

module.exports={
    Node: Node,
    LinkedList:LinkedList
};
