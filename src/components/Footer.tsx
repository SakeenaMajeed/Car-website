import React from 'react';
import '../styling/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <h3>CARVILLA</h3>
          <p>Ased do eiusmod tempor incididut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p>sakeenamajeed24@gmail.com</p>
          <p>+1 (222) 1234567890</p>
        </div>
        <div className="footerColumn">
          <h3>ABOUT DEVLOON</h3>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Career</a></p>
          <p><a href="#">Terms of Service</a></p>
          <p><a href="#">Privacy Policy</a></p>
        </div>
        <div className="footerColumn">
          <h3>TOP BRANDS</h3>
          <p>BMW</p>
          <p>Lamborghini</p>
          <p>Camaro</p>
          <p>Audi</p>
          <p>Infiniti</p>
          <p>Nissan</p>
          <p>Ferrari</p>
          <p>Porsche</p>
          <p>Land Rover</p>
          <p>Aston Martin</p>
          <p>Mercedes</p>
          <p>Opel</p>
        </div>
      </div>
      <div className="footerBottom">
        <p>© Copyright. sakeena-majeed.</p>
   
      </div>
    </div>
  );
};

export default Footer;
