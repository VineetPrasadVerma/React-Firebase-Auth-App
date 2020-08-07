import React from 'react'
import fire from './config/fire'

const Home = ({ handleError }) => {
  const logout = async () => {
    try {
      await fire.auth().signOut()
    } catch (err) {
      handleError(err.code)
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
