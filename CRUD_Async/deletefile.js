//this is mandate line to require file system(fs)
const fs = require('fs');

//here we are deleting the file
fs.unlink('mydata.txt', function(err) {
    if (err) throw err;
    console.log('file has been deleted successfully');
});

