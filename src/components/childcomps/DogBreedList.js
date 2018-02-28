import React, { Component } from "react"

class DogBreedList extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    //Destructure listOfDogs array and viewDogs function out of props.
    const { listOfDogs, viewDogs } = this.props
    //Map over dogs array
    const doglist = listOfDogs.map((dog, index) => (
      <div onClick={() => viewDogs(dog)} key={index}>
        {dog}
      </div>
    ))
    return <div className="flexList">{doglist}</div>
  }
}
export default DogBreedList
