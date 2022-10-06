//by Jarot offc

import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/musik1.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ",
    mediaType: 2,
    description: "https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ", 
    title: 'oscar-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
  handler.command = /^('musik1)$/i
  handler.tags = ['premium']
  handler.help = ['musik1']
  handler.premium = true

  export default handler