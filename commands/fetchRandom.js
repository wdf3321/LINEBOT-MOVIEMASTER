import axios from 'axios'
import template from '../templates/course.js'

// 挑一隻片給我
export default async (event) => {
  try {
    const random1 = Math.ceil(Math.random() * 30)
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API}&language=zh-TW&page=${random1}&region=TW`
    )

    // console.log(random)
    const movie = []
    // console.log(data.results[0].title, data.results[1].title, data.results[2].title, data.results[3].title, data.results[4].title)
    // console.log(data)
    const random2 = Math.ceil(Math.random() * 10)
    const bubble = JSON.parse(JSON.stringify(template))

    console.log(random2)
    bubble.body.contents[0].url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + data.results[`${random2}`].poster_path
    // console.log(bubble.hero.url)
    bubble.body.contents[1].contents[0].contents[0].text = data.results[`${random2}`].title
    bubble.body.contents[1].contents[1].contents[0].text = data.results[`${random2}`].release_date
    bubble.body.contents[1].contents[2].contents[0].action.uri = `https://www.themoviedb.org/movie/${data.results[`${random2}`].id}`
    movie.push(bubble)

    // console.log(data.results[0].id)

    const reply = {
      type: 'flex',
      altText: '今天您適合',
      contents: {
        type: 'carousel',
        contents: movie
      }
    }
    event.reply(reply)
  } catch (error) {
    // console.log('錯誤')
    return '查無數據'
  }
}
