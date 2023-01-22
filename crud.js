const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'crud');
const filepath = `${dirpath}/apple.txt`
//for creating file
fs.writeFileSync(filepath, "this is name file");
//for reading file
fs.readFile(filepath, 'utf8',(error, item) => {
    console.log(item);
})
//for updating file
fs.appendFile(filepath, 'ans this is add', (err) => {
    if (!err) {
        console.log("file is updated");
    }
})
//for renaming
fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if (!err) {
                console.log("file is updated");
           }
});
//for delete
fs.unlinkSync(`${dirpath}/fruit.txt`);
//what is buffer 
//buffer is temporary memory which is needed by node