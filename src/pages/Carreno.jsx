import React from 'react';
import './Cali.css'; 

const Carreno = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKPC.pdf" target="_blank" rel="noreferrer">Aeropuerto Germán Olano</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 07</th>                      
          </tr>  
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 25</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/SIDU2A.pdf" target="_blank" rel="noreferrer">SIDU2A+</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/OVTU2B.pdf" target="_blank" rel="noreferrer">SIDU2D+</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/OVTU2B.pdf" target="_blank" rel="noreferrer">OVTU2B+</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 07</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/SIDU2B.pdf" target="_blank" rel="noreferrer">SIDU2B+</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/SIDU2B.pdf" target="_blank" rel="noreferrer">OVTU2A+</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 25</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 07</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/VOR07.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPC/RNP07.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 25</th>                      
          </tr> 
          
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Carreno;