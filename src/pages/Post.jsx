import { formatISO, formatISO9075 } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'
const Post = (props) => {
  const { _id, title, summary, cover, content, createdAt, author} = props
    return(
      <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:5000/'+cover} alt="x" />
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`} style={{textDecoration:"none"}}>
            <h2 className='post-title'>{title}</h2>
          </Link>
          <p className="info">
            <a href="" className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    )
}

export default Post
