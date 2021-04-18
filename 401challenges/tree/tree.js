'use strict';

class Node{
    constructor(value,right=null,left=null){
        this.value=value;
        this.right=right;
        this.left=left;
    }
}

class BinaryTree{
    constructor(root=null){
        this.root=root;
    }

    preOrder(){
      let arr=[];

      const traverse= (node)=>{
          arr.push(node.value);
          if(node.left){
              traverse(node.left);
            }
          if(node.right){
                traverse(node.right);
            }
      }

      traverse(this.root);
      return arr;
    
    }

    inOrder(){
        let arr=[];
        const traverse=(node)=>{
            if (node.left){
                traverse(node.left);
            }
            arr.push(node.value);
            if(node.right){
                traverse(node.right)
            }

        }
        traverse(this.root);
        return arr;
    }

    postOrder(){
        let arr=[];

        const traverse=(node)=>{
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            arr.push(node.value);
        }
        traverse(this.root);
        return arr;
    }

    findMaximumBinaryTree(){
        if(this.root){
            let max=this.root.value;
            let arr=this.inOrder();
    
            arr.forEach(e=>{
                if(e>max){
                    max=e;
                }
            });
    
            return max;

        }else{
            return null;
        }
    }
}

class BinarySearchTree{
    constructor(root=null){
        this.root=root;
    }

    add(value){
        let newNode= new Node(value);
        if(this.root){
            const traverse =(node)=>{
                if(node.value< value){
                    if(node.right){
                        traverse(node.right);
                    }else{
                        node.right=newNode;
                    }
                }else if(node.value> value){
                    if(node.left){
                        traverse(node.left);
                    }else{
                        node.left=newNode;
                    }
                }
            }
            traverse(this.root);
        }else{
            this.root=newNode;
        }
    }
    
    contains(value){
        if(!this.root){
            return false;
        }

        if (value== this.root.value||value==this.right.value|| value==this.left.value){
            return true;
        }

        let current= this.root;

        while(current){
            if(value==current.value){
                return true;
            }else if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false;
    }
}

const newNode = new Node(2);
const tree = new BinarySearchTree(newNode);
tree.add(3)
console.log(tree);

module.exports={
    BinaryTree: BinaryTree,
    BinarySearchTree:BinarySearchTree,
    Node:Node
};