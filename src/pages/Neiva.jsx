import React from 'react';
import './Cali.css'; 

const Neiva = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKNV.pdf" target="_blank" rel="noreferrer">Aeropuerto Benito Salas</a></h1>
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
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA1B.pdf" target="_blank" rel="noreferrer">GAXA1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA1B.pdf" target="_blank" rel="noreferrer">VUKT1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA1B.pdf" target="_blank" rel="noreferrer">GAXA1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA1B.pdf" target="_blank" rel="noreferrer">VUKT1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA1B.pdf" target="_blank" rel="noreferrer">NVA3B</a></th>
          </tr>     
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA2A.pdf" target="_blank" rel="noreferrer">GAXA2A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA2A.pdf" target="_blank" rel="noreferrer">VUKT1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/NVA1A.pdf" target="_blank" rel="noreferrer">NVA1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/NVA1A.pdf" target="_blank" rel="noreferrer">NVA1C</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKNV/VUKT2C.pdf" target="_blank" rel="noreferrer">VUKT2C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/GAXA2E.pdf" target="_blank" rel="noreferrer">GAXA2E</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/LIXA1A.pdf" target="_blank" rel="noreferrer">LIXA1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/USANA3.pdf" target="_blank" rel="noreferrer">USANA3</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKNV/VOR02.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 20</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKNV/VOR20.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Neiva;