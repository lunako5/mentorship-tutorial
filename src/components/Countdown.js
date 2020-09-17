import React, { Component } from "react";

// Countdown = {
//   state: {
//     miaAge: 10
//   }
// }

// var
// let
// const

// HW:
// 1. Create a button that can decrement mia's age by 2
// 2. Create a button that can increase mia's age by 1
// 3. Create a button that can increase mia's age by 2

class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      miaAge: 10
    }
    this.makeMiaYounger = this.makeMiaYounger.bind(this);
  }
  makeMiaYounger() {
    if (this.state.miaAge === 1) {
      return;
    }
    // JS for loop
    let age = this.state.miaAge - 1; // 1

    // age = 1
    // age == "1" // age compare it loosely to any type
    // age === 1 // comparing against the type and value
    this.setState({
      miaAge: age
    })
  }
  render() {
    return (
      <div>
        <button
          onClick={this.makeMiaYounger}
        >
          make Mia younger
        </button>
        {this.state.miaAge}
      </div>

    )
  }
}

export default Countdown;