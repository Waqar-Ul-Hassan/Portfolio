import React from 'react'
import videoBg from '../BackAssets/NameBack.mp4'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Main
