'use strict';

function treeIntersect(tree1, tree2) {
  const tree1Arr = tree1.postOrder();
  const tree2Arr = tree2.postOrder();
  const intersectedArr = [];
  let k=0;

  for (let i = 0; i < tree1Arr.length; i++) {
    for (let j = 0; j < tree2Arr.length; j++) {
        if (tree1Arr[i]===tree2Arr[j]) {
            intersectedArr[k]=tree1Arr[i];
            k++;
        }
        
    }
    
}

  if(intersectedArr.length){
      return intersectedArr;
  }else{
      return "There is no similar values in the trees"
  }
}

module.exports = treeIntersect;