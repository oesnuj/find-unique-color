import axios from 'axios';

export function postRank(userName, stage) {
  axios.post('https://wwwag-backend.co.kr/ranking', {
    nickname: userName,
    stage : stage,
  });
}
