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

  useEffect(() => {
    dispatch(loadPosts())
  }, [])

  return (
    <div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <div style={{display: "flex", flexDirection: "column"}}>
        {posts.map((item,index)=>(<Post date={item.insert_date} author={item.author} text={item.text} title={item.title} parentId={item._id} key={index}/>))}
      </div>
    </div>
  )
}

export default App
