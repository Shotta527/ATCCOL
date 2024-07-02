import React from 'react';
import './Cali.css'; 

const Manizales = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKMZ.pdf" target="_blank" rel="noreferrer">Aeropuerto La nubia</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 10</th>                      
          </tr>  
          

               
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 28</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/ISVO1C.pdf" target="_blank" rel="noreferrer">ISVO1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/ISVO1C.pdf" target="_blank" rel="noreferrer">PEI1B</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 10</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/NIRS1B.pdf" target="_blank" rel="noreferrer">NIRS1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/NIRS1B.pdf" target="_blank" rel="noreferrer">PEI1C</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/VULE1A.pdf" target="_blank" rel="noreferrer">VULE1A</a></th>
          </tr>

          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 28</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 10</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/VORZ10.pdf" target="_blank" rel="noreferrer">VOR Z</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMZ/VORY10.pdf" target="_blank" rel="noreferrer">VOR Y</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 28</th>                      
          </tr> 
          
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Manizales;