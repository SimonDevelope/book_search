import Axios from 'axios';
require('dotenv').config();

console.log(process.env.KAKAO_API_KEY);
export const KakaoApi = async () => {
  await Axios.get('https://dapi.kakao.com/v3/search/book', {
    headers: {
      URL: 'https://dapi.kakao.com',
      Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
    },
    params: {
      query: 'search',
      sort: 'accuracy',
      page: 1,
      size: 20,
    },
  });
};
