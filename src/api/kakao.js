import axios from 'axios'

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: 'KakaoAK b929efca5e96cfb93814cf44b0686a8d',
  },
})

export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book?target=title', { params })
}

// book api
export const book = () => {
  return Kakao.get('/v3/search/book?target=title')
}
