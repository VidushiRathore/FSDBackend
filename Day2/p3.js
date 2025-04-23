const http = require('http');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await data.json();
    res.end(JSON.stringify(jsonData));
});

server.listen(9000, (err) => {
    if (err) 
        throw err;
    console.log('Server is running on port 9000');
});