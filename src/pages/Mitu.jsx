import React from 'react';
import './Cali.css'; 

const Mitu = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKMU.pdf" target="_blank" rel="noreferrer">Aeropuerto Fabio A. León Bentley</a></h1>
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
            <th className='Procedimientos'><a href="/regionales/SKMU/NIBR1A.pdf" target="_blank" rel="noreferrer">NIBR1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMU/NIBR1A.pdf" target="_blank" rel="noreferrer">VURM1B</a></th>
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
            <th className='Procedimientos'><a href="/regionales/SKMU/IRID1A.pdf" target="_blank" rel="noreferrer">IRID1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMU/IRID1A.pdf" target="_blank" rel="noreferrer">VURM1A</a></th>
          </tr>
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 20</th>                      
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
            <th className='Procedimientos'><a href="/regionales/SKMU/RNP02.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 20</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKMU/VOR20.pdf" target="_blank" rel="noreferrer">VOR</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Mitu;