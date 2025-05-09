const axios = require('axios');
const config = require('../settings');
const fs = require('fs');
const path = require('path');
const {zuka-ai , commands} = require('../zuka-ai')


// Replace this with your actual GitHub RAW JSON URL
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/botdeveloper2026/ZUKA-AI-DATA/main/autoreply.json';

zuka-ai({
  on: "body"
},
async (conn, mek, m, { body }) => {
  try {
    const res = await axios.get(GITHUB_RAW_URL);
    const data = res.data;

    for (const text in data) {
      if (body.toLowerCase() === text.toLowerCase()) {
        if (config.AUTO_REPLY === 'true') {
          await m.reply(data[text]);
        }
        break;
      }
    }
  } catch (err) {
    console.error('Auto-reply fetch error:', err.message);
  }
});
