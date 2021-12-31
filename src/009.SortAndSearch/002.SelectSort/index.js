// 选择排序
function selectSort(arr) {
    let minIdex;

    for (let i = 0; i < arr.length; i++) {
        minIdex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIdex] > arr[j]) {
                minIdex = j;
            }
        }
        if (minIdex != i) {
            const temp = arr[minIdex];
            arr[minIdex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

console.log(selectSort([3, 5, 1, 9]));