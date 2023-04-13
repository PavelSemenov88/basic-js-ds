const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.tree = addWithin(this.tree, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return hasNode(this.tree, data);
    function hasNode(node, data){
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }

      return data < node.data ? hasNode(node.left, data) : hasNode(node.right, data);
    }
    

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return findNode(this.tree, data);
    function findNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;

      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.tree) {
      return;
    }

    let node = this.tree;
    while(node.left) {
      node = node.left;
    }

    return node.data;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if(!this.tree) {
      return;
    }
    let node = this.tree;
    while(node.right) {
      node = node.right;
    }
    return node.data;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};