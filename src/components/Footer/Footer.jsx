import './Footer.css';
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-icon1'>
            <div>
              <h1 className=' text-lg'>GLARK Fashion</h1><br/>
              GLARK Fashion, retail chain takes pride in its Sri Lankan roots but 
              <br />offers a world-class retail experience that drives customer 
              <br />loyalty while simultaneously setting new benchmarks in 
              <br />customer-centricity to take the art of retailing to a new level.
            </div>
          </div>
          <div className='footer-icon2'>
            <ul>
              <li><h1>Menu</h1></li><br />
              <li>Woman</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Baby</li>
            </ul>
          </div>
          <div className='footer-icon3'>
            <div>
              GLARK Fashion <br/>
              Godawaththa, <br/>
              Panangala West,  <br/>
              Panangala
            </div>
            <div>
                <br />+94 77 230 85 19
            </div>
          </div>
        </div>
        <div className='copyright'>
          <br />
          <hr />
        </div>
        <div className='copyright-powered-by'>
          <h6>
            © 2024 GLARK Fashion Online Store. All rights reserved. Powered by GLARK Technologies PVT LTD.
          </h6>
        </div>
    </footer>
  )
}

export default Footer;