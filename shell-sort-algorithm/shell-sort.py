def shellsort(input_list):
    list_len = len(input_list)
    gap = list_len // 2
    
    while(gap > 0):
        for i in range(gap, list_len):
            anchor = input_list[i]
            j = i
            
            # Insertion sort
            while (j >= gap and input_list[j - gap] > anchor):
                input_list[j] = input_list[j - gap]
                j -= gap
            input_list[j] = anchor
        gap = gap // 2
    
    return input_list

# Input data
average_list = [2, 19, 1, 5, 8, 32, 6]
worst_list = [32, 19, 8, 6, 5, 2, 1]
best_list = [1, 2, 5, 6, 8, 19, 32]

# Testing the algorithm
sorted_list = shellsort(worst_list)
print(sorted_list)
