let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 𝘰𝘴𝘤𝘢𝘳-𝘮𝘥 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 1&k/grup (1 minggu)
    ┊⫹⫺ Normal: 25k/grup (1 bulan)
    ┊⫹⫺ Standar: 35k/grup (2 bulan)
    ┊⫹⫺ Pro: 40k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 70k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 10k (1 minggu)
    ┊⫹⫺ Normal: 20k (1 bulan)
    ┊⫹⫺ Pro: 40k (4 bulan)
    ┊⫹⫺ Vip: 65k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 80k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa 𝘐𝘯𝘥𝘰𝘴𝘢𝘵: [085850539404]
    • Dana: [085850539404]
    • Link Aja: [085850539404]
    
    Nomor Owner :
    wa.me/6285850539404
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY 𝘑𝘢𝘳𝘰𝘵'
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
