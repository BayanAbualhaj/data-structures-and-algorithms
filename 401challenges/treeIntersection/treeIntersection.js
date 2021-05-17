'use strict';

function treeIntersect(tree1, tree2) {
  const tree1Arr = tree1.postOrder();
  const tree2Arr = tree2.postOrder();
  const intersectedArr = tree1Arr.filter(element => tree2Arr.includes(element));

  if(intersectedArr.length){
      return intersectedArr;
  }else{
      return "There is no similar values in the trees"
  }
}

module.exports = treeIntersect;