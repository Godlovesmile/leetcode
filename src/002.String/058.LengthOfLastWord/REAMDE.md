# 解题思路

1. 从前往后遍历, 通过下标往前移动, 第一层遍历, 找到从后到前找到第一个不是空字符串的下标; 第二层遍历, 统计最后一个字母长度, 直到遇到空字符串结束;(golang 实现)

2. 通过 trim() 内置函数, 去除末尾空格, 再进行遍历进行计算末尾单词的长度;(javasrcipt 实现)

