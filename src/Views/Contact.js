import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from '../Coin';



function Contact(){
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(

        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    )

    .then(res => {
                setCoins(res.data);

    }).catch(error => console.log('Error found'))
  }, []);

  const handleChange = e => {

    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return(


    <div className = 'coin-app'>
      <div className = 'coin-search font-bold'>
        <h1 className = 'coin-text'> Search a crypto currency</h1>
          <form>
            <input type = 'text' placeholder = 'Search' className = 'coin-input' onChange = {handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
             key = {coin.id}
             name = {coin.name}
             image = {coin.image}
             volume = {coin.market_cap}
             price = {coin.current_price}
             />
         );
      })}
    </div>

  );
}

export default Contact
