'use strict';

function repeated(str){
    if (str.length) {
        let words= str.match(/\w+/g);
        let count={};
        
        for(let i=0;i<words.length;i++){
            let key = words[i].toLowerCase();
    
            if(!count[key]){
                count[key]=1;
            }else if(count[key]){
                count[key]++;
            }
            if(count[key] ==2){
                return key;
            }
        }
        
    }else{
        return "The str provided is empty";
    }

}


// let str="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

// repeated(str);

module.exports= repeated;