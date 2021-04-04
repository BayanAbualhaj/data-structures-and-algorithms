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

    append(value) {
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else {
            let lastNode = this.head;
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
        }
    }

    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let current = this.head;
        while(current) {
          if(current.value === value) {
            let temp = current.next;
            current.next = node;
            node.next = temp;
          }
          current = current.next;
        }
    }

    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let current = this.head;
        while(current && current.next !== null) {
          if(current.next.value === value) {
            let temp = current.next;
            current.next = node;
            node.next = temp;
          }
          current = current.next;
        }
    }


}


module.exports={
    Node: Node,
    LinkedList:LinkedList
};
