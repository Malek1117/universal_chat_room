const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const message_format = require('./utils/message_format.js');

const socket_io = require('socket.io');
const io = socket_io(server);

app.use(express.static(path.join(__dirname,"public")));



io.on('connection', (socket) => {
    socket.emit('messege', message_format("Global Chat", "Welcome to Global Chat."))


})

server.listen(3000, ()=>{
    console.log("server started");
});