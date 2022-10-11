# ... given a binary search tree

# binary search
def search_binary_tree(root, key, parent_node = None, is_found = False):
    if root is None:
        return {
            "is_found": False,
            "parent_node": None,
            "key": None
        }
    elif key == root["data"]:
        return {
            "is_found": True,
            "parent_node": None,
            "key": root
        }
    elif key < root["data"]:
        if root["left"]:
            parent_node = root
            return search_binary_tree(root["left"], key, parent_node, is_found)
        else:
            return {
                "is_found": False,
                "parent_node": parent_node,
                "key": root
            }
    else:
        if root["right"]:
            parent_node = root
            return search_binary_tree(root["right"], key, parent_node, is_found)
        else:
            return {
                "is_found": False,
                "parent_node": parent_node,
                "key": root
            }

# testing the algorithm
root = # first, create the root object
# second, populate the tree with more nodes

search_key = 5 # value you are going to search for

# printing the result
print(search_binary_tree(root, search_key))
