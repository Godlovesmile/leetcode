## 解题思路
1. 利用 js 数组, 及第三变量 max 进行统计, 遍历字符串, 如果对应字符串在数组 arr 中不存在, 即没有重复, 加入数组; 一旦重复, 即发现有重复的, 那就把前面重复的删了, 从第一个重复的后面继续统计, 就算删了也没事, 因为刚才的长度已经记录在 max, 若后面有更长的, 即替换之前的 max 值, 后续同理, 这种解法的关键点在于找连续的字符串