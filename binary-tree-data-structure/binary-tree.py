# creating a node
def create_root(data):
    return {
        "data": data,
        "left": None,
        "right": None
    }

# inserting a node to the tree
def insert_node(root, data):
    
    # function to create a node
    def create_node(data):
        return {
            "data": data,
            "left": None,
            "right": None
        }
    
    # checks whether the data property points to a valid node
    # if so, proceed with the insertion process, otherwise point the data property to the data parameter (else statment)
    if root["data"]:
        
        # check whether the data parameter is greater than the data property
        # if so, proceed with the insertion process on the left node, otherwise proceed with the right node
        if data < root["data"]:
            
            # if the left node is None, point it to a newly created node
            # otherwise call insert_node function on it
            if root["left"] is None:
                root["left"] = create_node(data)
            else:
                insert_node(root["left"], data)
        else:
            # if the right node is None, point it to a newly created node
            # otherwise call insert_node function on it
            if root["right"] is None:
                root["right"] = create_node(data)
            else:
                insert_node(root["right"], data)
    else:
        root["data"] = data

# traversing the tree (pre-order, in-order, and post-order) recursively
def traverse_tree_recur(root, fn, order = "pre_order"):
    
    # if order is set to pre-order, execute the fn paramenter at this point (tipical behavior of a pre-order traversal)
    if order == "pre_order": fn(root["data"])
    
    # proceed visiting the left node
    if root["left"]:
        traverse_tree_recur(root["left"], fn, order)
    
    # if order is set to in-order, execute the fn paramenter at this point (tipical behavior of a in-order traversal)
    if order == "in_order": fn(root["data"])
    
    # proceed visiting the right node
    if root["right"]:
        traverse_tree_recur(root["right"], fn, order)
    
    # if order is set to post-order, execute the fn paramenter at this point (tipical behavior of a pre-order traversal)
    if order == "post_order": fn(root["data"])

# traversing the tree (pre-order, in-order, and post-order) iteratively
def traverse_tree_iterate(root, fn, order = "pre_order"):
    current = root
    stack = []
	
    if order == "post_order":
	    while current and current not in stack:
	        if current["left"] and current["left"] not in stack:
	            current = current["left"]
	        elif current["right"] and current["right"] not in stack:
	            current = current["right"]
	        else:
	            fn(current["data"])
	            stack.append(current)
	            current = root
	    
    else:
        while True:
    		
    		# Reach the left most Node of the current Node
	        if current is not None:
    			
    			# Place pointer to a tree node on the stack
    			# before traversing the node's left subtree
	            if order == "pre_order": fn(current["data"])
	            stack.append(current)
	            current = current["left"]
    		
    		# BackTrack from the empty subtree and visit the Node
    		# at the top of the stack; however, if the stack is
    		# empty you are done
	        elif(stack):
	            current = stack.pop()
	            if order == "in_order": fn(current["data"])
    		
    			# We have visited the node and its left
    			# subtree. Now, it's right subtree's turn
	            current = current["right"]
    
	        else:
	            break

# printing tree nodes
def print_node(node):
    print(node)

# testing algorithms
# inserting nodes (sub-trees)
root = create_root(10)
# nodes = [24, 27, 23, 26, 28, 29]
nodes = [8, 7, 12]

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
