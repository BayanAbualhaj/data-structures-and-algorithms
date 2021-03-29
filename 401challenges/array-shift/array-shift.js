'use strict';

const insertShiftArray=(array,value)=>{
    let newArr=[];
  for(let i=0;i<array.length;i++){
    if(i== (Math.floor(array.length/2 ))){
      if(array.length%2==0){
      newArr.push(value,array[i]);
      }else{
        newArr.push(array[i],value);
      }
    }else{newArr.push(array[i])}

  }
  return newArr;
}

module.exports=insertShiftArray;



  