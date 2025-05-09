const { zuka-ai, commands } = require('../zuka-ai');

zuka-ai({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const text = `
╭─⌈ *𝙕𝙐𝙆𝘼-𝘼𝙄 𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙀𝙍* ⌋──
│
│ 👋 Hello *${name}*,
│
│ 🤖 I’m *𝙕𝙐𝙆𝘼-𝘼𝙄 own*, a multi-functional
│    WhatsApp Bot built to assist you!
│
│ 👨‍💻 *OWNER DETAILS:*
│ ───────────────
│ 🧠 *Name* : Zuka
│ 🕯️ *Age* : +16
│ ☎️ *Contact* : wa.me/+263789544743
│ ▶️ *YouTube* : https://youtube.com/@botdeveloper2026
│
│ ⚡ Powered by *Zuka*
│
╰───────────────
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/41lt2l.jpg' },
                caption: text,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397999458176@newsletter',
                        newsletterName: '🪀『 ⚡ᴢᴜᴋᴀ-ᴀɪ⚡ 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "Zuka-Ai Bot",
                        body: "Created with love by Zuka",
                        thumbnailUrl: 'https://files.catbox.moe/41lt2l.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://youtube.com/@botdeveloper2026",
                        sourceUrl: "https://youtube.com/@botdeveloper2026"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
