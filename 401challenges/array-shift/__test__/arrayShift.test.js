'use strict';
const output= require('../array-shift.js');

describe("Returned the shifted array", () => {
  test("It should return an array with the added value ", () => {
    expect( output([1, 2, 3, 4, 5, 6], 100)).toStrictEqual([1, 2, 3, 100, 4, 5, 6]);
    expect(
       output([89, 2354, 3546], 111)
    ).toStrictEqual([89, 2354, 111, 3546]);
  });
});
