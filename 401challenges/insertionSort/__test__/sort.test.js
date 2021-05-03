'use strict';

const sort=require('../sort');

test('Happy Path', ()=>{
    let arr= [8,4,23,42,16,15];
    let sorted= sort(arr);
    let expected=[4,8,15,16,23,42];

    expect(sorted).toEqual(expected);
});

test('fail, undefined array',()=>{
    let any=null;
    let sorted= sort(any);

    expect(sorted).toBeNull();
});

