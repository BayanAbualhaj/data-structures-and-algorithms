'use strict';

function sort(arr) {
    if (arr) {

        for (let i = 0; i < arr.length; i++) {
            let j = i - 1;
            let temp = arr[i];

            while (j >= 0 && temp < arr[j]) {
                arr[j + 1] = arr[j];
                j--;

            }
            arr[j + 1] = temp;
        }
        return arr;
    } else {
        return null;
    }
}

module.exports= sort;