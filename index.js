import 'dotenv/config'
import linebot from 'linebot'
// import { scheduleJob } from 'node-schedule'
// import fetchCourse from './commands/fetchCourse.js'
// import fetchAnime from './commands/fetchAnime.js'
// import rateUpdate from './utils/rateUpdate.js'
import fetchRate2 from './commands/fetchRate2.js'
import searchMovie from './commands/searchMovie.js'
import fetchRandom from './commands/fetchRandom.js'
import fetchGenre from './commands/fetchGenre.js'
import icon from './templates/icon.js'

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

bot.on('message', async event => {
  if (event.message.type !== 'text') {
    event.reply('你好')

  // // } else if (event.message.text.startsWith('查動畫')) {
  // //   fetchAnime(event)
  // } else if (event.message.text.startsWith('查匯率')) {
  //   event.reply(USDJPY.toString())
  } else if (event.message.text.startsWith('十大熱門電影')) {
    fetchRate2(event)
  } else if (event.message.text.startsWith('挑一隻片給我')) {
    fetchRandom(event)
  } else if (event.message.text.startsWith('類型選擇')) {
    event.reply(await icon)
    bot.on('postback', async event => {
      fetchGenre(event)
    })
  } else if (event.message.type === 'text' && event.message.text !== '十大熱門電影' && event.message.text !== '挑一隻片給我') {
    searchMovie(event)
  }
  if (event.message.type === 'text' && event.message.text === '搜尋電影') {
    event.reply('請直接輸入想要搜尋的電影名稱')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
