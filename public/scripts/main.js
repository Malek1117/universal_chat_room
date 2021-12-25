const chat_messages = document.getElementById("chat_area");
const users_list = document.getElementById("users");

const user = window.location.search.split("=")[1];

const socket = io();

socket.emit("user_join", user);

socket.on("users", ({users})=>{
    add_users_dom(users);
})

socket.on("message", (message)=>{
    add_message_dom(message);

    chat_messages.scrollTop = chat_messages.scrollHeight;
});

const add_message_dom = ({username, text, time})=>{
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `
        <p class="user_time">${username} <span>${time}</span></p>
        <p class="msg">${text}</p>
    `;

    chat_messages.appendChild(div);
}

const add_users_dom = (users)=>{
    users_list.innerHTML = "";

    users.forEach((e)=>{
        const li = document.createElement("li");
        li.innerHTML = e.username;
        users_list.appendChild(li);
    })
}