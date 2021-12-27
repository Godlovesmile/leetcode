// 由十进制转二进制思路, 写出通用函数, 十进制转任何进制
// import Stack from '../stack.js';
class Stack {
    constructor() {
        this.items = [];
    }
    push(el) {
        this.items.push(el);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
}

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    let rem = 0, baseString = '';

    while(decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while(!remStack.isEmpty()) {
        baseString += remStack.pop().toString();
    }

    return baseString;
}

console.log(baseConverter(100345, 8));
