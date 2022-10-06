let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar 𝘕𝘺𝘢 𝘮𝘢𝘯𝘢??'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `kirim/bal𝘦𝘴 𝘨𝘢𝘮𝘣𝘢𝘳 𝘴𝘢𝘮𝘢 caption *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
