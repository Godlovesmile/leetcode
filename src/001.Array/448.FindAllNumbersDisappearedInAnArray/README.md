## 解题思路

1. 第一反应的思维就是, 暴力遍历 [1-n] 对应的值不在原始数组 nums 即是缺失的值, 提交也通过了(js 版本)

2. 看了讨论区题解的方式, 找到一个新的思路, 因为 1 < nums[i] < n, 所以 nums[i] 值在数组中按理说应该有唯一对应以此值(nums[i])的下标, 通过此值下标找到对应数组 nums 值, 加上数组长度, 最后再遍历相加后的新数组, 如果对应的值小于等于数组长度, 说明此下标之前没有对应的值进行相加, 即是缺失的值(go 版本实现) 