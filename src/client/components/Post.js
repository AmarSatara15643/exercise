import React, { Component } from 'react'
const axios = require('axios');

import { Card, ListGroup, Row, Container, Col } from 'react-bootstrap'

import Form from './Form'
import Answer from './Answer'

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      formDisplay: false,
      answers: null
    }

    this.toggleForm = this.toggleForm.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  componentDidMount() {
    axios.get('/api/answers/'+this.props.parentId)
    .then((response) => this.setState({ answers: response.data }))
    .catch(function (error) {
      return;
    })
  }



  toggleForm() {
    if(this.state.formDisplay)
      this.setState({formDisplay:false})
    else
      this.setState({formDisplay:true})
  }

  toggleAnswer = (event) => {
    console.log(this.state.answers.length);
    if(this.state.answers.length === 0){
      alert("No answers for this question yet.");
      return;
    }
    var parent = event.target.closest('.container');
    var answersWrapper = parent.querySelector('.answers-wrapper');

    answersWrapper.classList.toggle('hidden');
  }

  render() {
    return (
      <Container className="mb-3">
      <div className="container mt-3">
      <Row>
        <Col>
          <Card className='mb-2'>
            <ListGroup variant="flush">
              <ListGroup.Item style={{backgroundColor: '#4F9EC9'}}>
                <Row>
                  <Card.Text className='pl-3'>{this.props.author!='' ? <b>{this.props.author}</b> : <b>Unknown</b>}</Card.Text>
                  <Card.Text className='ml-1 mr-1'>on</Card.Text>
                  <Card.Text>{this.props.date}</Card.Text>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {this.props.text!='' ? <Card.Text>{this.props.text}</Card.Text> : <b>...</b>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {this.state.formDisplay === true ? <Form parentId={this.props.parentId} /> : null}
          <Row className="d-flex flex-row-reverse pr-3 mb-2">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button onClick={this.toggleForm} className="btn btn-success">Answer</button>
              <button onClick={this.toggleAnswer} className="btn btn-success">See answers</button>
            </div>
          </Row>
        </Col>
      </Row>

        <div className="answers-wrapper hidden" style={{flex: 1, justifyContent: 'flex-end'}}>          
          {this.state.answers !== null ? 
            this.state.answers.map((item,index)=>(<Answer date={item.insert_date} author={item.author} text={item.text} title={item.title} parentId={item._id} key={index}/>)) 
            
            : null
          }
        </div>
      </div>
      </Container>
    );
  }
}

export default Post