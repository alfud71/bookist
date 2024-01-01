import axios from 'axios'

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: process.env.REACT_APP_KAKAO_API_KEY,
  },
})

export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book?target=title', { params })
}

// book api
export const book = () => {
  return Kakao.get('/v3/search/book?target=title')
}
