const fs = require('fs');
const path = require('path');
const config = require('../settings')
const {zuka-ai , commands} = require('../zuka-ai')


//auto recording
zuka-ai({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {       
 if (config.AUTO_RECORDING === 'true') {
                await conn.sendPresenceUpdate('recording', from);
            }
         } 
   );
