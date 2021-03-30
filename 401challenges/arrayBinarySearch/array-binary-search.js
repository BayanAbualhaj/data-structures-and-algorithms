'use strict';

function binarySearch(array, key){
    let begin = 0;
    let end = array.length - 1;

    while (begin <= end) {
        let middle = Math.floor((begin + end) / 2);

        if (array[middle] === key) {
            return middle;
        } else if (array[middle] < key) {
            begin = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

module.exports=binarySearch;