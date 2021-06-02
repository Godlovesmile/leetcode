## 解题思路

1. 运用数学思想, 设最少操作次数为 k, 最终所有元素相等的结果为 target; 可以得到第一个等式, 初始数组的和 + k 次变化的值 = target * nums.length; 

    1>. sums(nums) + k * (n - 1) = target * nums.length

    欲求出 k 的值, 得到 target 的值, 即可求解, 思考可知, target 应该是初始数组 nums 中最小的值, 每次都参加了 k 次操作之一才行, 所以得到第二个等式;

    2>. target = min(nums) + k

    综合等式 1>, 2> 可以得到

    k = sums(nums) - min(nums) * nums.length

(JavaScript 版本实现)

2. 逆向思维, 每次操作将会使 n - 1 个元素增加 1, 直到所有元素相等, 等同于, 每次一个元素减一, 直到所有元素相等; 则方案就有了, 找出初始数组中的最小值, 然后其他所有元素每次减一到达最小元素操作之和, 即为操作最少次数(go 版本实现)


