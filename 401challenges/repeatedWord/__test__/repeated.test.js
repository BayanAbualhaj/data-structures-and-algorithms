'use strict';

const repeated= require('../repeated-words');


test('take a string and return the first word to occur more than once',()=>{
    let str= "Once upon a time, there was a brave princess who...";

    let expected= repeated(str);

    expect(expected).toEqual('a');
});

test('return the text is unprovided if it was empty string',()=>{
    let str= "";

    let expected= repeated(str);

    expect(expected).toEqual('The str provided is empty');
});