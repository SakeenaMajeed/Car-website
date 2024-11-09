import React from 'react'
import '../styling/Hero.css';

const Hero = () => {
  return (
    <div>


<main id="hero">
        <div className="heroText">
          <h2>GET YOUR DESIRED CAR IN REASONABLE PRICE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="contactBtn">Contact Us</button>
        </div>
      </main>

      <section className="searchSection">
        <div className="searchBox">
          <select>
            <option>Select Year</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
          <select>
            <option>Select Make</option>
            <option>Toyota</option>
            <option>Holden</option>
            <option>Mercedes-Benz</option>
          </select>
          <select>
            <option>Select Model</option>
            <option>kia-rio</option>
            <option>mitsubishi</option>
            <option>Ford</option>
          </select>
          <select>
            <option>Select Price</option>  
            <option>$0.00</option>
            <option>$0.00</option>   
            <option>$0.00</option>
          </select>
          <select>
            <option>Body Style</option>
            <option>sedan</option>
            <option>van</option>
            <option>roadster</option>
          </select>
          <select>
            <option>Car Condition</option>
            <option>Used</option>
            <option>New</option>
            <option>Certified</option>
          </select>
          <button className="searchBtn">Search</button>
        </div>
      </section>
    </div>
  )
}

export default Hero