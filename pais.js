const Client = require('node-telegram-bot-api');
const token = '1627094503:AAGpeDkTtP9tjsDilVNpJKCtcFxh-itU_3U'
const botname = '@Paiis_bot'
const client = new Client(token, {polling: true});
const axios = require('axios')

client.on('message', async(msg) => {
try{  
const chatid = msg.chat.id;
var body = msg.text
const pushname = msg.from.username
const args = body.split(' ')
const command = body.includes('@bennz_bot') ? body.split('@bennz_bot')[0] || body.split(' ')[0] : body
if (body.startsWith('/')){
  console.log(`[ COMMAND ] FROM [ ${pushname} ] ARGS [ ${args.length} ] COMMAND [ ${command} ]`)
} else {
console.log(`[ MESSAGE ] FROM [ ${pushname} ]`)
}

switch(command){
  case '/help':
  case '/menu':
  client.sendMessage(chatid, `Halooo @${pushname}\n\n1. /harta [text]\n2. /tebakgambar\n3. /gplay [username]\n4. /meme`);
  break
  case '/tebakgambar':
  const getsdata = await axios.get('https://api.zeks.xyz/api/tebakgambar?apikey=apivinz')
  client.sendPhoto(chatid, getsdata.data.result.soal)
  client.sendMessage(chatid, `Waktu 5 detik`);
    await sleep(2000)
  client.sendMessage(chatid, `Sisa 4 detik`);
  await sleep(2000)
  client.sendMessage(chatid, `Sisa 2 detik`);
  await sleep(2000)
  client.sendMessage(chatid, `Waktu habis`);
  await sleep(1000)
  client.sendMessage(chatid, `Jawaban: ${getsdata.data.result.jawaban}`);
  break
    case '/gplay':
    if (args.length === 1) return client.sendMessage(chatid, `Ketik /harta [text]`);
  datangab = await axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(7)}&apikey=apivinz`)
  client.sendPhoto(chatid, datangab.data.result)
  break
     case '/meme':
  datangab = await axios.get(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
  client.sendPhoto(chatid, datangab.data.result)
  break
  case '/nulispantai':
  if (args.length === 1) return client.sendMessage(chatid, `Ketik /harta [text]`);
  client.sendPhoto(chatid, 'https://api.zeks.xyz/api/sandw?apikey=apivinz&text='+body.slice(13))
  break
  default: 
  if (body.startsWith('/')){
    client.sendMessage(chatid, `Maaf @${pushname} command ${command} tidack ditemukan :/`);
  }
  break
}
} catch(er){
  console.log('[ ERROR ] '+ er)
} 
});
function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
