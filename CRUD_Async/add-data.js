//this is mandate line to require file system(fs)
const fs = require("fs");

//here we are adding data in the existing file

fs.appendFile("myfile.txt", " this is the second dummy data to update", (err) =>{
    console.log("added data");
    // if any error occurs it will throw the error otherwise null value will be given by it
    console.log(err); 
});