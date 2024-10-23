class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null;
    }

    insertNode(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNewNode(this.root, newNode)
        }
    }

    insertNewNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNewNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNewNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    //Tree in Root, Left and Right direction
    preOrderTree(root) {
        if (root) {
            console.log("preOrderTree: ", root.value);
            this.preOrderTree(root.left);
            this.preOrderTree(root.right);
        }
    }

    //Tree in Left, Root and Right direction
    inOrderTree(root) {
        if (root) {
            this.inOrderTree(root.left);
            console.log("inOrderTree: ", root.value);
            this.inOrderTree(root.right);
        }
    }

    //Tree in Left, Right and Root direction
    postOrderTree(root) {
        if (root) {
            this.postOrderTree(root.left);
            this.postOrderTree(root.right);
            console.log("postOrderTree: ", root.value);
        }
    }

    //BFS method

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right);
            }
        }

    }

    minValueOfTree(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.minValueOfTree(root.left);
        }
    }

    maxValueOfTree(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.minValueOfTree(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            else if (!root.right) {
                return root.left
            }
            root.value = this.minValueOfTree(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }
}