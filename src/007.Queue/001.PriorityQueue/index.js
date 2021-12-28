// 常用队列 Queue 实现
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(el) {
        this.items.push(el);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}

// 优先队列, 根据优先级进入队列
function PriorityQueue() {
    const items = [];

    function QueueElement(el, priority) {
        this.element = el;
        this.priority = priority;
    }

    this.enqueue = function(el, priority) {
        const queueElement = new QueueElement(el, priority);
        let added = false;

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            for (let i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    added = true;
                    items.splice(i, 0, queueElement);
                    break
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.print = function() {
        console.log(items);
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('rose', 1);
priorityQueue.print();
