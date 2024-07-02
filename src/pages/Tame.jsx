import React from 'react';
import './Cali.css'; 

const Tame = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKTM.pdf" target="_blank" rel="noreferrer">Aeropuerto Gustavo Vargas</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 07</th>                      
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKTM/AUC3A.pdf" target="_blank" rel="noreferrer">AUC3A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKTM/AUC3A.pdf" target="_blank" rel="noreferrer">ISRO1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKTM/AUC3A.pdf" target="_blank" rel="noreferrer">REMI2A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKTM/AUC3A.pdf" target="_blank" rel="noreferrer">UTNU1D</a></th>
          </tr>  
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 25</th>                      
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
            <th className='Procedimientos'><a href="/regionales/SKTM/VOR07.pdf" target="_blank" rel="noreferrer">VOR</a></th>
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
export default Tame;