const EventEmitter=require('events');
const http=require('http');
class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmmitter=new Sales();

myEmmitter.on('newSale',()=>{
    console.log('new sale');
});

myEmmitter.on('newSale', ()=>{
    console.log('Coustomer name: Jonas');
});

myEmmitter.on('newSale', stock=>{
    console.log(`There are now ${stock} items in stock`);
});
myEmmitter.emit('newSale',9);

//////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res)=>{
     console.log('request recived');
     console.log(req.url);
     res.end(' request recived :)');
});

server.on('request', (req, res)=>{
    console.log(' another request  :)');
});


server.on('close',()=>{
   console.log('Server closed');
});

server.listen(8000, '127.0.0.1', ()=>{
   console.log('waiting for requests..........');
});