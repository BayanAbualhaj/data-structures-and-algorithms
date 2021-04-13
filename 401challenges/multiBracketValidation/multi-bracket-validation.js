function multiBracketValidation(str){
    let newArr=[];
    for(i=0;i<str.length;i++){
      if (str[i]=='('|| str[i]==')' || str[i]=='{' ||str[i]=='}'||str[i]=='['||str[i]==']'){
        newArr.push(str[i]);
      }
    }
    if(newArr.length%2 !== 0){
      return false;
    }
  
    let closers = {
      curly: '}',
      square: ']',
      round: ')'
    };
  
    for(i=0;i<newArr.length;i++){
      let opener= newArr[i];
      if(opener=='('){
  
        if(newArr[i+1]==closers.round){
          i++;
        }else if(newArr[i+1]!=='('){
        //   console.log('first');
          console.log(false);
          return false
        }
      }
  
      if(opener=='['){
  
        if(newArr[i+1]==closers.square){
          i++;
        }else if(newArr[i+1]!=='['){
        //   console.log('second');
          console.log(false);
          return false
        }
      }
  
      if(opener=='{'){
  
        if(opener=='{'& newArr[i+1]==closers.curly){
          i++;
        }else if(newArr[i+1]!=='{'){
        //   console.log('third');
          console.log(false);
          return false
        }
      }
    }
    console.log(true);
    return true;  
}

multiBracketValidation('()[[Extra Characters]]');
multiBracketValidation('{}{Code}[Fellows](())');
multiBracketValidation('{(})')

module.exports=multiBracketValidation;

