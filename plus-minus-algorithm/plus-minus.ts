function plusMinus(arr: number[]): void {
    // Write your code here
    const len = arr.length;
    
    let positive: number = 0
    let negative: number = 0
    let zeros: number = 0;
    
    //counting targets
    arr.forEach(element => {
        switch(true) {
            case element > 0:
                positive++;
                break;
            case element < 0:
                negative++;
                break;
            default:
                zeros++;
        }
    });
    
    const count = [
      (positive / len).toFixed(6),
      (negative / len).toFixed(6),
      (zeros / len).toFixed(6)
    ];
    
    //printing values
    count.forEach((target, idx) => {
        console.log(target)
    });
    
    //TODO
    //[x] calculate the ratio for each number
        //[x] got throught counting the targets
        //[x] maybe I an use an array to keep track of the counting
        //[?] decimal precision
    //[x] print number
        //- use for each loop for printing the values
}
              
//TESTING THE ALGORITHM
plusMinus([-1, -1, 0, 1, 1]);
              
//expected output
//0.400000
//0.400000
//0.200000
