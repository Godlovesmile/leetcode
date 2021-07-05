## 解题思路

1. 反转对比(js 版本)

2. 双指针思想, 前指针和后指针进行对比(go 版本)

tips: 
1>. 正则判断字符是否为字母数字, /^[0-9a-zA-Z]+$/g
2>. Go方法判断
    
    ```
    func isLetterOrNumber(ch byte) bool {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')
    }
    ```