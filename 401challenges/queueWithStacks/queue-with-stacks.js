const {Stack} =require('../stacksAndQueues/stacks-and-queues');


class PseudoQueue{
    constructor(){
        this.stackOne= new Stack();
        this.stackTwo= new Stack();
    }

    enqueue(value){
        this.stackOne.push(value);
    }

    dequeue(){
        let stackLength=this.stackOne.length;
        for (let index = 0; index < stackLength; index++) {
            let popVal=this.stackOne.pop()
            this.stackTwo.push(popVal);
        }
        let returnedValue=this.stackTwo.pop();


        this.stackOne= new Stack();
        let stackLengthTwo=this.stackTwo.length
        for (let index = 0; index < stackLengthTwo; index++) {
            let popVal=this.stackTwo.pop();
            this.stackOne.push(popVal);
        }

        return returnedValue;
    }
}


let test= new PseudoQueue();

test.enqueue(10);
test.enqueue(20);
test.enqueue(30);
test.enqueue(40);
test.enqueue(50);
test.enqueue(60);

console.log(test.dequeue());
// console.log(test.dequeue());
// console.log(test.dequeue());
// console.log(test.dequeue());
// console.log(test.dequeue());
// console.log(test.dequeue());

console.log(test);

module.exports= PseudoQueue;