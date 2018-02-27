import React, { Component } from "react"
import axios from "axios" // import axios

import DogBreedList from "./childcomps/DogBreedList";
import DogBreedPics from "./childcomps/DogBreedPics"

class AxiosRequestMachine extends Component {
  constructor() {
    super()
    this.state = {
      listOfDogs: []
    }
  }

  componentDidMount() {
    // Get the data with axios.
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(
        response =>
        
          this.setState({ listOfDogs: response.data.message })
      )
  }

  viewDogs(dog) {
console.log("hi: ", dog)
  }


  render() {
    return (
      <div>
        <DogBreedList listOfDogs={this.state.listOfDogs} viewDogs= {this.viewDogs}/>
      </div>
    )
  }
}
export default AxiosRequestMachine
