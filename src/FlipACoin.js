import React, { Component } from 'react'
import './index.css';
import Coin from './Coin.js'

class FlipACoin extends Component {
  constructor(props){
    super(props);
    this.state = {
        gelen: "",
        toplam: 0,
        tura: 0,
        yazi: 0,
        donuyor: "false"
    }
  }
  flip = () => {
    var sonuc = Math.round(Math.random())
    sonuc ? 
    this.setState({
        tura: this.state.tura + 1,
        gelen: "tura",
        toplam: this.state.toplam + 1 }):
    this.setState({
        yazi: this.state.yazi + 1,
        gelen: "yazi" ,
        toplam: this.state.toplam + 1})

    this.setState({donuyor: true}); 
    setTimeout(
      () => this.setState({donuyor: false}),
       1000);
};

  render(){
    return (
      <div>
        <Coin 
         gelen={this.state.gelen}
         donuyor={this.state.donuyor} />
        <button onClick={this.flip} >Flip</button>
        <h1>Toplam  : {this.state.toplam} </h1>
        <h1>Tura : {this.state.tura} </h1>
        <h1>Yazi : {this.state.yazi} </h1>
      </div>
    )
  }
}

export default FlipACoin;