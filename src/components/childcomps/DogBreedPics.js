import React, { Component } from "react"

class DogBreedPics extends Component {
  render() {
    // Destructure the 'reset' function and listOfPics url array.
    const { reset, listOfPics } = this.props

    // Map over array of pic URLs.
    const picList = listOfPics.map((dog, i) => (
      <div key={i}>
        <img src={dog} alt="Blah" />
      </div>
    ))
    return (
      <div>
        <button onClick={() => reset()}>RESET</button>

        {/* Return the array of dog pic img tags. */}
        {picList}
      </div>
    )
  }
}
export default DogBreedPics
