// VERSION 1
var array1 = [0, 6, 5, 456, 11, 3, 1, 8, 7, 2, 4];
var temp;

for (let i = 1; i < array1.length; i++) {
    for (j = i; j > 0; j--) {
        if (array1[j] < array1[j - 1]) {
            //Here we can approach this in at least two ways:

            //First approach: using the temp variable and switching i and j
            /*temp = array1[j - 1];
            array1[j - 1] = array1[j];
            array1[j] = temp; */

            // Second approach: Array destructuring
            /* Here we are using Array destructuring to assign each element on the left to an element on the right that has the same index.*/
            [array1[j - 1], array1[j]] = [array1[j], array1[j - 1]];
        } else {
            break;
        }
    }
}

console.log(array1);

//=================================
// VERSION 2
/*Here we can go further and wrap up all the previous code in a function for code reuse,
and duplicate the array, so our function doesn't affect the original array.*/

function insertionSorting(array) {
    const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
        for (j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else {
                break;
            }
        }
    }

    return arr;
}

console.log(insertionSorting([0, 6, 5, 456, 11, 3, 1, 8, 7, 2, 4]));
