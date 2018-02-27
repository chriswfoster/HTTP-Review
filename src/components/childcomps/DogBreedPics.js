import React, { Component } from "react"

class DogBreedPics extends Component {
  render() {
    const { reset, listOfPics } = this.props
    const picList = listOfPics.map(dog => (
      <div>
        <img src={dog} />
      </div>
    ))
    return (
      <div>
        <button onClick={() => reset()}>RESET</button>
        {picList}
      </div>
    )
  }
}
export default DogBreedPics
