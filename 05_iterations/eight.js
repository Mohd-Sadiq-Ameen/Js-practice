/*


let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
    console.log(`${accumulator},${currentValue} `);              // Output:0,1 
                                                                //         1,2 
    return accumulator + currentValue;                         //          3,3 
}, 0);                                                        //           6,4 
                                                             //            10,5 
console.log(sum);                                           // Output: 15

*/

let numbers = [1, 2, 3, 4, 5];

const show = numbers.reduce((acc , curValue)=> acc + curValue , 0)

console.log(show);
