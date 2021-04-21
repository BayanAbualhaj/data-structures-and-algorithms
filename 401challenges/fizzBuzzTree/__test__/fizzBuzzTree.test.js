const {FizzBuzzTree}= require('../fizz-buzz-tree');
const {tree}= require('../fizz-buzz-tree');
const { Node } = require('../../tree/tree');
const { BinarySearchTree } = require('../../tree/tree');

test('it will return the fizz insted of any number devided by ',()=>{
    let newTree= FizzBuzzTree(tree);
    console.log(newTree);
    expect(newTree.root.value).toEqual('Fizz');
});

test('it will return null if its empty',()=>{
    let newNode= new Node(1);
    let tree=new BinarySearchTree(newNode)
    let newTree=FizzBuzzTree(tree)
    // console.log(newTree);
    expect(newTree.root.right).toBeNull();
});
