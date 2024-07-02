import React from 'react';
import './Cali.css'; 

const Villavicencio = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKVV.pdf" target="_blank" rel="noreferrer">Aeropuerto Vanguardia</a></h1>
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
             <th className='Procedimientos'><a href="/regionales/SKVV/VVC1B.pdf" target="_blank" rel="noreferrer">VVC1B</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/NIPN1A.pdf" target="_blank" rel="noreferrer">NIPN1A</a></th>
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
             <th className='Procedimientos'><a href="/regionales/SKVV/ANLA4A.pdf" target="_blank" rel="noreferrer">ANLA4A</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 23</th>                      
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/EVRA2F.pdf" target="_blank" rel="noreferrer">EVRA2F</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/EVRA2F.pdf" target="_blank" rel="noreferrer">KOTE2A</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/EVRA2F.pdf" target="_blank" rel="noreferrer">OGNA1A</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/EVRA2F.pdf" target="_blank" rel="noreferrer">OPTU1A</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/EVRA2F.pdf" target="_blank" rel="noreferrer">UBNO1A</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/EVRA2F.pdf" target="_blank" rel="noreferrer">UBRI1B</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/ANLA2C.pdf" target="_blank" rel="noreferrer">ANLA2C</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/OSOV2H.pdf" target="_blank" rel="noreferrer">OSOV2H</a></th>
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
             <th className='Procedimientos'><a href="/regionales/SKVV/VORA05.pdf" target="_blank" rel="noreferrer">VOR A</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 23</th>                      
          </tr> 
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/VORB23.pdf" target="_blank" rel="noreferrer">VOR B</a></th>
          </tr>
          <tr>
             <th className='Procedimientos'><a href="/regionales/SKVV/RNP23.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Villavicencio;