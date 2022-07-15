import React from 'react'
import Infinity from "../assets/svg/Infinity.svg";

const LoadingPage = () => {
  return (
    <div className='loadingPage'>
      <h1>Loading...</h1>
      <img src={Infinity} alt="loading" />
    </div>
  )
}

export default LoadingPage