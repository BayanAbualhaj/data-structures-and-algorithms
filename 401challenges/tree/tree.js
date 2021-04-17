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
}

class BinarySearchTree{
    constructor(root=null){
        this.root=root;
    }

    add(value){
        let newNode= new Node(value);
        if(this.root){
            this.addNode(this.root,newNode);
        }else{
            this.root=newNode;
        }
    }

    addNode(node,newNode){
        if(node.value< newNode.value){
            if(node.right){

                this.addNode(node.right,newNode);
            }else{
                node.right=newNode;
            }
        }else if(node.value> newNode.value){
            if(node.left){
                this.addNode(node.left,newNode);
            }else{
                node.left=newNode;
            }
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


module.exports={
    BinaryTree: BinaryTree,
    BinarySearchTree:BinarySearchTree,
    Node:Node
};