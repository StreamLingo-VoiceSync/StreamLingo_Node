// all socket operation happens here
const io=require('./server').io;
io.on('connection',socket=>{
    console.log(socket.id ,"is connected")
})