// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrementButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const isEvenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {isEvenOrOdd}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onClickIncrementButton}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
