// best buy price is the lowest price
export const getBestExchangeToBuy = (prices) => {
    return Object.keys(prices).reduce((a, b) => prices[a] < prices[b] ? a : b);
};

// best sell price is the highest price
export const getBestExchangeToSell = (prices) => { 
    return Object.keys(prices).reduce((a, b) => prices[a] > prices[b] ? a : b);
};



