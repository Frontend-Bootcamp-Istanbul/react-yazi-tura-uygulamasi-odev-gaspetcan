import React from 'react';
import './Coin.css';
import CoinTura from './1-lira-tura.png';
import CoinYazi from './1-lira-yazi.png';

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.donuyor ? 'Coin-rotate' : ''}`}>
        <img src={props.gelen === "yazi" ? CoinYazi : CoinTura} 
        className={(props.gelen === "yazi" ? 'Coin-back' : 'Coin-front')} />
      </div>
    </div>
  )
}

export default Coin;
