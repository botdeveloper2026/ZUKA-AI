const fs = require('fs');
const path = require('path');
const config = require('../settings')
const {zuka-ai , commands} = require('../zuka-ai')


// Composing (Auto Typing)
zuka-ai({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
