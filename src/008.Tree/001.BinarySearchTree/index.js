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

// tree.inOrderTraverse(printNodeKey);

console.log(tree.min());
console.log(tree.max());
console.log(tree.search(17));