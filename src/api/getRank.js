import axios from "axios";

export const getRank = async (pageNumber = 0, pageSize = 10) => {
    try {
        const response = await axios.get('https://wwwag-backend.co.kr/ranking/list', {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log('Rank data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching rank data:', error.response ? error.response.data : error.message);
        throw error;
    }
};
