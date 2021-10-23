const axios = require('axios').default;

// talk to our node backend which should return a response containing price data
export const getPriceData = async (coin) => {
    const url = `/coin/${coin}`;
    console.log(url);
    const response = await axios.get(url);
    const data = response.data;
    return data;
}