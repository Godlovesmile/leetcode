## 解题思路

1. 数学思维, 每次操作都是左上角区域从（0, 0）到（a, b）的矩形，必定重叠，所以找最小的 a 乘最小的 b 就行;(js 版本实现)

2. 暴力解决, 根据条件生成新二维数组, 那么 newArr[0][0] 一定是最大值, 再进行统计即刻, 但是通过 golang 实现, 报内存溢出, 后续可进行优化下