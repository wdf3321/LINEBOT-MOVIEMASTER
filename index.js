import 'dotenv/config'
import linebot from 'linebot'
// import { scheduleJob } from 'node-schedule'
// import fetchCourse from './commands/fetchCourse.js'
// import fetchAnime from './commands/fetchAnime.js'
// import rateUpdate from './utils/rateUpdate.js'
import fetchRate2 from './commands/fetchRate2.js'
import searchMovie from './commands/searchMovie.js'
import fetchRandom from './commands/fetchRandom.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// let USDJPY = 100
// scheduleJob('0 0 * * *', async () => {
//   USDJPY = await rateUpdate()
// })
// rateUpdate().then(result => {
//   USDJPY = result
// })

// let laobao = 0
// scheduleJob('0 0 * * * ', async () => {
//   laobao = await fetchRate2()
// })
// fetchRate2().then(result => {
//   laobao = result
// })

bot.on('message', event => {
  if (event.message.type !== 'text') {
    return
  }

  if (event.message.text.includes('你', '好', '爛')) {
    event.reply({
      type: 'sticker',
      packageId: '6632',
      stickerId: '11825382'
    })

  // // } else if (event.message.text.startsWith('查動畫')) {
  // //   fetchAnime(event)
  // } else if (event.message.text.startsWith('查匯率')) {
  //   event.reply(USDJPY.toString())
  } else if (event.message.text.startsWith('五大熱門電影')) {
    fetchRate2(event)
  } else if (event.message.text.startsWith('挑一隻片給我')) {
    fetchRandom(event)
  } else if (event.message.type === 'text' && event.message.text !== '五大熱門電影' && event.message.text !== '挑一隻片給我') {
    searchMovie(event)
  }
  if (event.message.type === 'text' && event.message.text === '搜尋電影') {
    event.reply('請直接輸入想要搜尋的電影名稱')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
