//Objective is to find the longest path between any two nodes in a tree. This path
//may or may not pass through the root.

class Node {
    constructor(left, right, data) {
        this.data = data
        this.left = null 
        this.right = null
    }
}

class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(data) {
      this.root = new Node(null, null, data)
    }
  
    addLeftNode(node, data) {
      node.left = new Node(null, null, data)
    }
  
    addRightNode(node, data) {
      node.right = new Node(null, null, data)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 3)
tree.addLeftNode(tree.root.left, 4)
tree.addRightNode(tree.root.left, 5)


//O(n) solution that performs a dfs traversal through the tree and continuously updates
//both the left and right height. It returns the max between both.

let result = 0

function dfs(node) {
    if (!node) {
        return 0
    }

    //These should update with +1 every single time a new node is passed
    let leftHeight = dfs(node.left)
    let rightHeight = dfs(node.right)

    //Here we update the max path length
    result = Math.max(result, leftHeight + rightHeight)

    //Here we update the height at every single new node
    return Math.max(leftHeight, rightHeight) + 1
}
dfs(tree.root)

return result
