# Read: Trees

## Content

Terminology

A Tree node is a component that can have its own values as well as pointers to other nodes.
The node at the beginning of the tree is called the root.
In a k-ary tree, K is an integer that determines the maximum number of children a node can have.
In a binary tree, a reference to one child node is shown on the left.
Right - In a binary tree, a reference to the other child node.
A tree's edge is the connection between a parent and a child node.
Leaf - A node with no offspring is called a leaf.
The number of edges from the root to the furthest leaf determines a tree's height.

traversal types include:
Depth First - emphasizes traversing the tree's depth first, and there are several methods for doing so, each of which affects the order in which we search/print the root. Recursion is used to navigate through a tree.
First, there are three techniques of depth. Root >> left >> right >> pre-order Left >> root >> right, in that sequence After that, the order is left >> right >> root.
Breadth First - iterates over the tree by node-by-node traversing each level of the tree.

Binary and k-ary trees are two types of trees.
K-ary Trees - nodes that can have more than two children, no specific sorting order, and nodes may be added to a binary tree wherever space allows. Binary Trees - nodes that can have more than two children, no specified sorting order, and nodes can be added to a binary tree anywhere space allows. The value K denotes the maximum number of offspring that each Node can have.
Breadth First Traversal - takes a similar approach to breadth first traversal by placing nodes into a queue, but instead of verifying for the presence of a left and right child, we go along a list of children of length k. Adding a node entails filling all "child" places from the top down, while utilizing breadth first traversal. You must reference both the new node to construct and the parent node to which the child is linked if you wish to add a node to a specified position. Inserting a new node has a Big O time complexity of O. (n).

Binary Search Tree (BST) - a tree with some structure, with nodes ordered so that all values less than the root are on the left, and all values greater than the root are on the right.
The insertion and search operations of a Binary Search Tree have a Big O time complexity (h).

***

[⇐ Home Page](../../README.md)