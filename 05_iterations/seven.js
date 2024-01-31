/*

const array = [1,2,3,4,5]

const show = array.map((item)=>{         // filter - filter me sirf select krte hai based on particular condition,true/false
    return  item + 5;                    // map - map pe item pe changes kea ja skte hai & fhir use select krte hai , 
})

console.log(show);

// chaining

const array = [1,2,3,4,5]

const show = array.map( (item )=> item*10 ).map( (item )=> item + 1 )               

console.log(show);         // output :[ 11, 21, 31, 41, 51 ]

*/

const array = [1,2,3,4,5]

const show = array.map( (item )=> item*10 ).map( (item )=> item + 1 ).filter((item)=> item > 32)               

console.log(show);         // output : [ 41, 51 ]