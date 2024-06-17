let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB[' 👨🏻‍💻💙➢ 𝐁𝐨𝐭 𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐩𝐚𝐫𝐚 𝐮𝐬𝐭𝐞𝐝𝐞𝐬 𝐁𝐞𝐛𝐞𝐬:  ']()} ${pesan}`
let teks = `╭━〔 *${lenguajeGB['Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME 👨🏻‍💻💙 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐁𝐨𝐭𝐬-𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭 💙👨🏻‍💻 ']()}* 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃💙👨🏻‍💻 @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `╰━━━━━[ * 𝐆𝐞𝐫𝐚𝐥 𝐁𝐨𝐭💙👨🏻‍💻${vs}* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
