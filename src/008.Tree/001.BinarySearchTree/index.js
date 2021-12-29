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

tree.inOrderTraverse(printNodeKey);