import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '𝘉𝘰𝘵 𝘛𝘪𝘥𝘢𝘬 𝘮𝘢𝘴𝘶𝘬 𝘨𝘳𝘰𝘶𝘱 𝘯𝘺𝘢 :('
    if (!me.admin) throw '𝘉𝘰𝘵 𝘉𝘶𝘬𝘢𝘯 𝘢𝘥𝘮𝘪𝘯 𝘤𝘰𝘬 T_T'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i


export default handler