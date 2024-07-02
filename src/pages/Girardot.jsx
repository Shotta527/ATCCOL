import React from 'react';
import './Cali.css'; 

const Girardot = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKGI.pdf" target="_blank" rel="noreferrer">Aeropuerto Santiago Vila</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 02</th>                      
          </tr>  
          
                 
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGI/GIR2C.pdf" target="_blank" rel="noreferrer">GIR2C</a></th>
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
          
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 20</th>                      
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
            <th className='Procedimientos'><a href="/regionales/SKGI/VORA.pdf" target="_blank" rel="noreferrer">VOR A</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 20</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGI/VORA.pdf" target="_blank" rel="noreferrer">VOR A</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Girardot;