import React from 'react';
import './Cali.css'; 

const Buenaventura = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKBU.pdf" target="_blank" rel="noreferrer">Aeropuerto Gerardo Tovar López</a></h1>
    </div>
    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 09</th>                      
          </tr>         
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 27</th>                      
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKBU/RENA1A - SKBU.pdf" target="_blank" rel="noreferrer">RENA1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/RENA1A - SKBU.pdf" target="_blank" rel="noreferrer">KUBI1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/RENA1A - SKBU.pdf" target="_blank" rel="noreferrer">BURP1E</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/KABO1A - SKBU.pdf" target="_blank" rel="noreferrer">KABO1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/KABO1A - SKBU.pdf"  target="_blank" rel="noreferrer">VUSR1C</a></th>
          </tr>
                   
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 09</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/KABO1B - SKBU.pdf" target="_blank" rel="noreferrer">KABO1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/KABO1B - SKBU.pdf" target="_blank" rel="noreferrer">VUSR1D</a></th>
          </tr>
          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 27</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 09</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKBU/VOR09 - SKBU.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          
         
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 27</th>                      
          </tr>
          
          
          </table>
        </div>
      </div>

    </div>
    </div>
  );
};
export default Buenaventura;