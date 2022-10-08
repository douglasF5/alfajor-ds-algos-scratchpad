# creating a node
def create_root(data):
    return {
        "data": data,
        "left": None,
        "right": None
    }

# inserting a node to the tree
def insert_node(root, data):
    def create_node(data):
        return {
            "data": data,
            "left": None,
            "right": None
        }
    
    if root["data"]:
        if data < root["data"]:
            if root["left"] is None:
                root["left"] = create_node(data)
            else:
                insert_node(root["left"], data)
        else:
            if root["right"] is None:
                root["right"] = create_node(data)
            else:
                insert_node(root["right"], data)
    else:
        root["data"] = data

# traversing the tree (pre-order, in-order, and post-order) recursively
def traverse_tree_recur(root, fn, order = "pre_order"):
    if order == "pre_order": fn(root["data"])
    
    if root["left"]:
        traverse_tree_recur(root["left"], fn, order)
    
    if order == "in_order": fn(root["data"])
    
    if root["right"]:
        traverse_tree_recur(root["right"], fn, order)
    
    if order == "post_order": fn(root["data"])

# traversing the tree (pre-order, in-order, and post-order) iteratively
def traverse_tree_recur(root, fn, order = "pre_order"):
    #...

# printing tree nodes
def print_node(node):
    print(node)

# testing algorithms
# inserting nodes (sub-trees)
root = create_root(12)
nodes = [24, 27, 23, 26, 28, 29]

for node in nodes:
    insert_node(root, node)

# printing tree nodes in different orders using recursion
traverse_tree_recur(root, print_node, "pre_order")
traverse_tree_recur(root, print_node, "in_order")
traverse_tree_recur(root, print_node, "post_order")

# printing tree nodes in different orders iteratively
traverse_tree_iterate(root, print_node, "pre_order")
traverse_tree_iterate(root, print_node, "in_order")
traverse_tree_iterate(root, print_node, "post_order")
