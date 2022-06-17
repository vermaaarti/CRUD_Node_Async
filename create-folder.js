//this is mandate line to require file system(fs)
const fs = require("fs");

//ctrate a folder named CRUD_Async
// Note-- once the floder name it won't create again, so use different folder name 
fs.mkdir("CRUD_Async" , (err) =>{
console.log(err);
});
