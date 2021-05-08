'use strict';

const {LinkedList}= require('../linkedList/linked-list');


class HashTable{
    constructor(){
        this.table= new Array(70);
    }

    add(key,value){
        let hash= this.hash(key);
        if (!this.table[hash]){
            this.table[hash]=new LinkedList();
        }
        this.table[hash].insert({key,value});
    }
    

    get(key){
        let hash= this.hash(key);

        if(!this.table[hash]){
            return 'Not Found';
        }else{
            return this.table[hash];
        }
    }

    contain(key){
        let hash= this.hash(key);
        if (!this.table[hash]) return false;
        return true;
    }

    hash(key){
        let hash= 727;
        let tot= 0;

        for(let i=0;i<key.length;i++){
            tot = (hash*tot+key.charCodeAt(i)) % this.table.length;
        }
        if(tot<1) {this.table.length-1};

        return parseInt(tot);
    }
}

module.exports= HashTable;

