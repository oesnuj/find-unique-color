import axios from 'axios';

export function postRank(userName, stage, point) {
  console.log(point)
  axios.post('https://wwwag-backend.co.kr:5000/ranking', {
    nickname: userName,
    stage : stage,
    score : point,
  });
}
