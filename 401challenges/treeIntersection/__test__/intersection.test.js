'use strict';

const { Node, BinaryTree } = require('../../tree/tree');
const treeIntersect = require('../treeIntersection');

//===================================

const one1 = new Node(150);
const two1 = new Node(100);
const three1 = new Node(250);
const four1 = new Node(75);
const five1 = new Node(160);
const six1 = new Node(200);
const seven1 = new Node(350);
const eight1 = new Node(125);
const nine1 = new Node(175);
const ten1 = new Node(300);
const eleven1 = new Node(500);

one1.left = two1;
one1.right = three1;
two1.left = four1;
two1.right = five1;
three1.left = six1;
three1.right = seven1;
five1.left = eight1;
five1.right = nine1;
seven1.left = ten1;
seven1.right = eleven1;

let tree1 = new BinaryTree(one1);
//=================================
const one2 = new Node(42);
const two2 = new Node(100);
const three2 = new Node(600);
const four2 = new Node(15);
const five2 = new Node(160);
const six2 = new Node(200);
const seven2 = new Node(350);
const eight2 = new Node(125);
const nine2 = new Node(175);
const ten2 = new Node(4);
const eleven2 = new Node(500);

one2.left = two2;
one2.right = three2;
two2.left = four2;
two2.right = five2;
three2.left = six2;
three2.right = seven2;
five2.left = eight2;
five2.right = nine2;
seven2.left = ten2;
seven2.right = eleven2;

let tree2 = new BinaryTree(one2);

//=======================================
const one3 = new Node(150);
const two3 = new Node(100);
const three3 = new Node(250);
one3.left = two3;
one3.right = three3;
let tree3 = new BinaryTree(one3)

const one4 = new Node(15);
const two4 = new Node(10);
const three4 = new Node(25);
one4.left = two4;
one4.right = three4;
let tree4 = new BinaryTree(one4)


//======================================
test('if it can return a set of values intersected in both trees', () => {
    let results = treeIntersect(tree1, tree2);
    let expected = [
        125, 175, 160,
        100, 200, 500,
        350
      ]
    expect(results).toEqual(expected);
});

test('if there is no intersected values it will inform that', () => {
    let results = treeIntersect(tree3, tree4);
    let expected = "There is no similar values in the trees"

    expect(expected).toEqual(results);
})
