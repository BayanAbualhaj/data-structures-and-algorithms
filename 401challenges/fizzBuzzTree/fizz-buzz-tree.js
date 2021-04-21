'use strict';

const { BinarySearchTree } = require('../tree/tree');
const { Node } = require('../tree/tree');

const newNode = new Node(3);
const tree = new BinarySearchTree(newNode);
tree.add(3);
tree.add(5);
tree.add(8);
tree.add(12);
tree.add(15);
tree.add(9);
tree.add(11);
tree.add(17);
tree.add(50);
tree.add(72);



function FizzBuzzTree(tree) {
    let current = tree.root;

    if (current) {

        let arr = [current];
        let breadth = [];

        let i = 0;
        while (current) {

            current = arr[i]
            if (current) {
                if(current.value%15==0){
                    current.value='FizzBuzz';
                    breadth.push(current);
                    
                }else if(current.value%5==0){
                    current.value='Buzz';
                    breadth.push(current);

                }else if(current.value%3==0){
                    current.value='Fizz';
                    breadth.push(current);

                }else{
                    current.value=`${current.value}`;
                    breadth.push(current);

                }

                let left = current.left;
                let right = current.right;

                if (left) {
                    arr.push(left);
                }
                if (right) {
                    arr.push(right);
                }
            }
            i++;
        }
        let newTree= new BinarySearchTree(breadth[0]);
        for (let index = 1; index < breadth.length; index++) {
            newTree.add(breadth[index]);
        }

        return newTree;
    } else {
        return null;
    }
}

module.exports= {FizzBuzzTree,
tree};