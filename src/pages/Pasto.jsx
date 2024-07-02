import React from 'react';
import './Cali.css'; 

const Pasto = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKPS.pdf" target="_blank" rel="noreferrer">Aeropuerto Antonio Nariño</a></h1>
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
            <th className='Procedimientos'><a href="/regionales/SKPS/MER6.pdf" target="_blank" rel="noreferrer">MER6</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/ANKA2B.pdf" target="_blank" rel="noreferrer">ANKA2B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/ANKA2B.pdf" target="_blank" rel="noreferrer">TITG2A</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKPS/PAKE1A.pdf" target="_blank" rel="noreferrer">PAKE1A</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 20</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/PAKE1A.pdf" target="_blank" rel="noreferrer">PAKE1A</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKPS/RNP02.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 20</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/ILSZ.pdf" target="_blank" rel="noreferrer">ILS Z</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/ILSX.pdf" target="_blank" rel="noreferrer">ILS X</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/LOC.pdf" target="_blank" rel="noreferrer">LOC</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPS/RNP20.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Pasto;