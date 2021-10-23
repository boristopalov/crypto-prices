const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios').default;
const path = require('path');
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

const host = process.env.HOST;
const port = process.env.PORT;

app.get('/coin/:coin', async (req, res) => { 
    const coin = req.params.coin;

    // Kraken API gives both buy and sell data in 1 endpoint
    const krakenUrl = `https://api.kraken.com/0/public/Ticker?pair=${coin}USD`;
    const krakenResponse = await axios.get(krakenUrl);
    const krakenData = await krakenResponse.data;

    // Coinbase API has separate endpoints for buy and selling data
    const coinbaseBuyUrl = `https://api.coinbase.com/v2/prices/${coin}-USD/buy`;
    const coinbaseBuyResponse = await axios.get(coinbaseBuyUrl);
    const coinbaseBuyData = await coinbaseBuyResponse.data;

    const coinbaseSellUrl = `https://api.coinbase.com/v2/prices/${coin}-USD/sell`;
    const coinbaseSellResponse = await axios.get(coinbaseSellUrl);
    const coinbaseSellData = await coinbaseSellResponse.data;
    const data = {
        krakenData: krakenData, 
        coinbaseBuyData: coinbaseBuyData, 
        coinbaseSellData: coinbaseSellData
    }

    res.json(data);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Listening at ${host}:${port}`)
});