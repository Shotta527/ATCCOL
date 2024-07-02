import React from 'react';
import './Cali.css'; 

const Yopal = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKYP.pdf" target="_blank" rel="noreferrer">Aeropuerto El yopal</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 05</th>                      
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/SUPN1A.pdf" target="_blank" rel="noreferrer">SUPN1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/SUPN1B.pdf" target="_blank" rel="noreferrer">SUPN1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/SUPN1B.pdf" target="_blank" rel="noreferrer">UBNO1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/TITN1B.pdf" target="_blank" rel="noreferrer">TITN1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/OSIL1C.pdf" target="_blank" rel="noreferrer">OSIL1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/OSIL1C.pdf" target="_blank" rel="noreferrer">REMI1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/OSIL1C.pdf" target="_blank" rel="noreferrer">TOBS1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1B.pdf" target="_blank" rel="noreferrer">ANGU1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1B.pdf" target="_blank" rel="noreferrer">VUGE1B</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 23</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 05</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/BUTI1A.pdf" target="_blank" rel="noreferrer">BUTI1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/BUTI1A.pdf" target="_blank" rel="noreferrer">UBNO1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1A.pdf" target="_blank" rel="noreferrer">ANGU1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1A.pdf" target="_blank" rel="noreferrer">OSIL1D</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1A.pdf" target="_blank" rel="noreferrer">REMI1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1A.pdf" target="_blank" rel="noreferrer">VUGE1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ANGU1A.pdf" target="_blank" rel="noreferrer">TOBS1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/TITN1A.pdf" target="_blank" rel="noreferrer">TITN1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/BUTI1B.pdf" target="_blank" rel="noreferrer">BUTI1B</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 23</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 05</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ILSY05.pdf" target="_blank" rel="noreferrer">ILS Y</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/ILSZ05.pdf" target="_blank" rel="noreferrer">ILS Z</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/VORY05.pdf" target="_blank" rel="noreferrer">VOR Y</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKYP/VORZ05.pdf" target="_blank" rel="noreferrer">VOR Z</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 23</th>                      
          </tr> 
          
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Yopal;