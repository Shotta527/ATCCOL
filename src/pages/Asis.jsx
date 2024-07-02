import React from 'react';
import './Cali.css'; 

const Asis = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKAS.pdf" target="_blank" rel="noreferrer">Aeropuerto Tres de mayo</a></h1>
   
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
          <th className='Procedimientos'><a href="/regionales/SKAS/MIBI1A.pdf" target="_blank" rel="noreferrer">MIBI1A</a></th>
          </tr>    
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKAS/MIBI1A.pdf" target="_blank" rel="noreferrer">PADA2B</a></th>
          </tr> 
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKAS/MIBI1A.pdf" target="_blank" rel="noreferrer">TISL2C</a></th>
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
          <th className='Procedimientos'><a href="/regionales/SKAS/MIBI1B.pdf" target="_blank" rel="noreferrer">MIBI1B</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKAS/MIBI1B.pdf" target="_blank" rel="noreferrer">PADA1A</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKAS/MIBI1B.pdf" target="_blank" rel="noreferrer">TISL1B</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKAS/MER1A.pdf" target="_blank" rel="noreferrer">MER1A</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKAS/RNP19.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Asis;