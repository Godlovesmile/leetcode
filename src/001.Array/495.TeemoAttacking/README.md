## 解题思路

1. 利用数学思维, 中毒冷冻的秒数计为 duration 秒, 攻击的点为数组 timeSeries, 在每次攻击冷冻时间总数 count 都加上 duration, 但是每次的冷冻时间都有可能与上次重叠, 重叠时间可以通过规律得到 k = duration - (timeSeries[i] - timeSeries[i - 1]), 如果 k < 0, 表示没有重叠时间, k 计为 0, 如果 k > 0 表示重叠冷冻时间, 总结上述得: count = count + duration - k;
