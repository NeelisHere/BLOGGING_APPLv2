import React from 'react'

const Post = () => {
    return(
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=730&crop=1" alt="x" />
        </div>
        <div className="texts">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p className="info">
            <a href="" className="author">Sugar Sammy</a>
            <time>Jan 23, 2023</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat rem asperiores, quos modi repellat voluptatum incidunt tenetur reiciendis necessitatibus?
          </p>
        </div>
      </div>
    )
}

export default Post
