import React from 'react';
import './Cali.css'; 

const Arauca = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKUC.pdf" target="_blank" rel="noreferrer">Aeropuerto Santiago Perez Quiroz</a></h1>
    
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 11</th>                      
          </tr>  
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1C.pdf" target="_blank" rel="noreferrer">SIPI1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1C.pdf" target="_blank" rel="noreferrer">GARC1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1C.pdf" target="_blank" rel="noreferrer">OSIL1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1C.pdf" target="_blank" rel="noreferrer">TME1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1D.pdf" target="_blank" rel="noreferrer">SIPI1D</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1D.pdf" target="_blank" rel="noreferrer">GARC1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1D.pdf" target="_blank" rel="noreferrer">OSIL1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1D.pdf" target="_blank" rel="noreferrer">TME1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/TERI1A.pdf" target="_blank" rel="noreferrer">TERI1A</a></th>
          </tr>
                 
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 29</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1E.pdf" target="_blank" rel="noreferrer">SIPI1E</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1E.pdf" target="_blank" rel="noreferrer">OSIL1G</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKUC/SIPI1E.pdf" target="_blank" rel="noreferrer">TME1J</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 11</th>                      
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/OSIL1E.pdf" target="_blank" rel="noreferrer">OSIL1E</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/OSIL1E.pdf" target="_blank" rel="noreferrer">TME1A</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/OSIL1F.pdf" target="_blank" rel="noreferrer">OSIL1F</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/OSIL1F.pdf" target="_blank" rel="noreferrer">TME1F</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/OSIL1F.pdf" target="_blank" rel="noreferrer">UTNU1A</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 29</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 11</th>                      
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/VOR11.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/RNP11.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 29</th>                      
          </tr> 
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKUC/RNP29.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Arauca;