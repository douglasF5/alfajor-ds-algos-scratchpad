# Merge sort function
def mergeSort(input_list, start_idx = 0, end_idx = None):
    if (end_idx is None):
        end_idx = len(input_list)
    
    if (end_idx - start_idx > 1):
        middle_idx = (end_idx + start_idx)//2
        
        mergeSort(input_list, start_idx, middle_idx)
        mergeSort(input_list, middle_idx, end_idx)
        
        merge(input_list, start_idx, middle_idx, end_idx)
    
    return input_list

# Merge
def merge(input_list, start_idx, middle_idx, end_idx):
    
    # Temporary right and left lists
    left_list = input_list[start_idx:middle_idx]
    right_list = input_list[middle_idx:end_idx]
    top_left, top_right = 0, 0
    
    # Merging the lists
    for idx in range(start_idx, end_idx):
        if(top_left >= len(left_list)):
            input_list[idx] = right_list[top_right]
            top_right += 1
        elif(top_right >= len(right_list)):
            input_list[idx] = left_list[top_left]
            top_left += 1
        elif(left_list[top_left] < right_list[top_right]):
            input_list[idx] = left_list[top_left]
            top_left += 1
        else:
            input_list[idx] = right_list[top_right]
            top_right += 1

# Input data
average_list = [2, 19, 1, 5, 8, 32, 6]
worst_list = [32, 19, 8, 6, 5, 2, 1]
best_list = [1, 2, 5, 6, 8, 19, 32]

# Testing the algorithm
sorted_list = mergeSort(average_list)
print(sorted_list)
