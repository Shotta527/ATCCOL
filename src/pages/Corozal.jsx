import React from 'react';
import './Cali.css'; 

const Corozal = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKCZ.pdf" target="_blank" rel="noreferrer">Aeropuerto las brujas</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 03</th>                      
          </tr>  
                
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 21</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/UGAL1B.pdf" target="_blank" rel="noreferrer">UGAL1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/AKPA1M.pdf" target="_blank" rel="noreferrer">AKPA1M</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/AKPA1M.pdf" target="_blank" rel="noreferrer">LOLU1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/AKPA1M.pdf" target="_blank" rel="noreferrer">MGN1E</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/NIMV1A.pdf" target="_blank" rel="noreferrer">NIMV1A</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 03</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">BUTA1G</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">GEKI1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">GERN1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">MGN1F</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">MTR1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">VUKR1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/BUTA1G.pdf" target="_blank" rel="noreferrer">XOGE1B</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 21</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 03</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/VOR03.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKCZ/RNP03.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 21</th>                      
          </tr> 
          
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Corozal;