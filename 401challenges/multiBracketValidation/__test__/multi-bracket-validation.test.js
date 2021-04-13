'use strict';
const multiBracketValidation= require('../multi-bracket-validation');

test('it return true if the brackets are matched and balanced',()=>{
    let str ='{}{Code}[Fellows](())';
    
    let test= multiBracketValidation(str);

    expect(test).toBe(true);
    
});

test('it return false if the brackets are not matched',()=>{
    let str='{(edqedqw})';
    

    expect(multiBracketValidation(str)).toBe(false);
});

test('it return false if the brackets are not balanced',()=>{
    let str='(wjkqk{[deqdeqd)(}';

    expect(multiBracketValidation(str)).toBe(false);
});