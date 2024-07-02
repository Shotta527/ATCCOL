import React from 'react';
import './Cali.css'; 

const Barrancabermeja = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKEJ.pdf" target="_blank" rel="noreferrer">Aeropuerto Yariguies</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 04</th>                      
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/EJA1J.pdf" target="_blank" rel="noreferrer">EJA1J</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/AKSO1A.pdf" target="_blank" rel="noreferrer">AKSO1A</a></th>
          </tr>
                 
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 22</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/AKSO1B.pdf" target="_blank" rel="noreferrer">AKSO1B</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 04</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/YACA1A.pdf" target="_blank" rel="noreferrer">YACA1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/POXO1G.pdf" target="_blank" rel="noreferrer">POXO1G</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/POXO1G.pdf" target="_blank" rel="noreferrer">UMKA1D</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/POXO1G.pdf" target="_blank" rel="noreferrer">YACA1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/YACA1C.pdf" target="_blank" rel="noreferrer">YACA1C</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 22</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 04</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/VOR04.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKEJ/RNP04.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 22</th>                      
          </tr> 
          
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Barrancabermeja;