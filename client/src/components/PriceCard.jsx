import React, {Component} from 'react';
import { getPriceData } from '../data';
import { getBestExchangeToBuy, getBestExchangeToSell } from '../utils';


class PriceCard extends Component {
    state = {
        buy:
        {
            Kraken: -1,
            Coinbase: -1,
        },
        sell: {
            Kraken: -1,
            Coinbase: -1
        },
    }
    componentDidMount() {
        this.fetchData(this.props.coin);
    }
    componentDidUpdate(prevProps) { 
        if (this.props.coin !== prevProps.coin) {
            this.fetchData(this.props.coin);
        }
    }

    fetchData(coin) { 
        getPriceData(coin).then(
            res => { 
                if (coin === "BTC") {
                    const buyPrices = {
                        // round Kraken price to 2 decimal places
                        Kraken: Number(res.krakenData.result.XXBTZUSD.b[0]).toFixed(2),
                        Coinbase: res.coinbaseBuyData.data.amount,
                    };
                    const sellPrices = {
                        // round Kraken price to 2 decimal palces
                        Kraken: Number(res.krakenData.result.XXBTZUSD.a[0]).toFixed(2),
                        Coinbase: res.coinbaseSellData.data.amount,
                    };
                    this.setState({
                        buy: buyPrices,
                        sell: sellPrices,
                    })
                } else if (coin === "ETH") {
                    const buyPrices = {
                        // round Kraken price to 2 decimal palces
                        Kraken: Number(res.krakenData.result.XETHZUSD.b[0]).toFixed(2),
                        Coinbase: res.coinbaseBuyData.data.amount,
                    };
                    const sellPrices = {
                        // round Kraken price to 2 decimal palces
                        Kraken: Number(res.krakenData.result.XETHZUSD.a[0]).toFixed(2),
                        Coinbase: res.coinbaseSellData.data.amount,
                    };
                    this.setState({
                        buy: buyPrices,
                        sell: sellPrices,
                    })
                }
            }
        ).catch(e => console.log(e))
    }

    render() {
        let bestBuyExchange = getBestExchangeToBuy(this.state.buy);
        let bestSellExchange = getBestExchangeToSell(this.state.sell);
    return (
        <div className="price-card">
            <h2> You should buy {this.props.coin} on {bestBuyExchange} </h2>
            <h2> You should sell {this.props.coin} on {bestSellExchange} </h2>
            <br />
            {Object.entries(this.state.buy)
            .map(([exchange, price]) => {
                return <h3 key={exchange}>{exchange} buy price: ${price}</h3>
            })}
            {Object.entries(this.state.sell)
            .map(([exchange, price]) => {
                return <h3 key={exchange}>{exchange} sell price: ${price}</h3>
            })}
        </div>
     );
    }
}

export default PriceCard;