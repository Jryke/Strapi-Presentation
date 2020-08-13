import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import marked from 'marked'
import { isEmpty } from 'lodash'

const Article = props => {
  const [article, setArticle] = useState({})
  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = async () => {
    const response = await fetch(
      `http://localhost:1337/articles/slug/${props.match.params.id}`
    )
    setArticle(await response.json())
  }

  return (
    <div style={{ margin: '5rem', textAlign: 'center' }}>
      {isEmpty(article) && <h1>Loading!</h1>}
      {!isEmpty(article) && (
        <>
          <h1>{article.title}</h1>
          {article.image.length > 0 && (
            <img
              src={`http://localhost:1337${article.image[0].formats.thumbnail.url}`}
              style={{ width: '50%' }}
            />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: marked(article.content),
            }}
          ></div>
          <Link to='/'>
            <button>Back To Articles</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Article
