class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }

}

class Stack{
    constructor(){
        this.top=null;
        this.length=0;
    }

    push(value){
        let newNode= new Node(value);
        if(!this.top){
            this.top=newNode;
            this.length++;

        }else{
            let nextTonewNode=this.top;
            this.top=newNode;
            newNode.next=nextTonewNode;
            this.length++
        }
    }
    pop(){
        if(!this.top){
            return 'Exception';
        }else{
            let current=this.top;
            this.top=current.next;
            this.length--;

            return current.value;
        }

    }

    peek(){
        if (!this.top) {
            console.log('Exception');
            return 'Exception'
        }else{
            return this.top.value;
        }
    }

    isEmpty(){
        if (this.top) {
            console.log(true);
            return true;
        }else{
            console.log(false);
            return false;
        }
    }
}

const stack=new Stack();
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(1000);
stack.push(1220);
stack.pop();
stack.pop();
stack.pop();
stack.peek();
stack.isEmpty();


// console.log(stack);

class Queue{
    constructor(){
        this.front=null;
        this.end=null;
        this.length=0;
    }

    enqueue(value){
        let newNode= new Node(value);
        if(!this.front){
            this.front= newNode;
            this.end=newNode;
            this.length++;
        }else{
            let originalEnd=this.end;
            originalEnd.next=newNode;
            this.end=newNode;
            this.length++;
        }
    }

    dequeue(){
        if(!this.front){
            return 'Exception';
        }
        this.front=this.front.next;
        this.length--;
    }

    peek(){
        if(!this.front){
            console.log('Exception');
            return 'Exception';
        }else{
            console.log(this.front.value);
            return this.front.value;
        }
    }

    isEmpty(){
        if (!this.front) {
            return false;
        }else{
            return true;
        }
    }
}


let queue= new Queue();

queue.enqueue(4)
queue.enqueue(44)
queue.enqueue(444)
queue.enqueue(4444)

queue.peek();
queue.dequeue();

queue.isEmpty();

console.log(queue);

module.exports={
    Node:Node,
    Stack:Stack,
    Queue:Queue
}