import axios from "axios";

export const getRank = () => {

    return axios.get('https://wwwag-backend.co.kr/ranking/list').then((response) => {
        const rankData = response.data;
        return rankData;
    })
}