import React from 'react';
import './Cali.css'; 

const Tumaco = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKCO.pdf" target="_blank" rel="noreferrer">Aeropuerto La Florida</a></h1>
    </div>
    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 06</th>                     
          </tr>         
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKCO/ENSO3B - SKCO.pdf" target="_blank" rel="noreferrer">GIBT1A</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKCO/ENSO3B - SKCO.pdf" target="_blank" rel="noreferrer">ENSO3B</a></th>
          </tr>          
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKCO/ENSO3B - SKCO.pdf" target="_blank" rel="noreferrer">TUNGI3</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCO/ENSO3B - SKCO.pdf" target="_blank" rel="noreferrer">XOKI1B</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 24</th>                      
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKCO/ANGEL5A -SKCO.pdf" target="_blank" rel="noreferrer">ANGEL5A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCO/ANGEL5A -SKCO.pdf" target="_blank" rel="noreferrer">ENSO3A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCO/ANGEL5A -SKCO.pdf" target="_blank" rel="noreferrer">TCO3A</a></th>
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 06</th>                      
          </tr>          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 24</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCO/GIBT1B - SKCO.pdf" target="_blank" rel="noreferrer">GIBT1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCO/GIBT1B - SKCO.pdf" target="_blank" rel="noreferrer">XOKI1A</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 06</th>                      
          </tr>          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 24</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCO/VOR24 - SKCO.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Tumaco;