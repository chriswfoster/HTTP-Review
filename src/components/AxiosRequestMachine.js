import React, { Component } from "react"
import axios from "axios" // import axios

import DogBreedList from "./childcomps/DogBreedList"
import DogBreedPics from "./childcomps/DogBreedPics"

class AxiosRequestMachine extends Component {
  constructor() {
    super()
    this.state = {
      listOfDogs: [],
      listOfPics: []
    }
  }

  componentDidMount() {
    // Get the data with axios.
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(response => this.setState({ listOfDogs: response.data.message }))
  }

  viewDogs(dog) {
    axios
      .get(`https://dog.ceo/api/breed/${dog}/images`)
      .then(response => console.log(response.data.message))
  }

  resetLists() {
    this.setState({ listOfDogs: [], listOfPics: [] })
  }

  render() {
    return (
      <div>
        <DogBreedList
          listOfDogs={this.state.listOfDogs}
          viewDogs={this.viewDogs}
        />
        <DogBreedPics
          listOfPics={this.state.listOfPics}
          reset={this.resetLists}
        />
      </div>
    )
  }
}
export default AxiosRequestMachine
