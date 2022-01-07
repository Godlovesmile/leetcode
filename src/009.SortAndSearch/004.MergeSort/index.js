// 归并排序是一种分治算法, 其思想是将原始数组切分成较小的数组, 直到每个小数组只有一个位置, 接着将小数组归并成较大的数组, 直到租后只有一个排序完毕的大数组

function mergeSort(arr) {
    arr = _mergeSortRec(arr);
    return arr;
}

function _mergeSortRec(arr) {
    if (arr.length == 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);

    return _merge(_mergeSortRec(leftArr), _mergeSortRec(rightArr));
}

function _merge(leftArr, rightArr) {
    console.log('--- _merge ---');
    console.log(leftArr);
    console.log(rightArr);
    const resultArr = [];
    let il = 0, ir = 0;

    while (il < leftArr.length && ir < rightArr.length) {
        if (leftArr[il] < rightArr[ir]) {
            resultArr.push(leftArr[il++]);
        } else {
            resultArr.push(rightArr[ir++]);
        }
    }

    while (il < leftArr.length) {
        resultArr.push(leftArr[il++]);
    }

    while (ir < rightArr.length) {
        resultArr.push(rightArr[ir++]);
    }

    return resultArr;
}

console.log(mergeSort([2, 1, 3, 6]));