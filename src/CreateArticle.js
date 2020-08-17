import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState()
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    // get token from localStorage
    const token = localStorage.getItem('token')
    console.log('token', token)

    // create FormData() for POST request
    const formData = new FormData()
    formData.append('data', JSON.stringify({ title, content }))
    formData.append('files.image', image)

    // send POST request to create new article
    const response = await fetch('http://localhost:1337/articles', {
      method: 'POST',
      body: formData,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })

    // if response is 'ok', navigate back to homepage to display list of articles
    if (response.status === 200) history.push('/')
  }
  return (
    <div
      style={{
        margin: '5rem auto 5rem auto',
        width: '15rem',
        alignSelf: 'center',
      }}
    >
      <h1>Create Article</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '1rem' }}>
          <label htmlFor='title' style={{ display: 'block' }}>
            Title:
          </label>
          <input
            type='text'
            name='title'
            placeholder='Article Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <label htmlFor='content' style={{ display: 'block' }}>
            Content:
          </label>
          <textarea
            type='textarea'
            name='content'
            rows='8'
            placeholder='Article Content'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <label htmlFor='image' style={{ display: 'block' }}>
            Image:
          </label>
          <input
            type='file'
            name='image'
            accept='image/png, image/jpeg'
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
        <input type='submit' value='Create Article' />
      </form>
    </div>
  )
}

export default CreateArticle
