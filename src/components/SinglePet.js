import React from "react"

class SinglePet extends React.Component {
  constructor() {
    super()
    this.state = {
      adopted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({ adopted: !prevState.adopted }))
  }

  render() {
    const { adopted } = this.state
    const { name, description, species } = this.props.pet
    return (
      <div className="single-pet">
        <div>{name}</div>
        <div>{description}</div>
        <div>{species}</div>
        <div>{adopted ? "Adopted!" : "Available for adoption"}</div>
        <button type="button" onClick={this.handleClick}>Toggle Adopted</button>
      </div>
    )
  }
}

export default SinglePet
