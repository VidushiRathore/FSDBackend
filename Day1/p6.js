const fs=require('fs');
const data="I am appended to last";
fs.appendFile('./data.txt',data,(err)=>{
    if(err) throw err;
    console.log('Data appended to file !');
});