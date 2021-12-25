function message_format(username, text){
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();

    return{
        username,
        text,
        time
    }
}

module.exports = message_format;