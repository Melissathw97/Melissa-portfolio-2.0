import React from 'react'

const test = () => {
  var bottles = 10
  function ninetyNineBeers() {
    while (bottles >= 0) {
      if (bottles > 1) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.")
      }
      else if (bottles === 1) {
        console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
      }
      else {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
      }
      bottles--
    }
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <button onClick={ninetyNineBeers}>click me</button>
    </div>
  )
}

export default test


