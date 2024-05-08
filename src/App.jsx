
import { useState } from 'react';
import './App.css'

function App() {

  const [posts, setPosts] = useState('')

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
      method: 'get',
    })
    .then(res => res.json())
    .then(data => {      
        const postsArr = data.slice(0, 5)
        let html = ""
        postsArr.forEach(post => {
          html += 
          `<h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr />`
        })
        
        for (let post of postsArr) {
            
        }
        document.getElementById("blog-list").innerHTML = html
    })
   

  return (
    <>
      <nav>
            <h3>BlogSpace</h3>
        </nav>
        <form>
            <label htmlFor="post-title">Title:</label>
            <input id="post-title" type="text" />
            <label htmlFor="post-body">Body:</label>
            <textarea id="post-body"></textarea>
            <button id='blog-list' type='submit'>Post</button>
        </form>
    </>
  )
}

export default App
