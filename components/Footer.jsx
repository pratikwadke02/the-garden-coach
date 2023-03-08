import React from 'react';
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2023 By The Garden Coach Store All rights reserved
      </p>
      <p>
      💖 Made with love by The Garden Coach Store - Ryan Reynolds
      </p>
      <p className='icons'>
        <a href="https://www.instagram.com/thegardencoach.in/" target="_blank" >
        <AiFillInstagram />
        </a>
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer