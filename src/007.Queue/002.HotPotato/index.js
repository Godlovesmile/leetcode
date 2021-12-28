// 通过队列, 实现击鼓传花
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

function hotPotato(nameList, num) {
    const queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';

    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' 在击鼓传花中被淘汰!');
    }
    
    return queue.dequeue();
}

const winner = hotPotato(['jack', 'rose', 'tom', 'jari', 'lily'], 6);
console.log(winner + ' is winner');
