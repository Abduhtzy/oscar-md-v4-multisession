let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'π£πΆπ¬π’': 'not_announcement',
        'π΅πΆπ΅πΆπ±': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *β ${usedPrefix + command} π΅πΆπ΅πΆπ±*
  *β ${usedPrefix + command} π£πΆπ¬π’*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *π£πΆπ¬π’ / π΅πΆπ΅πΆπ±*']
handler.tags = ['group']
handler.command = /^(group)$/i

handler.admin = true
handler.botAdmin = true

export default handler
