let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        '𝘣𝘶𝘬𝘢': 'not_announcement',
        '𝘵𝘶𝘵𝘶𝘱': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} 𝘵𝘶𝘵𝘶𝘱*
  *○ ${usedPrefix + command} 𝘣𝘶𝘬𝘢*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *𝘣𝘶𝘬𝘢 / 𝘵𝘶𝘵𝘶𝘱*']
handler.tags = ['group']
handler.command = /^(group)$/i

handler.admin = true
handler.botAdmin = true

export default handler
