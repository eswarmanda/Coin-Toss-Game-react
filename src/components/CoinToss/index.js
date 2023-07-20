import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    coin: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  isTossClicked = () => {
    console.log('clicked')
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    this.setState(prevState => ({total: prevState.total + 1}))

    this.setState({
      coin:
        tossResult === 0
          ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    })

    const result =
      tossResult === 0
        ? this.setState(prevState => ({heads: prevState.heads + 1}))
        : this.setState(prevState => ({tails: prevState.tails + 1}))
    console.log(result)
  }

  render() {
    const {total, heads, tails, coin} = this.state

    return (
      <div className="main-cont">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="p">Heads (or) Tails</p>
          <img className="img-card" src={coin} alt="toss result" />
          <button className="btn" type="button" onClick={this.isTossClicked}>
            Toss Coin
          </button>
          <div className="res-card">
            <p className="p1">{`Total: ${total}`}</p>
            <p className="p1">{`Heads: ${heads}`}</p>
            <p className="p1">{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
