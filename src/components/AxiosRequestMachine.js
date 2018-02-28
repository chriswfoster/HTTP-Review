import React, { Component } from "react"
import axios from "axios" // import axios

// import child components
import DogBreedList from "./childcomps/DogBreedList" 
import DogBreedPics from "./childcomps/DogBreedPics"

class AxiosRequestMachine extends Component {
  constructor() {
    super()
    this.state = {
      listOfDogs: [],
      listOfPics: []
    }
    // bind your functions
    this.viewDogs = this.viewDogs.bind(this)
    this.resetLists = this.resetLists.bind(this)
  }

  componentDidMount() {
    // Get the data with axios.
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(response => this.setState({ listOfDogs: response.data.message }))
  }

  viewDogs(dog) {
    // Get the pics with axios.
    // Search by breed using using: https://dog.ceo/api/breed/${dog}/images
    axios
      .get(`https://dog.ceo/api/breed/${dog}/images`)
      .then(response => this.setState({ listOfPics: response.data.message.slice(0, 25) }))
      // REMOVE THE SLICE ABOVE IF YOU WANT MORE THAN 25 PICS.
  }

  resetLists() {
    // This just clears the list of pictures.
    this.setState({ listOfPics: [] })
  }

  render() {
    return (
      <div>
        
        <DogBreedList //pass props down to DogBreedList
          listOfDogs={this.state.listOfDogs}
          viewDogs={this.viewDogs}
        />
        <DogBreedPics // pass props down to DogBreedPics
          listOfPics={this.state.listOfPics}
          reset={this.resetLists}
        />
      </div>
    )
  }
}
export default AxiosRequestMachine
