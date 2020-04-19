import React, { Component } from 'react'
import { Card, ListGroup, Row, Container, Col } from 'react-bootstrap'

function Answer (props) {
    return (
      <Container>
        <Row>
          <Col lg></Col>
          <Col lg>
            <Card className='mt-3 mb-2'>
              <ListGroup variant="flush">
                <ListGroup.Item style={{backgroundColor: '#F16E10'}}>
                  <Row>
                    <Card.Text className='pl-3'>{props.author!='' ? <b>{props.author}</b> : <b>Unknown</b>}</Card.Text>
                    <Card.Text className='ml-1 mr-1'>on</Card.Text>
                    <Card.Text>{props.date}</Card.Text>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {props.text!='' ? <Card.Text>{props.text}</Card.Text> : <b>...</b>}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default Answer


{/* <div className="row">
<div className="col-md-1"></div>
<div className="col-md-6 highlight">
  <label>Answer:</label><p> <b>{props.text}</b></p>
  <p>Author: <b>{props.author}</b></p>
  <p>Date: <b>{props.date}</b></p>
</div>
<div className="col-md-5"></div>
</div> */}