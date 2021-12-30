// 创建二叉搜索树🌲

function BinarySearchTree() {
    const Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    let root = null;

    this.insert = function(key) {
        const newNode = new Node(key);

        if (root == null) {
            root = newNode;
        } else {
            _insertNode(root, newNode);
        }
    }

    this.inOrderTraverse = function(callback) {
        _inOrderTraverse(root, callback);
    }

    this.min = function() {
        return _minNode(root);
    }

    this.max = function() {
        return _maxNode(root);
    }

    this.search = function(key) {
        return _searchNode(root, key);
    }

    this.romove = function(key) {
        root = _removeNode(root, key);
    }
}

function _insertNode(root, newNode) {
    if (newNode.key < root.key) {
        // 左边
        if (root.left == null) {
            root.left = newNode;
        } else {
            _insertNode(root.left, newNode);
        }
    } else {
        // 右边
        if (root.right == null) {
            root.right = newNode;
        } else {
            _insertNode(root.right, newNode);
        }
    }
}

function _inOrderTraverse(node, callback) {
    if (node !== null) {
        _inOrderTraverse(node.left, callback);
        callback(node.key);
        _inOrderTraverse(node.right, callback);
    }
}

function _minNode(node) {
    if (node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node.key;
    }

    return null;
}

function _maxNode(node) {
    if (node) {
        while(node && node.right !== null) {
            node = node.right;
        }
        return node.key;
    }
    return null;
}

function _searchNode(node, key) {
    if (node == null) {
        return false;
    }
    if (key < node.key) {
        return _searchNode(node.left, key);
    } else if (key > node.key) {
        return _searchNode(node.right, key);
    } else {
        return true;
    }
}

function _removeNode(node, key) {
    if (node == null) {
        return null;
    }
    if (key < node.key) {
        node.left = _removeNode(node.left, key);
        return node;
    } else if (key > node.key) {
        node.right = _removeNode(node.right, key);
        return node;
    } else {
        // 找到 key 相同的 node, 即需要进行删除的 node
        // 需要删除的 node, 分为三种情况
        // 第一种情况---一个叶子节点
        if (node.left == null && node.right == null) {
            node = null;
            return node;
        }
        // 第二种情况---一个只有一个子节点的节点
        if (node.left == null) {
            node = node.right;
            return node;
        } else if (node.right == null) {
            node = node.left;
            return node;
        }
        // 第三种情况---一个有两个子节点的节点
        // 找出右侧最小的节点(为什么找右侧呢, 符合二叉搜索树规则), 替换当前节点, 然后删除最小节点
        const minRightNode = _findMinNode(node.right);
        // 删除节点
        node.key = minRightNode.key;
        // 删除找到的右侧最小节点
        node.right = _removeNode(node.right, node.key);
        return node;
    }
}

function _findMinNode(node) {
    if (node) {
        while(node.left !== null) {
            node = node.left;
        }
        return node;
    }
    return null;
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);

function printNodeKey(value) {
    console.log('[node key]', value);
}

tree.romove(7);

tree.inOrderTraverse(printNodeKey);

// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.search(8));