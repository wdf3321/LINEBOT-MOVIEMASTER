import axios from 'axios'

export default async () => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    return data.USDJPY.Exrate
  } catch (error) {
    console.log('匯率更新錯誤')
    return 100
  }
}
