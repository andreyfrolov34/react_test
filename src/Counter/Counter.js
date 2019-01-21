import React, { Component } from 'react';
import Counter2 from '../counter2/counter2'

export default class Counter extends Component {

  state = {
    counter: 0
  }
  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // такое изменение state является ассинхронным и в некоторых случаях может навредить. безопасней исп-ть следующую форму...
    this.setState((prevState) => {
      return {
        counter:  prevState.counter + 1
      }
    })

  }
  render(){
    return (
      <div style={{border: '1px solid red', width: 500, margin:'0 auto'}}>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.addCounter}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        <Counter2 clicked={this.props.clicked}/>
      </div>
    )
  }
}