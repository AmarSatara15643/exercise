import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log("Form submit key: ", this.props.parentId)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Author:</h4>
        <input
          type="text"
        />
        <h4>Title:</h4>
        <input
          type="text"
        />
        <h4>Text:</h4>
        <input
          type="text"
        />
        <br />
        <input type="submit" value="Submit" style={{marginTop: "20px", width: "100%", backgroundColor: "blue", fontSize: "20px"}} />
      </form>
    );
  }
}

export default Form