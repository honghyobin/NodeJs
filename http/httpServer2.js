const http=require('http');
const fs=require('fs').promises;

const server=http.createServer(async(req,res)=>{
    try{
        const data=await fs.readFile("./server2.html");
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        res.writeHead(500,{'Content-Type':'text/html; charset=utf-8'});
        res.write("<h1>안녕?</h1>");
        res.end("err : ",err.message);
    };
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write("<h1>안녕?</h1>");
    res.end("<p>서버야 반가워~</p>");
});

server.listen(8088);

server.on('listening',()=>{
    console.log("여기");
});