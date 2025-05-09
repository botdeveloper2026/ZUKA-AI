const { zuka-ai } = require("../zuka-ai");
const config = require("../settings");
const moment = require("moment");

const ALIVE_IMG = "https://files.catbox.moe/41lt2l.jpg";
let botStartTime = Date.now();

zuka-ai({
    pattern: "alive",
    desc: "Check if the bot is active.",
    category: "main",
    react: "💡",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User";
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const ms = Date.now() - botStartTime;
        const runtime = [
            Math.floor(ms / (1000 * 60 * 60)),
            Math.floor((ms / (1000 * 60)) % 60),
            Math.floor((ms / 1000) % 60),
        ].map((v) => v.toString().padStart(2, '0')).join(":");

        const toTinyCap = (text) =>
            text.split("").map(c => {
                const map = { a:'ᴀ', b:'ʙ', c:'ᴄ', d:'ᴅ', e:'ᴇ', f:'ғ', g:'ɢ',
                    h:'ʜ', i:'ɪ', j:'ᴊ', k:'ᴋ', l:'ʟ', m:'ᴍ', n:'ɴ',
                    o:'ᴏ', p:'ᴘ', q:'ǫ', r:'ʀ', s:'s', t:'ᴛ', u:'ᴜ',
                    v:'ᴠ', w:'ᴡ', x:'x', y:'ʏ', z:'ᴢ' };
                return map[c.toLowerCase()] || c;
            }).join("");

        const msg = `
╭─❍ *${toTinyCap("zuka-ai status")}* ❍─╮
│  
│  🧑🏻‍💻 ʜɪ: *${pushname}*
│  🕒 ᴛɪᴍᴇ: *${currentTime}*
│  📅 ᴅᴀᴛᴇ: *${currentDate}*
│  ⏳ ᴜᴘᴛɪᴍᴇ: *${runtime}*
│
│  ⚙ ᴍᴏᴅᴇ: *${config.MODE}*
│  ✨ ᴠᴇʀsɪᴏɴ: *${config.version}*
╰───────────────❍

✅ *Zuka-Ai is online and operational!*
🔧 *System running smoothly!*
        `.trim();

        await conn.sendMessage(from, {
            image: { url: ALIVE_IMG },
            caption: msg,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363397999458176@newsletter',
                    newsletterName: '⚡ᴢᴜᴋᴀ-ᴀɪ⚡',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command:", error);
        return reply(`❌ Error in alive command:\n${error.message}`);
    }
});
