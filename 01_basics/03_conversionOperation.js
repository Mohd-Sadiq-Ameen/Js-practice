let score = false;

console.log("Old value = " + score);
console.log("typeof Old = " + typeof(score));

// Conversion to Number
// when string => number , it value = NaN , eg : "33abc" = NaN , " sadiq" = NaN
// null => number , conversion when happen , null => 0
// undefined => number , value = NaN  
// true => 1 , false => 0 , convert to 


// Conversion to boolean

// 0 = false , 1 & any number = true
// " " => true , "string" = true


let neWw = Boolean(score);

console.log("New value = " + neWw);
console.log("typeof New = " + typeof neWw);


// Converion to string
// 32 => 32 , type ofcourse string
// boolean => string , true => true , false => false


let neW = String(score);

console.log("New value = " + neW);
console.log("typeof New = " + typeof neW);