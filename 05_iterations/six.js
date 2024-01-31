/*
const arrayName = ["js" , "java" , "python"]     // Array

const store = arrayName.forEach((item)=>{        //output : js java python  (each in diff line)   (forEach loop format)
    console.log(item);
})

console.log(store);                              // output : undefined



const nums = [ 1,2,3,4,5,6,7,8,9,10];

const run = nums.filter((num)=> num > 5)    // filter operation  

console.log(run);                           // output : [ 6, 7, 8, 9, 10 ]


const nums = [ 1,2,3,4,5,6,7,8,9,10];

const run = nums.filter((num)=> {
    return num > 5                        // if use {} inside filter , return use necessary for working
})    

console.log(run);                           // output : [ 6, 7, 8, 9, 10 ]


const nums = [ 1,2,3,4,5,6,7,8,9,10];

const run = nums.forEach((item)=>{            // output:6 7 8 9 10  --(each diff line )
    if (item > 5) {
        console.log(item);
    } 
})

console.log(run);                              // output : undefined


const nums = [ 1,2,3,4,5,6,7,8,9,10];

const table = []

const run = nums.forEach((item)=>{
    if (item > 5) {
        table.push(item);                     // .push -- push items into array/something eg: array.push(item)
    } 
})

console.log(table);                          // output : [ 6, 7, 8, 9, 10 ]


let books = [
    { 
        title: 'To Kill a Mockingbird', 
        genre: 'Fiction', 
        publisher: 'J. B. Lippincott & Co.', 
        publishYear: 1960 
    },
    { 
        title: 'The Great Gatsby', 
        genre: 'Fiction', 
        publisher: 'Charles Scribner\'s Sons', 
        publishYear: 1925 
    },
    { 
        title: '1984', 
        genre: 'Science Fiction', 
        publisher: 'Secker & Warburg', 
        publishYear: 1949 
    }
];

let show = books.filter((item)=> {
    return item.genre === 'Fiction'
})

 console.log(show);                   // output : whole information of element whose genre = "fiction"
*/

console.log('------');

show = books.filter((item)=>{          // use the variable show = 2times , use of let 
    return item.publishYear >= 1960 
})

console.log(show); 