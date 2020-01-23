import React from "react"
import axios from "axios"

class DeletePet extends React.Component {
  constructor() {
    super()
    this.deleteFromServer = this.deleteFromServer.bind(this)
  }

  async deleteFromServer() {
    try {
      await axios.delete(`/api/pets/${this.props.petId}`)
      this.props.handleDelete()
    } catch(err) {
      // console.log(err)
    }
  }

  render() {
    return (
      <button className='delete-pet' onClick={this.deleteFromServer}>Delete</button>
    )
  }
}

export default DeletePet
