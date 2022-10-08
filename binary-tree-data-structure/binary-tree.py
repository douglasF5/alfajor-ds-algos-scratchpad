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

    # method printing nodes (pre-order traversal)
    def print_nodes_pre_order(self):
        print(self.data)
        
        if self.left:
            self.left.print_nodes_pre_order()
        if self.right:
            self.right.print_nodes_pre_order()
    
    # method printing nodes (in-order traversal)
    def print_nodes_in_order(self):
        if self.left:
            self.left.print_nodes_in_order()
            
        print(self.data)
        
        if self.right:
            self.right.print_nodes_in_order()
    
    # method printing nodes (post-order traversal)
    def print_nodes_post_order(self):
        if self.left:
            self.left.print_nodes_post_order()
        if self.right:
            self.right.print_nodes_post_order()
        
        print(self.data)

# testing the class and its methods
# creating the root node
root = Node(12)

# inserting nodes (sub-trees)
root.insert(6)
root.insert(14)
root.insert(3)

# traversing tree and printing nodes
root.print_nodes_pre_order()
root.print_nodes_in_order()
root.print_nodes_post_order()
