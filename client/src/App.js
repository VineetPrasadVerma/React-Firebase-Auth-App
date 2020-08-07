import React, { useState, useEffect } from 'react'
import fire from './config/fire'
import Home from './Home'
import Login from './Login'
import Error from './Error'

function App () {
  const [user, setUser] = useState(null)

  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const showError = (message) => {
    setMessage(message)
    setError(true)
  }

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
      })
    }

    authListener()
  })

  return !error ? (
    <div className='App'>
      {user ? (<Home showError={showError} />) : (<Login showError={showError} />)}
    </div>
  ) : (<Error message={message} />)
}

export default App
