/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import productContext from '../context/ProductContext'
import Sangmo from "../assets/sangmo.jpg";


const About = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      This is about
      <div className="container">
            <h1 className="heading">good evening everyone</h1>
            <div className="card">
              <h4>Counted: {count}</h4>
              <button onClick={handleIncrement}>Increment</button>
              <button onClick={handleDecrement}>Decrement</button>
            </div>
            <div className="sangmo">
              <h3>Dhawa Sangmo</h3>
              <img src={Sangmo} className="sango-pic" alt="her pic" />
            </div>
          </div>
    </div>
  )
}

export default About
