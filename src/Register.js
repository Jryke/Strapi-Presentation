import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    // create data object for POST request
    const data = { username, email, password }

    // make POST request
    const response = await fetch('http://localhost:1337/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log('response', response)

    const responseData = await response.json()
    console.log('responseData', responseData)

    console.log('token', responseData.jwt)

    // save token from response to local storage
    localStorage.setItem('token', responseData.jwt)

    // if response is 'ok', navigate back to homepage to display list of articles
    if (response.status === 200) history.push('/')
  }

  return (
    <div style={{ margin: '0 5rem 0 5rem' }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '1rem' }}>
          <label htmlFor='username' style={{ display: 'block' }}>
            Username:
          </label>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <label htmlFor='email' style={{ display: 'block' }}>
            Email:
          </label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div style={{ margin: '1rem' }}>
          <label htmlFor='password' style={{ display: 'block' }}>
            Password:
          </label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type='submit' value='Register User' />
      </form>
    </div>
  )
}

export default Register
