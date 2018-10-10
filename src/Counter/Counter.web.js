import React from "react"

const Counter = ({ increase, decrease, count }) => (
  <div>
    <button onClick={increase}>
      Increase
    </button>
    <h2>
      {count}
    </h2>
    <button onClick={decrease}>
      Decrease
    </button>
  </div>
)

export default Counter
