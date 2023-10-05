const {Server} = require("socket.io");

const io = new Server(3001)

io.on('connection', socket =>{
    console.log('socket connected', socket.id);
});

