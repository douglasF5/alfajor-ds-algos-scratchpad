# node class
class Node:
    # constructor
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

    # insert method
    def insert(self, data):
        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            else:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
        else:
            self.data = data

    # print the tree method (in-order traversal)
    def print_nodes_in_order(self):
        print(self.data)
        if self.left:
            self.left.print_tree()
        if self.right:
            self.right.print_tree()

# testing the class and its methods
# creating the root node
root = Node(12)

# inserting nodes (sub-trees)
root.insert(6)
root.insert(14)
root.insert(3)

# traversing tree and printing nodes
root.print_nodes_in_order()
