const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
// 
fs.readdir(dirpath, (error, files) => {
    files.forEach((item) => {
        console.log(item);
    });
});