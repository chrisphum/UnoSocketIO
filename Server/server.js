const clientLocation = 'http://localhost:8080'

const io = require("socket.io")(3000, {
    cors: {
        origin: [clientLocation],
    }
})

// Useful resource: https://stackoverflow.com/questions/32674391/io-emit-vs-socket-emit 



io.on("connection", socket => {

    // Logs user into room 1 or room 2 when they connect to the socket
    console.log(socket.id);
    const waitingRoomID = 1;
    const playingRoomID = 2;
    socket.join(waitingRoomID);

    // Updates the number of people in the "playing" room and emits this 
    // count to all users in the "waiting" room
    let sizee = io.sockets.adapter.rooms.get(playingRoomID)
    if (sizee == null) {sizee = 0}
    else { sizee = sizee.size }
    io.in(waitingRoomID).emit('count',  sizee);

    // This runs when the user clicks "join playing room" button
    socket.on("clickedJoin", e => {
        socket.join(playingRoomID)
        io.in(playingRoomID).emit('count', sizee);
    })

    
    
})











