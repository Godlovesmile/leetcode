## 解题思路

1. 字符中找出所有大写字母, 然后通过大写字符个数进行判断条件处理(js 版本)

2. 正则表达式处理(ts 版本)

tips: 
+ 判断字母大小写
  1>. /[a-z]/.test(''); /[A-Z]/.test('')
  2>. 'a'.charCodeAt(0) > 96 // 小写
      'A'.charCodeAt(0) < 90 // 大写

+ [正则表达式规则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)