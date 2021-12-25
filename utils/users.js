const users = [];

const user_join = (id,username)=>{
    const user = { id, username };

    users.push(user);

    return user;
}

const user_leave = (id)=>{
    const index = users.findIndex(e=>e.id === id);

    if(index !== 1){
        return users.splice(index, 1)[0];
    }
    return undefined
}

const all_users = ()=>{
    return users
}

module.exports ={ user_join, all_users, user_leave}