const fs = require('fs');

const oldArchive = 'archive.txt'
const newArchive = 'new.txt'


fs.rename( oldArchive, newArchive, function(err){
    if(err){
        console.log(err)
        return
    }

    console.log(`the archive ${oldArchive} was renamed to ${newArchive}`)
})