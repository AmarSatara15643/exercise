import axios from 'axios'

// Initial state
const initialState = []

// Actions
const LOAD = 'posts/LOAD'
const STORE = 'posts/STORE'

// Reducer
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case `${LOAD}_FULFILLED`: {
      console.log("--------- reducer ");
      return [...action.payload.data]
    }
    case `${STORE}_FULFILLED`: {
      console.log("Reducer store --");
    }
    default: return state
  }
}

// Action Creators
export function loadPosts () {
  return dispatch => {
    return dispatch({
      type: LOAD,
      payload: axios.get('/api/posts')
    })
  }
}

export function updatePosts () {
  return dispatch => {
    return dispatch({
      type: STORE,
      payload: axios.post('/api/posts')
    })
  }
}
