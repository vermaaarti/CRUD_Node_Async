//this is mandate line to require file system(fs)
const fs = require("fs");

//here we are updating the name of the file from myfile.txt to mydata.txt
fs.rename("myfile.txt", "mydata.txt", (err)=>{
    console.log("updated name");
});

