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
    <div style={{ margin: '5rem' }}>
      <h1>Blog Posts</h1>
      {articles.map(article => {
        return (
          <div
            style={{
              border: '1px solid grey',
              width: '15rem',
              borderRadius: '.5rem',
              padding: '1rem',
            }}
            key={article.slug}
          >
            {article.image.length > 0 && (
              <img
                src={`http://localhost:1337${article.image[0].formats.thumbnail.url}`}
                alt='No Image'
              />
            )}
            <hr></hr>
            <h3>{article.title}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(article.content),
              }}
            ></div>
            <Link to={`article/${article.slug}`}>
              <button>Read more!</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Homepage
