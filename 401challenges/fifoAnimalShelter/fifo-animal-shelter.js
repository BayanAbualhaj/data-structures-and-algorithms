class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

class AnimalShelter{
    constructor(){
        this.front=null;
        this.end=null;
        this.length=0;
    }

    enqueue(animal){
        if(animal=='cat'|| animal=='dog'){
            let newNode= new Node(animal);
            
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
        }else{
            console.log('this shelter is for dogs & cats only.');
            return 'this shelter is for dogs & cats only.';
        }

    }

    dequeue(perf){
        if(!this.front){
            console.log('Exception the queue is empty');
            return 'Exception the queue is empty';
        }
        if(perf=='cat'||perf=='dog'){
            let animal=this.front.value;
            this.front=this.front.next;
            this.length--;
            console.log(animal);
            return animal;
        }else{
            console.log(null);
            return null;
        }

    }
}


let test= new AnimalShelter();

test.dequeue('cat');
test.enqueue('bird');

test.enqueue('dog');
test.enqueue('cat');
test.enqueue('cat');
test.enqueue('dog');
test.enqueue('cat');
test.enqueue('dog');
test.enqueue('dog');

test.dequeue('bird');
test.dequeue('cat');

console.log(test);

module.exports=AnimalShelter;