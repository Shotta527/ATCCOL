import React from 'react';
import './Cali.css'; 

const Guapi = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKGP.pdf" target="_blank" rel="noreferrer">Aeropuerto Juan Casiano</a></h1>
    </div>
    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 02</th>                      
          </tr>  
          
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/MUGT1A - SKGP.pdf" target="_blank" rel="noreferrer">MUGT1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/MUGT1A - SKGP.pdf" target="_blank" rel="noreferrer">BITU1C</a></th>
          </tr>    
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/MUGT1A - SKGP.pdf" target="_blank" rel="noreferrer">BURP1E</a></th>
          </tr>    
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGP/XOKI2D - SKGP.pdf" target="_blank" rel="noreferrer">XOKI2D</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/XOKI2D - SKGP.pdf" target="_blank" rel="noreferrer">BITU1B</a></th>
          </tr>
           
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 02</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BITU2A - SKGP.pdf" target="_blank" rel="noreferrer">BITU2A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BITU2A - SKGP.pdf" target="_blank" rel="noreferrer">DAKO2E</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BITU2A - SKGP.pdf" target="_blank" rel="noreferrer">BURP2C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BITU2A - SKGP.pdf" target="_blank" rel="noreferrer">GAVA2B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BITU2A - SKGP.pdf" target="_blank" rel="noreferrer">ISKU2C</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BURP2D - SKGP.pdf" target="_blank" rel="noreferrer">BURP2D</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BURP2D - SKGP.pdf" target="_blank" rel="noreferrer">DAKO2F</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BURP2D - SKGP.pdf" target="_blank" rel="noreferrer">GAVA2C</a> </th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BURP2D - SKGP.pdf" target="_blank" rel="noreferrer">ISKU2D</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/BURP2D - SKGP.pdf" target="_blank" rel="noreferrer">XOKI2C</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 02</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/RNP02 - SKGP.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGP/RNP20 - SKGP.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr> 
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Guapi;
