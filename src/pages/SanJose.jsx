import React from 'react';
import './Cali.css'; 

const SanJose = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKSJ.pdf" target="_blank" rel="noreferrer">Aeropuerto San José del Guaviare</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 01</th>                      
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSJ/SJE1A.pdf" target="_blank" rel="noreferrer">SJE1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSJ/SJE1A.pdf" target="_blank" rel="noreferrer">OGNA2B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSJ/SJE1A.pdf" target="_blank" rel="noreferrer">UBRI2C</a></th>
          </tr>
                
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 19</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 01</th>                      
          </tr>
         
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 19</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSJ/OGNA1C.pdf" target="_blank" rel="noreferrer">OGNA1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSJ/OGNA1C.pdf" target="_blank" rel="noreferrer">UBRI1D</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 01</th>                      
          </tr>
          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 19</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSJ/VOR19.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default SanJose;