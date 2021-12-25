function message_format(username, text){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes()<=9?"0"+today.getMinutes():today.getMinutes();
    let time = hour + ":" + minute;

    return{
        username,
        text,
        time
    }
}

module.exports = message_format;