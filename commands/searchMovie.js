import axios from 'axios'
import template from '../templates/course.js'

export default async (event) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API}&language=zh-TW&query=${event.message.text}&page=1&include_adult=false&region=TW`
    )
    if (data.total_pages === 0) {
      console.log(data.total_pages)
      event.reply('找不到')
    } else {
      const search = []
      for (let i = 0; i < 1; i++) {
        const bubble = JSON.parse(JSON.stringify(template))
        bubble.body.contents[0].url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + data.results[i].poster_path
        bubble.body.contents[1].contents[0].contents[0].text = data.results[i].title
        bubble.body.contents[1].contents[1].contents[0].text = data.results[i].release_date
        bubble.body.contents[1].contents[2].contents[0].action.uri = `https://www.themoviedb.org/movie/${data.results[0].id}`
        // console.log(data.results[0].id)
        search.push(bubble)
      }

      const reply = {
        type: 'flex',
        altText: '看看我找到了什麼',
        contents: {
          type: 'carousel',
          contents: search
        }
      }

      event.reply(reply)
    }
  } catch (error) {
    console.error(error)

    // const reply = {
    //   type: 'flex',
    //   altText: '搜尋結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: '找不到'
    //   }
    // }
  }
}
