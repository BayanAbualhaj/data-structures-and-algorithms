"use strict";

const HashTable = require("../../hashTable/hash");
const leftJoin = require("../leftJoin");


test("Can Join tow table successfully", () => {

    const table1 = new HashTable();
    table1.add("Phone", "Samsung");
    table1.add("watch", "ESPRTE");
    table1.add("Laptop", "DELL");

    const table2 = new HashTable();
    table2.add("Phone", "Iphone");
    table2.add("watch", "Swatch");
    table2.add("Laptop", null);

    console.log(leftJoin(table1, table2));

    let results =leftJoin(table1, table2);
    let expected=[
        ["Phone", "Samsung", "Iphone"],
        ["watch", "ESPRTE", "Swatch"],
        ["Laptop", "DELL", null],
    ]
    expect(results).toEqual(expected);
});

test("if both tables existed",()=>{

    const table1 = new HashTable();
    table1.add("Phone", "Samsung");
    table1.add("Laptop", "DELL");
    const table2=null;

    let results=leftJoin(table1, table2);
    let expected="There is undefined hash table";

    expect(results).toEqual(expected);
});
