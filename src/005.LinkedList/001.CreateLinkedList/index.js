// 创建一个链表
function LinkedList() {
    const Node = function(element) {
        this.element = element;
        this.next = null;
    }

    let head = null;
    let length = 0;

    this.append = (element) => {
        const node = new Node(element);
        let current = null;

        if (head === null) {
            head = node;
        } else {
            // 注意点, 链表都是从第一个节点往后遍历寻找的
            current = head;
            // 循环直到找到最后一项
            while(current.next) {
                current = current.next;
            }
            // 找到最后一项, 添加新节点
            current.next = node;
        }
        // 更新链表长度
        length++;
    }
    this.getHead = function() {
        return head;
    }
    // 在任意位置插入一个元素
    this.insert = function(position, element) {
        const node = new Node(element);
        let current = head;
        let previous = null;
        let index = 0;

        if (position >= 0 && position <= length) {
            if (position == 0) {
                head = node;
                head.next = current;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;

                length++;
                
                return true;
            }
        } else {
            return false;
        }
    }
    // 从链表中删除一个元素
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous = null;
            let index = 0;

            if (position == 0) {
                head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next; 
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
    // linkedlist 转化为 字符串
    this.toString = function() {
        let current = head;
        let str = '';

        while(current) {
            str += ' ' + current.element;
            current = current.next;
        }

        return str;
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.insert(2, 88);

// console.log(list.getHead());
console.log(list.removeAt(1));
console.log(list.toString());