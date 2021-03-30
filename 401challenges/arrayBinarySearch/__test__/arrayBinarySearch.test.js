'use strict';
const array= require('../array-binary-search');

describe("Returned the shifted array", () => {
  test("It should return an array with the added value ", () => {
    expect( array([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(
       array([11,22,33,44,55,66,77], 90)
    ).toStrictEqual(-1);
  });
});
