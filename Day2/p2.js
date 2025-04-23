const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1> Hello world!</h2>');
});
server.listen(9000,(err)=>{
    if(err){
        console.log('Error occured',err);
    }
    
    console.log("Server is running at http://localhost:9000/");
});
