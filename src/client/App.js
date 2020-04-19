import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import { loadPosts } from './modules/posts'
import { Container, Row } from 'react-bootstrap'
//import 'bootstrap';

import Post from './components/Post'

export const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <div className="wrapper">
        {posts.map((item,index)=>(<Post date={item.insert_date} author={item.author} text={item.text} title={item.title} parentId={item._id} key={index}/>))}
      </div>
      <Container className="mb-5 p-5" style={{backgroundColor: "#E8E8E8"}}>
        <h2 className="mb-5">Post question.</h2>
        <form action="/api/questions" method="POST">
          <div className="form-group d-flex align-items-start justify-content-between">
            <label>Author</label>
            <input             
              name="author"
              type="text"
              className="form-control"
              style={{width: "80%"}}/>
          </div>
          <div className="form-group d-flex align-items-start justify-content-between">
            <label>Title</label>
            <input             
              name="title"
              type="text"
              className="form-control"
              style={{width: "80%"}}/>
          </div>
          <div className="form-group d-flex align-items-start justify-content-between">
            <label>Question</label>
            <textarea             
              name="text"
              type="text"
              className="form-control"
              style={{width: "80%"}}/>
          </div>
          <Row className="d-flex flex-row-reverse pr-3 mb-2">
            <input type="submit" className="btn btn-primary" value="Post question" />
          </Row>
        </form>
      </Container>
    </div>
  )
}

export default App
