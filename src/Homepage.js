import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import marked from 'marked'

const Homepage = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const response = await fetch('http://localhost:1337/articles')
    setArticles(await response.json())
  }

  return (
    <div style={{ margin: '1rem 5rem 0 5rem' }}>
      <Link to='/register' style={{ margin: '2rem 0 2rem 0' }}>
        <button>Register User</button>
      </Link>
      <h1>Blog Posts</h1>
      <Link to='/create'>
        <button style={{ marginBottom: '1.5rem' }}>Create New Post</button>
      </Link>
      {articles.length > 0 &&
        articles.map(article => {
          return (
            <div
              style={{
                border: '2px solid grey',
                width: '15rem',
                borderRadius: '.5rem',
                padding: '1rem',
                marginBottom: '1rem',
              }}
              key={article.slug}
            >
              {article.image.length > 0 && (
                <img
                  src={`http://localhost:1337${article.image[0].formats.thumbnail.url}`}
                  alt='No Image'
                  style={{ height: '4rem' }}
                />
              )}
              <hr />
              <h3>{article.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(article.content),
                }}
              ></div>
              <hr />
              <p>
                Author: {article.author ? article.author.username : 'unknown'}
              </p>
              <Link to={`article/${article.slug}`}>
                <button>Read more!</button>
              </Link>
            </div>
          )
        })}
      {articles.length === 0 && <h3>No posts</h3>}
    </div>
  )
}

export default Homepage
