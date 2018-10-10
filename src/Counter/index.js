import React from "react"

import Counter from './Counter'

class CounterWrapper extends React.Component {
  state = {
    counter : 0
  }

  increaseClick = () => {
    this.setState({
      counter: this.state.counter+1
    })
  }

  decreaseClick = () => {
    this.setState({
      counter: this.state.counter-1
    })
  }

  render(){
    return (
      <Counter
        count={this.state.counter}
        increase={this.increaseClick}
        decrease={this.decreaseClick} />
    )
  }
}

export default CounterWrapper
