import React from 'react';
import './Cali.css'; 

const Ibague = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKIB.pdf" target="_blank" rel="noreferrer">Aeropuerto Perales</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 14</th>                      
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/GIR2A.pdf" target="_blank" rel="noreferrer">GIR2A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/GIR2A.pdf" target="_blank" rel="noreferrer">USAN2B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL1H.pdf" target="_blank" rel="noreferrer">ABL1H</a></th>
          </tr>
                
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 32</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 14</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL1P.pdf" target="_blank" rel="noreferrer">ABL1P</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL1P.pdf" target="_blank" rel="noreferrer">SILE2F</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">ABL2Q</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">IBG3A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">MQU1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">SILE3G</a></th>
          </tr>
          
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 32</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL1P.pdf" target="_blank" rel="noreferrer">ABL1P</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL1P.pdf" target="_blank" rel="noreferrer">SILE2F</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">ABL2Q</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">IBG3A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">MQU1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/ABL2Q.pdf" target="_blank" rel="noreferrer">SILE3G</a></th>
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 14</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/RNP14.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 32</th>                      
          </tr>           
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/VOR32.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/RNPZ32.pdf" target="_blank" rel="noreferrer">RNP Z</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/RNPY32.pdf" target="_blank" rel="noreferrer">RNP Y</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKIB/RNPX32.pdf" target="_blank" rel="noreferrer">RNP X</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Ibague;