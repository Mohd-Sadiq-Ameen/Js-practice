/*
const score = 100;
console.log(score);                       // output: 100

const newScore = new Number(100.23);
console.log(newScore);                    // output : 100.23

console.log(newScore.toString().length);  // output : 100.23  -length bta rha ha number ka , conv to string necessary, otherwise undefined
console.log(newScore.toFixed(1));         // output :100.2    -decimal ke baad ke kitne number chahae Eg: 100.0 , 100.00


const num = 23.99;
console.log(num.toPrecision(1));     //output : 2e+1
console.log(num.toPrecision(2));     //output : 24
console.log(num.toPrecision(3));     //output : 24.0
console.log(num.toPrecision(4));     //output : 23.99
console.log(num.toPrecision(5));     //output : 23.990


const num = 100000000;
console.log(num.toLocaleString());          // output: 100,000,000. - US Number System
console.log(num.toLocaleString('en-IN'));   // output: 10,00,00,000 - Indian number system


// ****************** MATHS library *******************************************************************************


console.log(Math);
console.log(Math.abs(-76));      // output : 76 , conv -ve to +ve
console.log(Math.round(4.4));    // output : 4 , roundoff of number before decimal
console.log(Math.round(4.5));    // output : 5 , roundoff of number before decimal
console.log(Math.round(4.6));    // output : 5 , roundoff of number before decimal
console.log(Math.round(55.49));  // output : 55
console.log(Math.round(55.50));  // output : 56

console.log(Math.min(4,3,5,6,-4));  // output : -4
console.log(Math.max(4,3,5,6,-4));  // output : 6

console.log(Math.ceil(4.2));     // output : 5 , we r deciding the roundoff where to go ( ceil = higher )
console.log(Math.floor(4.9));    // output : 4 , floor = lower value  


console.log(Math.random());            // output : random value between 0 & 1
console.log((Math.random()*10) + 1) ;  // output : random value between 1 to 10 with decimals
console.log(Math.floor((Math.random()*10) + 1)) ;  // output : random value between 1 to 10 with no decimals
*/
const min = 1
const max = 6

console.log(Math.floor(Math.random()* (max - min +1)) + 1); // formula , example shown here is dice random numbers