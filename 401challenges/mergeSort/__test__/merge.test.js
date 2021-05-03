'use strict';

const mergeSort = require('../mergeSort');

test('Can successfully return the array from smallest to largest element', () => {
    let expected=mergeSort([8,4,23,42,16,15])
    let arr=[4,8,15,16,23,42];

    expect(expected).toEqual(arr);
       

});

test('successfully return an empty array', () => {

    expect(mergeSort([])).toEqual([]);

});

