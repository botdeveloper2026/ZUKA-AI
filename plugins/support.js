/*
Project Name : ZUKA-AI
Creator      : Zuka
Repo         : https://github.com/botdeveloper2026/ZUKA-AI
Support      : wa.me/263789544743
*/

const config = require('../settings');
const { zuka-ai, commands } = require('../zuka-ai');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

zuka-ai({
    pattern: "support",
    alias: "follow",
    desc: "base",
    category: "support",
    react: "📡",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        // Get the current time for dynamic greeting
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let dec = `
╭────────────≫
┋ 🌟 *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *ᴢᴜᴋᴀ*
┋ 🚀 *ᴍᴏᴅᴇ* : *${config.MODE}*
┋ ⚡ *ᴘʀᴇғɪx* : *${config.PREFIX}*
┋ 🧩 *ᴠᴇʀsɪᴏɴ* : ${config.version}
┋ ⏳ *ᴜᴘᴛɪᴍᴇ* : _${runtime(process.uptime())}_
┋ 🕰️ *ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ* : _${currentTime}_
╰────────────≫

   💬 *ᴢᴜᴋᴀ-ᴀɪ sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs* ↷

${readMore}
\`🔔 ᴄʜᴀɴɴᴇʟ🩵\`
🔗 https://whatsapp.com/channel/0029VbAdr66545uqIbTkA82A

\`👥 ɢʀᴏᴜᴘ💙\`
🔗 https://chat.whatsapp.com/IvEIztIHRH24BnvdsSvGhv

\`🎥 ʏᴛ ᴄʜᴀɴɴᴇʟ🚀\`
🔗 https://youtube.com/@botdeveloper2026

\`💻 ᴢᴜᴋᴀ\` *Developer🧑‍💻*
🔗 wa.me/263789544743?text=Support!

> 🚀 *ᴊᴏɪɴ ᴢᴜᴋᴀ-ᴀɪ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs* 🚀
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/41lt2l.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397999458176@newsletter',
                        newsletterName: '🪀『 ⚡ᴢᴜᴋᴀ-ᴀɪ⚡ 』🪀',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio message with a fun personalized touch
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/XdKing2/MALVIN-DATA/raw/refs/heads/main/autovoice/menu2.mp3' },
            mimetype: 'audio/mp3',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`*⚠️ Oops! Something went wrong:* ${e.message}`);
    }
});

//  ʙʏ ᴢᴜᴋᴀ
