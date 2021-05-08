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
            // console.log('wdccecece');
        }
        string += "NULL";
        console.log('____toString___', string);
        return string;
    }

    append(value) {
        this.length++;
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
              this.length++;
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
              this.length++;
            let temp = current.next;
            current.next = node;
            node.next = temp;
          }
          current = current.next;
        }
    }
    
    kthFromEnd(k) {
        let current = this.head;
        let position = this.length - 1 - k;
        let i = 0;

        while (current){
            if (position ===i){
                console.log(current.value);
                return current.value;
            }
            current = current.next;
            i++;
        }
        console.log('Exception');
        return "Exception";
    }
    
    values() {
        let values = [];
        let current = this.head;
        while (current) {
          values.push(current.value);
          current = current.next;
        }
        return values;
      }


}
let ll= new LinkedList();
ll.insert(2);
ll.insert(5);
ll.insert(7);
ll.insert(10);
ll.append(13);
ll.kthFromEnd(7);
ll.toString();
// ll.kthFromEnd

module.exports={
    Node: Node,
    LinkedList:LinkedList
};
