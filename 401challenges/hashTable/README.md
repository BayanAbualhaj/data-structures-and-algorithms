# Hashtables
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.


## Challenge:

* Implement a Hashtable with the following methods:


1. add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key 
3. exists in the table already.

4. hash: takes in an arbitrary key and returns an index in the collection.


## Approach & Efficiency
* Big O time O(1) 
* Big O space for all O(1)

## API
* add(key,value) => add the key and value pair to the table.
* get(key) => returns the value from the table.
* contains(key) => returns a boolean, indicating if the key exists in the table already.
* hash(key) => returns an index in the collection.