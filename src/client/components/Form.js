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
      <form action="/api/posts" method="POST" onSubmit={this.handleSubmit}>
        <input type="hidden" value={this.props.parentId} name="parentId"></input>
        <h4>Author:</h4>
        <input
          name="author"
          type="text"
        />
        <h4>Title:</h4>
        <input
          name="title"
          type="text"
        />
        <h4>Text:</h4>
        <input
          name="text"
          type="text"
        />
        <br />
        <input type="submit" value="Submit" style={{marginTop: "20px", width: "100%", backgroundColor: "blue", fontSize: "20px"}} />
      </form>
    );
  }
}

export default Form