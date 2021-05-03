'use strict';

function mergeSort(arr) {
    let n = arr.length;

    if (n > 1) {
        // let mid1 = Math.ceil(arr.length / 2);
        let mid = Math.floor(arr.length / 2);
        // console.log(mid,mid1);
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length; i++) {
            if (i < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        mergeSort(left);
        mergeSort(right);
        merge(left, right,arr);
    }
    return arr;
}

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    if (i < left.length) {
        arr[k++] = left[i++];
    }
    else {
        arr[k++] = right[j++];
    }
    return arr;

}


module.exports=mergeSort;