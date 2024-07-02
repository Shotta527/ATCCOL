import React from 'react';
import './Cali.css'; 

const Providencia = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKPV.pdf" target="_blank" rel="noreferrer">Aeropuerto El embrujo</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 17</th>                      
          </tr>  
          
               
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 35</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 17</th>                      
          </tr>
          
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 35</th>                      
          </tr>
         
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 17</th>                      
          </tr>
          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 35</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPV/RVFP35.pdf" target="_blank" rel="noreferrer">RVFP</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Providencia;