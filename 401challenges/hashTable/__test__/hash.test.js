'use strict';


const HashTable =require('../hash');

const table=new HashTable();

table.add("phone", "iphone");
table.add("smartWatch", "apple");
table.add("laptop", "macBook");

console.log(table);

test('add to the table successfully',()=>{
    let length=table.table.filter(ele=> ele!==null).length;
    expect(length).toBe(3);
});

test('Retrieving based on a key returns the value stored',()=>{
    let value= table.get('phone');
    expect(value.head.value.key).toEqual('phone')

});

test('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let key= table.get('tomato');

    expect(key).toBe('Not Found');
});

test('Successfully handle a collision within the hashtable',()=>{
    table.add("laptop", "Dell");
    let ll= table.get('laptop');
    expect(ll.head.value.value).toEqual('Dell')
    expect(ll.head.next.value.value).toEqual('macBook')
});

test('Successfully hash a key to an in-range value',()=>{
    let hash = table.hash('ddddqwdq');
    expect(hash).toBeLessThan(70)
});

test('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let ll= table.get('laptop');
    let arr= ll.values();
    // console.log('dweljdhiedo',arr);
    expect(arr).toEqual([
        { key: 'laptop', value: 'Dell' },
        { key: 'laptop', value: 'macBook' }
      ]);
});

