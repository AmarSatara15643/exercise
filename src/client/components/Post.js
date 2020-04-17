import React, { Component } from 'react'
const axios = require('axios');

import Form from './Form'

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      formDisplay: false,
      answers: null
    }

    this.toggleForm = this.toggleForm.bind(this)
  }

  componentDidMount() {
    axios.get('/api/posts:'+this.props.parentId)
    .then(function (response) {
      if(response!=null && response!=undefined){
        var answers = JSON.parse(response);
        this.setState(answers);
      }
    })
    .catch(function (error) {
      console.log("Not found!");
    })
    .then(function () {
      // always executed
    })
  }



  toggleForm() {
    if(this.state.formDisplay)
      this.setState({formDisplay:false})
    else
      this.setState({formDisplay:true})
  }

  render() {
    return (
      <div  style={{display: "flex", flexDirection: "column", border: "solid 1px black"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <p>{this.props.date}</p>
          <p>|</p>
          <p>{this.props.author}</p>
        </div>
        <p>{this.props.text}</p>
        <button onClick={this.toggleForm} style={{marginTop: "20px", width: "100%", backgroundColor: "red", fontSize: "20px"}}>Answer</button>

        {this.state.answers !== null ? this.state.answers.map((item,index)=>(<Post date={item.insert_date} author={item.author} text={item.text} title={item.title} parentId={item._id} key={index}/>)) : null}

        {this.state.formDisplay === true ? <Form parentId={this.props.parentId} /> : null}
      </div>
    );
  }
}

export default Post