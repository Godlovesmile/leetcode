// 冒泡排序
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 7, 9, 2]));

// 改进的冒泡排序法, 上述的排序中, 会发现后面的排序已经排好无需再进行比较
// 进行小改进, 但是冒泡排序的复杂度还是很高(O(n^2))
function modifiedBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(modifiedBubbleSort([5, 7, 9, 2]));