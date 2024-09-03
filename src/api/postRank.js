import axios from 'axios';

export function postRank(userName, stage) {
  const response = axios.post('https://wwwag-backend.co.kr/ranking', {
    userName,
    stage,
  });
  return response.data;
}
