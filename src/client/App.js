import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './app.css'
import { loadPosts } from './modules/posts'

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
      <div style={{display: "flex", flexDirection: "column"}}>
        {posts.map((item,index)=>(<Post date={item.insert_date} author={item.author} text={item.text} title={item.title} parentId={item._id} key={index}/>))}
      </div>
      <div>
        <form action="/api/questions" method="POST">
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
          <input type="submit" value="Question" style={{marginTop: "20px", width: "100%", backgroundColor: "green", fontSize: "20px"}} />
        </form>
      </div>
    </div>
  )
}

export default App
