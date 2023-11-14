const fs=require('fs');
const crypto=require('crypto');
const start=Date.now();
process.env.UV_THREADPOOL_SIZE=4;
setTimeout(()=>console.log('timer one finished'),0);
setImmediate(()=>console.log("Immideate 1 finished"));

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished');
    console.log('----------------');
    setTimeout(()=>console.log('timer 2 finished'),0);
    setTimeout(()=>console.log('timer 3 finished'),3000);
setImmediate(()=>console.log("Immideate 2 finished"));


process.nextTick(()=>console.log('Process.nextTick'));

crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
    console.log(Date.now()-start,"Password Encrypted");
 });
 crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
   console.log(Date.now()-start,"Password Encrypted");
});
crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
   console.log(Date.now()-start,"Password Encrypted");
});
crypto.pbkdf2Sync('password','salt',100000,1024,'sha512',()=>{
   console.log(Date.now()-start,"Password Encrypted");
});
});



console.log('hello from the top level code');
