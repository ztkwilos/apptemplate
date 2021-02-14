import React, {useState, useEffect} from 'react';
import axios from 'axios';



function Contact(){
    const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(

        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    )

    .then(res => {
                setCoins(res.data);

    }).catch(error => console.log('Error found'))
  }, []);



  return(

    <div className = 'coin-app'>
      <div className = 'coin-search font-bold'>
        <h1 className = 'coin-text'> Search a crypto currency</h1>
          <form>
            <input type = 'text' placeholder = 'Search' className = 'coin-input' />
        </form>
      </div>
    </div>

  );
}

export default Contact
