//this is mandate line to require file system(fs)
const fs = require("fs");

//here we are reading the data from the file
fs.readFile("myfile.txt" , (err, data) =>{
    console.log(data);
});

// here we will get the buffer data 
// to avoid this problem, use character encoding
// and run the below mentioned command

// fs.readFile("myfile.txt" ,"UTF-8" , (err, data) =>{
//     console.log(data);
// });
