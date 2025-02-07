const fs=require('fs');
const data="I am new asynchronous written Data File";
fs.writeFile("./data.txt",data,(err,data)=>{
    if(err){
        console.error("Error reading file",err);
        return;
    }
    else{
        console.log("File written successfully");
    }
    
});

