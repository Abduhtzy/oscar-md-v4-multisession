// MADE BY BOCHILGAMING
// RECODE BY Jarot

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
*┄┄┄┅┅❑ DASHBOARD ❑┅┅┄┄┄*
┏─────────────────⬣
┆ 𝑯𝒂𝒊, ${ucapan()}  %name!👋
┗┬──────────────┈ ⳹
┏┆⬡ *Status:* %prems
┆┆⬡ *Limit:* %limit
┆┆⬡ *Money:* %money
┆┆⬡ *Role:* %role
┆┆⬡ *Level:* %level [ %xp4levelup Xp For Levelup]
┆┆⬡ *Xp:* %exp / %maxexp
┆┆⬡ *Total Xp:* %totalexp
┗┬──────────────┈ ⳹
┏┤   *𝐊𝐚𝐥𝐞𝐧𝐝𝐞𝐫*
┆┗──────────────┈ ⳹
┆┆⬡ *Days:* %week %weton
┆┆⬡ *Date:* %date
┆┆⬡ *Islami Date:* %dateIslamic
┆┆⬡ *Time:* %wib
┗┬──────────────┈ ⳹
┏┤ *𝐁𝐨𝐭 𝐈𝐧𝐟𝐨*
┆┗──────────────┈ ⳹
┆┆⬡ *Bot Name:* %me
┆┆⬡ *Mode:* %mode
┆┆⬡ *Platform:* %platform
┆┆⬡ *Type:* Node.Js
┆┆⬡ *Baileys:* Multi Device
┆┆⬡ *Prefix:* [ *%_p* ]
┆┆⬡ *Runtime:* %muptime
┆┆⬡ *Database:* %rtotalreg dari %totalreg
┗┬──────────────┈ ⳹
┏┤ *𝐈𝐧𝐟𝐨 𝐂𝐦𝐝*
┆┗──────────────┈ ⳹
┆┆⬡ *🅟︎* = Premium
┆┆⬡ *🅛︎* = Limit
┗─────────────────⬣

%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '┃❑ %cmd %isPremium %islimit',
  footer: '',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
 }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
}
  if (teks == 'update') tags = {
    'update': 'Next Update'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `┄┄┄┄┅┅| MAIN |┅┅┄┄┄┄`,
	rows: [
	    {title: `📛 ${pmenus} INFO BOT`, rowId: ".info", description: "╰► Menampilkan kecepatan respon "},
	    {title: `💌 ${pmenus} OWNER`, rowId: ".owner", description: "╰► Menampilkan List owner "},
	    {title: `📔 ${pmenus} SCRIPT`, rowId: ".sc", description: `╰► Source Code ${namebot}`},
	{title: `🗣️ ${pmenus} REQUEST FITUR`, rowId: ".request", description: "╰► Request fitur "},
	{title: `👥 ${pmenus} Sosial Media & Group Bot`, rowId: ".sosialmedia", description: "╰► terimakasih buat yang telah suport bot ini"},
	]
    },{
	title: `┄┄┄┄┅┅| SUPPORT |┅┅┄┄┄┄`,
	rows: [
	    {title: `🔖 ${pmenus} Sewa Bot`, rowId: ".sewa", description: "╰► Menampilkan list harga sewa BOT"},
	    {title: `🌟 ${pmenus} Upgrade Premium`, rowId: ".premium", description: "╰► Menampilkan list harga upgrade premium"},
	    {title: `💰 ${pmenus} Donasi`, rowId: ".donasi", description: '╰► Support BOT agar on 1 Minggu non stop'},
	{title: `✨ ${pmenus} Rate`, rowId: ".rate", description: '╰► Support BOT agar Semangat update'},
   {title: `🛒 ${pmenus} Store Oscar-Md`, rowId: ".store", description: '╰► Menampilkan List Store Oscar-Md'},
	]
	},{
	title: `┄┄┄┄┅┅| MENU |┅┅┄┄┄┄`,
	rows: [
	    {title: `🌱 ${pmenus}  𐐪-〚 All Menu 〛-𐑂`, rowId: ".? all", description: "╰► Menampilkan Semua Menu"},
	    {title: `🌱 ${pmenus} 𐐪-〚 Rpg 〛-𐑂`, rowId: ".? rpg", description: "╰► Calon anak petualang nih... -𐑂"},
	{title: `✨ ${pmenus} 𐐪-〚 Exp 〛-𐑂`, rowId: ".? xp", description: "╰► Kalau dah level 100 dapat hadiah (≧▽≦)"},
	{title: `🎮 ${pmenus} 𐐪-〚 Game 〛-𐑂`, rowId: ".? game", description: "╰► Bg kamu main game apa?.... >-<"},
	{title: `🧩 ${pmenus} 𐐪-〚 Fun 〛-𐑂`, rowId: ".? fun", description: "╰► Gabut ya bang?"},
	{title: `🐚 ${pmenus} 𐐪-〚 Kerang 〛-𐑂`, rowId: ".? kerangajaib", description: "╰► Mau tanya apa sih bg?..."},
	{title: `📑 ${pmenus} 𐐪-〚 Quotes 〛-𐑂`, rowId: ".? quotes", description: "╰► Random Inspirasi :3"},
	{title: `⛩️ ${pmenus} 𐐪-〚 Anime 〛-𐑂`, rowId: ".? anime", description: "╰► Kamu wibu ya bang?"},
	{title: `🔞 ${pmenus} 𐐪-〚 Nsfw 〛-𐑂`, rowId: ".? nsfw", description: "╰► Tch, dasar sagne"},
	{title: `🌟 ${pmenus} 𐐪-〚 Premium 〛-𐑂`, rowId: ".? premium", description: "╰► Only premium Users"},
	{title: `🎭 ${pmenus} 𐐪-〚 Anonymous chat 〛-𐑂`, rowId: ".? anonymous", description: "╰► dengan orang tidak dikenal"},
	{title: `📖 ${pmenus} 𐐪-〚 Islamic 〛-𐑂`, rowId: ".? quran", description: "╰► Tobat yuk kak"},
	{title: `🌎 ${pmenus} 𐐪-〚 Internet 〛-𐑂`, rowId: ".? internet", description: "╰► Cari sesuatu diBOT"},
  {title: `🌎 ${pmenus} 𐐪-〚 berita 〛-𐑂`, rowId: ".? berita", description: "╰► Cari berita terupdate"},
	{title: `📩 ${pmenus}  𐐪-〚 IDownloader 〛-𐑂`, rowId: ".? downloader", description: "╰► Jangan download yg aneh-aneh, Xixixi (≧▽≦)"},
	{title: `🎨 ${pmenus} 𐐪-〚 Stikers 〛-𐑂`, rowId: ".? stiker", description: "╰► Buat Sticker diBOT"},
	{title: `✏️ ${pmenus} 𐐪-〚 Nulis 〛-𐑂`, rowId: ".? nulis", description: "╰► Nulis kok males kak?"},
	{title: `🎧 ${pmenus} 𐐪-〚 Audio 〛-𐑂`, rowId: ".? audio", description: "╰► Ubah Audio dengan Filter"},
  {title: `🎧 ${pmenus}  𐐪-〚 Sound menu 〛-𐑂`, rowId: ".soundmenu", description: "╰► Kumpulan 120 Sound"},
	{title: `🏢 ${pmenus}  𐐪-〚 Group 〛-𐑂`, rowId: ".? group", description: "╰► Only Groups"},
	{title: `👑 ${pmenus}  𐐪-〚 Admin 〛-𐑂`, rowId: ".? admin", description: "╰► Only Admin Group"},
	{title: `🗂️ ${pmenus}  𐐪-〚 Database 〛-𐑂`, rowId: ".? database", description: "╰► Simpan sesuatu diBOT"},
	{title: `🛠️ ${pmenus}  𐐪-〚 tools 〛-𐑂`, rowId: ".? tools", description: "╰► Mungkin tools ini bisa membantu?"},
	{title: `ℹ️ ${pmenus}  𐐪-〚 Info 〛-𐑂`, rowId: ".? info", description: "╰► Info info BOT"},
	{title: `👩‍💻 ${pmenus}  𐐪-〚 owner 〛-𐑂`, rowId: ".? owner", description: "╰► Owner Only!"},
	{title: `❓ ${pmenus}  𐐪-〚 No katogori 〛-𐑂`, rowId: ".? nocategory", description: "╰► Fitur tanpa kategory!"},
	]
  },
]

let usrs = db.data.users[m.sender]
let tek = `       *┄┄┅┅❑ DASHBOARD ❑┅┅┄┄*

┌–––––––––––––––––☯︎
┊   「 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎  」
┊❒• ɴᴀᴍᴀ: ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┊❒• ᴛᴀɢs: @${m.sender.split`@`[0]}
┊❒• sᴛᴀᴛᴜs: ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊❒• ᴘʀᴇᴍɪᴜᴍ: ${usrs.premiumTime > 1 ? 'Yes': 'No'}
┗–––––––––––––––––☯︎
┌–––––––––––––––––☯︎
┊   「 𝐒𝐓𝐀𝐓𝐔𝐒 𝐈𝐍𝐅𝐎  」
┊❒• ᴜᴘᴛɪᴍᴇ: ${mpt}
┊❒• ᴡᴀᴋᴛᴜ: ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
┊❒• ᴜsᴇᴅ ʙᴏᴛ: ${Object.keys(global.db.data.users).length}
┊❒• ʟɪᴍɪᴛ ᴍᴜ: ${usrs.limit}
┊❒• ʟᴇᴠᴇʟ ᴍᴜ: ${usrs.level}
┊❒• ʀᴏʟᴇ ᴍᴜ: ${usrs.role}${usrs.premiumTime > 1 ? `
┊ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:
┊${clockStringP(usrs.premiumTime - new Date())}` : ''}
┗––––––––––––––––––☯︎

`
const listMessage = {
  text: tek,
  footer: wm2,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE☕︎`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    const _0x187932=_0x5c09;function _0x5c09(_0x28b840,_0x244043){const _0x1766bb=_0x1766();return _0x5c09=function(_0x5c09dc,_0x158321){_0x5c09dc=_0x5c09dc-0x1bb;let _0x4031df=_0x1766bb[_0x5c09dc];return _0x4031df;},_0x5c09(_0x28b840,_0x244043);}(function(_0x1c9e83,_0x2eef01){const _0x5e85ab=_0x5c09,_0x179660=_0x1c9e83();while(!![]){try{const _0x4c7814=-parseInt(_0x5e85ab(0x1d0))/0x1*(-parseInt(_0x5e85ab(0x1bd))/0x2)+parseInt(_0x5e85ab(0x1c4))/0x3*(parseInt(_0x5e85ab(0x1bf))/0x4)+parseInt(_0x5e85ab(0x1cc))/0x5*(-parseInt(_0x5e85ab(0x1d1))/0x6)+parseInt(_0x5e85ab(0x1c1))/0x7*(parseInt(_0x5e85ab(0x1bc))/0x8)+parseInt(_0x5e85ab(0x1cd))/0x9*(-parseInt(_0x5e85ab(0x1c7))/0xa)+parseInt(_0x5e85ab(0x1cb))/0xb*(-parseInt(_0x5e85ab(0x1be))/0xc)+parseInt(_0x5e85ab(0x1ce))/0xd;if(_0x4c7814===_0x2eef01)break;else _0x179660['push'](_0x179660['shift']());}catch(_0x2b3360){_0x179660['push'](_0x179660['shift']());}}}(_0x1766,0x70ad5));let buttonMessage={'document':{'url':sgc},'mimetype':td,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x187932(0x1c8)],'mediaType':0x2,'previewType':_0x187932(0x1c9),'title':global['titlebot'],'body':global['titlebot'],'thumbnail':await(await fetch(thumb))[_0x187932(0x1ca)](),'sourceUrl':sgc}},'caption':text,'footer':botdate,'buttons':[{'buttonId':'.owner','buttonText':{'displayText':_0x187932(0x1bb)},'type':0x1},{'buttonId':_0x187932(0x1c5),'buttonText':{'displayText':_0x187932(0x1c0)},'type':0x1},{'buttonId':_0x187932(0x1c6),'buttonText':{'displayText':'Donasi'},'type':0x1}],'headerType':0x6};await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)],buttonMessage,{'quoted':m,'mentionedJid':[m[_0x187932(0x1c3)]]});function _0x1766(){const _0x1c60e8=['3ezQcUH','.ping','.donasi','725770ccnUBU','sig','pdf','buffer','305624SHQwwY','233195fjGJSZ','72BjUaMS','2869867kBKaey','chat','6NokiEm','72PsFaxu','Owner','1832yREmVQ','205026IsvCrH','132IBvmfp','3329164htczQJ','Speed','7315FCLnNH','sendMessage','sender'];_0x1766=function(){return _0x1c60e8;};return _0x1766();}
    
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    urlButton: {
                        displayText: 'INSTAGRAM',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi',
                        id: '.donasi'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time >= 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌙"
  }
  return res
}
