import React, { useState } from 'react'
import fire from './config/fire'

const Login = ({ showError }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()
    try {
      const user = await fire.auth().signInWithEmailAndPassword(email, password)
      console.log(user)
    } catch (err) {
      showError(err.code)
    }
  }

  const signup = async (e) => {
    e.preventDefault()
    try {
      const user = await fire.auth().createUserWithEmailAndPassword(email, password)
      console.log(user)
    } catch (err) {
      showError(err.code)
    }
  }

  return (
    <div>
      <form>
        <h1>Form</h1>
        <div className='form-group'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            required
            className='form-control'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            required
            className='form-control'
            placeholder='Password'
          />
        </div>
        <button type='submit' onClick={login} className='btn btn-primary'>
          Login
        </button>
        <button
          onClick={signup}
          style={{ marginLeft: '25px' }}
          className='btn btn-success'
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Login
