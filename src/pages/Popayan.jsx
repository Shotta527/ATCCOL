import React from 'react';
import './Cali.css'; 

const Popayan = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKPP.pdf" target="_blank" rel="noreferrer">Aeropuerto Guillermo León Valencia</a></h1>
    </div>
    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 08</th>                      
          </tr>         
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 26</th>                      
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKPP/CLO3B - SKPP.pdf" target="_blank" rel="noreferrer">CLO3B</a></th>
          </tr>
             
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 08</th>                      
          </tr>          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 26</th>                      
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 08</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPP/VOR Y - SKPP.pdf" target="_blank" rel="noreferrer">VOR Y</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKPP/VOR Z - SKPP.pdf" target="_blank" rel="noreferrer">VOR Z</a></th>
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 26</th>                      
          </tr> 
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Popayan;