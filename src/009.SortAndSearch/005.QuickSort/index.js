/*
快速排序:
1. 首先, 从数组中选择中间一项作为主元 pivot
2. 创建两个指针, 左边一个指向数组第一项, 右边一个指向数组最后一项. 移动左指针直到找到一个比主元大的元素, 接着移动右指针直到找到一个比主元小的元素, 然后交换它们, 重复这个过程, 直到左指针超过了右指针. 这个过程将使得比主元小的值都在主元之前, 而比主元大的值都在主元之后. 这一步是进行划分操作
3. 接着, 算法对划分后的小数组重复之前的两个步骤, 直到数组已完全排序.
*/

function quickSort (arr) {
    _quick(arr, 0, arr.length - 1);

    return arr;
}

function _quick(arr, left, right) {
    let index;

    if (arr.length > 1) {
        index = _partition(arr, left, right);

        if (left < index - 1) {
            _quick(arr, left, index - 1);
        }
        if (index < right ) {
            _quick(arr, index, right);
        }
    }
}

function _partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left, j = right;
    
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            _swapQuickSort(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function _swapQuickSort(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([9, 2, 3, 1]));