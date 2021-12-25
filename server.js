const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const message_format = require('./utils/message_format.js');
const {user_join, all_users, user_leave, current_user} = require('./utils/users.js');

const socket_io = require('socket.io');
const io = socket_io(server);

app.use(express.static(path.join(__dirname,"public")));

io.on('connection', (socket) => {

    socket.on("user_join", (user) => {
        const joined_user = user_join(socket.id, user);
        // Welcome to user
        socket.emit('message', message_format("Global Chat", "Welcome to Global Chat."));
    
        // Opp-up when new users come
        socket.broadcast.emit('message', message_format("Global Chat", `${user} has joined the Global Chat.`));

        //Send users to front end
        io.emit('users', {
            users: all_users()
        });

    });

    socket.on("disconnect", ()=>{
        const user = user_leave(socket.id);

        if(user){
            io.emit("message", message_format("Global Chat", `${user.username} has left the Global Chat.`));

            io.emit("users", {
                users: all_users()
            })
        }
    });

    socket.on("chat_message", (msg)=>{
        const user = current_user(socket.id);

        io.emit("message", message_format(user.username, msg))
    })

})

server.listen(3000, ()=>{
    console.log("server started");
});