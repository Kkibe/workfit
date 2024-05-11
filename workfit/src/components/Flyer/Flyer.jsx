import React from 'react';
import './Flyer.css';

export default function Flyer() {
  return (
    <section className='home' id='home'>
      <div className="flyer">
        <span>Our special dish</span>
        <h3>Discover</h3>
        <p>We do cocktails and other drinks.</p>
        <a href="#" className='btn'>order now</a>
      </div>
    </section>
  )
}
