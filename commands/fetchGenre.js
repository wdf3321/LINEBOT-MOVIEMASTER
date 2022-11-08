
import axios from 'axios'
import template from '../templates/course.js'

// 十大熱門電影
export default async (event) => {
  try {
    const choose = event.postback.data
    // console.log(event.postback.data)
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API}&with_genres=${choose}`)

    const movie = []
    // console.log(data.results[0].title, data.results[1].title, data.results[2].title, data.results[3].title, data.results[4].title)
    // console.log(data)
    // const bubble = JSON.parse(JSON.stringify(template))
    for (let i = 0; i < 5; i++) {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.body.contents[0].url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + data.results[i].poster_path
      // console.log(bubble.hero.url)
      bubble.body.contents[1].contents[0].contents[0].text = data.results[i].title
      bubble.body.contents[1].contents[1].contents[0].text = data.results[i].release_date
      bubble.body.contents[1].contents[2].contents[0].action.uri = `https://www.themoviedb.org/movie/${data.results[i].id}`
      movie.push(bubble)
    }
    // console.log(data.results[0].id)

    const reply = {
      type: 'flex',
      altText: '為您推薦',
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
