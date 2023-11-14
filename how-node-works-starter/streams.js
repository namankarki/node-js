const fs=require('fs');
const server=require('http').createServer();

server.on('request', (req,res)=>{
    //Solution 1
    // fs.readFile('test-file.txt', (err,data)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.end(data);
    //     }
    // });

    //solution 2: streams

    // const readable= fs.createReadStream('test-file.txt')
    // readable.on('data',chunk=>{
    //     res.write(chunk);
    // })
    // readable.on('end', ()=>{
    //     res.end();
    // });
    // readable.on('error', err=>{
    //     console.log(err);
    //     res.statusCode=500;
    //     res.end('File not found');
    // })


    //solution 3: streams


const readable= fs.createReadStream('test-file.txt')
readable.pipe(res);
//redableSourse.pipe(writableDest)

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening.......');
});