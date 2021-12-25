const chat_messages = document.getElementById("chat_area");



const socket = io();

socket.on("messege", (message)=>{
    console.log("he",message);
    add_message_dom(message);
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