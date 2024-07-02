// src/components/MenuBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="menu">
      <ul>
        <li className="menu-item"><Link to="/Cartas">Cartas</Link></li>
        <li className="menu-item"><Link to="/Documentacion">Documentación</Link></li>
        <li className="menu-item dropdown" onClick={toggleDropdown}>
          Aeropuertos
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li className="dropdown-item"><Link to="/">SKCL</Link></li>
            <li className="dropdown-item"><Link to="/skbu">SKBU</Link></li>
            <li className="dropdown-item"><Link to="/skco">SKCO</Link></li>
            <li className="dropdown-item"><Link to="/skgp">SKGP</Link></li>
            <li className="dropdown-item"><Link to="/skip">SKIP</Link></li>
            <li className="dropdown-item"><Link to="/skpp">SKPP</Link></li>
            <li className="dropdown-item"><Link to="/skps">SKPS</Link></li>
            <li className="dropdown-item"><Link to="/skgb">SKGB</Link></li>                                   
            <li className="dropdown-item"><Link to="/skar">SKAR</Link></li>
            <li className="dropdown-item"><Link to="/skas">SKAS</Link></li>
            <li className="dropdown-item"><Link to="/skbg">SKBG</Link></li>
            <li className="dropdown-item"><Link to="/skbo">SKBO</Link></li>            
            <li className="dropdown-item"><Link to="/skbq">SKBQ</Link></li>
            <li className="dropdown-item"> <a href="/aip/SKBS.pdf" target="_blank" rel="noreferrer">SKBS</a></li> 
            <li className="dropdown-item"><Link to="/skcc">SKCC</Link></li>
            <li className="dropdown-item"><Link to="/skcg">SKCG</Link></li>
            <li className="dropdown-item"><Link to="/skcz">SKCZ</Link></li>
            <li className="dropdown-item"><Link to="/skej">SKEJ</Link></li>
            <li className="dropdown-item"><Link to="/skfl">SKFL</Link></li>            
            <li className="dropdown-item"><Link to="/skgi">SKGI</Link></li>
            <li className="dropdown-item"><Link to="/skgo">SKGO</Link></li>
            <li className="dropdown-item"> <a href="/aip/SKGY.pdf" target="_blank" rel="noreferrer">SKGY</a></li> 
            <li className="dropdown-item"><Link to="/skib">SKIB</Link></li>         
            <li className="dropdown-item"><Link to="/sklc">SKLC</Link></li>
            <li className="dropdown-item"><Link to="/sklt">SKLT</Link></li>
            <li className="dropdown-item"><Link to="/skmd">SKMD</Link></li>
            <li className="dropdown-item"><Link to="/skmr">SKMR</Link></li>
            <li className="dropdown-item"><Link to="/skmu">SKMU</Link></li> 
            <li className="dropdown-item"><Link to="/skmz">SKMZ</Link></li>
            <li className="dropdown-item"><Link to="/sknv">SKNV</Link></li>
            <li className="dropdown-item"><Link to="/skpc">SKPC</Link></li>
            <li className="dropdown-item"><Link to="/skpe">SKPE</Link></li> 
            <li className="dropdown-item"><Link to="/skpv">SKPV</Link></li>                      
            <li className="dropdown-item"><Link to="/skqu">SKQU</Link></li>          
            <li className="dropdown-item"><Link to="/skrg">SKRG</Link></li>          
            <li className="dropdown-item"><Link to="/skrh">SKRH</Link></li>                        
            <li className="dropdown-item"><Link to="/sksa">SKSA</Link></li>                        
            <li className="dropdown-item"><Link to="/sksj">SKSJ</Link></li>                                     
            <li className="dropdown-item"><Link to="/sksm">SKSM</Link></li>                        
            <li className="dropdown-item"><Link to="/sksp">SKSP</Link></li>                        
            <li className="dropdown-item"><Link to="/sktm">SKTM</Link></li>         
            <li className="dropdown-item"><Link to="/skuc">SKUC</Link></li>
            <li className="dropdown-item"><Link to="/skui">SKUI</Link></li>
            <li className="dropdown-item"><Link to="/skvp">SKVP</Link></li> 
            <li className="dropdown-item"><Link to="/skvv">SKVV</Link></li>            
            <li className="dropdown-item"><Link to="/skyp">SKYP</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
