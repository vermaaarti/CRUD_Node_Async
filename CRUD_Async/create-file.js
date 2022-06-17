//this is mandate line to require file system(fs)
const fs = require("fs");

//here we are creating a file named myfile 
fs.writeFile("myfile.txt" , "this is our first file." , (err) =>{
    console.log("file has been created");
    // it will the error if any error occurs, otherwise it will show null value 
    console.log(err);
});