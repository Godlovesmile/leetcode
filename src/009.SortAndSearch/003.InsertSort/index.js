// 插入排序

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let temp = arr[i];

        while (j > 0 && temp < arr[j-1]) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

console.log(insertSort([2, 3, 1, 4]));