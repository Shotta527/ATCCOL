import React from 'react'
import './Footer.css';
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer> 
      <div className='ayudanos'>
        <p> Ayudanos a corregir errores y mantener la página actualizada.</p>  
      </div> 

      <div className='footercontainer'>
      <a href="https://wa.me/573169826826" target="_blank"><FaWhatsapp className='icons1'/> </a>
      <a href="https://t.me/+573169826826" target="_blank" ><FaTelegramPlane className='icons2'/></a>
      <a href="mailto:atccolupdate@gmail.com"><HiOutlineMail className='icons3'/></a>
      </div> 

      <div className='djm'>
        <p> DJM 2023</p>  
      </div>

    </footer>
        
    
  )
}

export default Footer;