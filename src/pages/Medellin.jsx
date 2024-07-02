import React from 'react';
import './Cali.css'; 

const Medellin = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKMD.pdf" target="_blank" rel="noreferrer">Aeropuerto Enrique Olaya Herrera</a></h1>
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
            <th className='Procedimientos'><a href="/regionales/SKMD/RNG1E.pdf" target="_blank" rel="noreferrer">RNG1E</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMD/RNG1E.pdf" target="_blank" rel="noreferrer">RNG1E</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKMD/RVFP0220.pdf" target="_blank" rel="noreferrer">RVFP</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMD/VFR0220.pdf" target="_blank" rel="noreferrer">VFR</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 20</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMD/RVFP0220.pdf" target="_blank" rel="noreferrer">RVFP</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMD/VFR0220.pdf" target="_blank" rel="noreferrer">VFR</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Medellin;