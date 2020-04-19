import React, {Component} from 'react'
import { Container } from 'react-bootstrap'

class FormComponent extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log("Form submit key: ", this.props.parentId)

  }

  render() {
    return (
      <Container>
      <form action="/api/answer" method="POST" onSubmit={this.handleSubmit}>
        <input type="hidden" value={this.props.parentId} name="parentId"></input>
        <div className="form-group">
          <label>Author</label>
          <input
            name="author"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
        <label>Title</label>
        <input
          name="title"
          type="text"
          className="form-control"
        />
        </div>
        <div className="form-group">
        <label>Answer</label>
        <textarea
          name="text"
          className="form-control"
        />
        </div>
        <br />
        <input type="submit" className="btn btn-primary" value="Post answer"/>
      </form>
      </Container>
    );
  }
}

export default FormComponent