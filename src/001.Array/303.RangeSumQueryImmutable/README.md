## 解题思路

1. 正常思维, 暴力解锁, 由于每次检索的时间和检索的下标范围有关，因此检索的时间复杂度较高，如果检索次数较多，则会超出时间限制. 所以运用到 前缀和 思想.

tips:
1>. 前缀和: 前缀和指一个数组的某下标之前的所有数组元素的和(包含其自身). 前缀和分为一维前缀和，以及二维前缀和. 前缀和是一种重要的预处理，能够降低算法的时间复杂度.