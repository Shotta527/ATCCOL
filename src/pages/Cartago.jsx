import React from 'react';
import './Cali.css'; 

const Cartago = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><a className='Titulo' href="/aip/SKGO.pdf" target="_blank" rel="noreferrer">Aeropuerto Santa Ana</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 01</th>                      
          </tr>  
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AKSI2D.pdf" target="_blank" rel="noreferrer">AKSI2D</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AKSI2D.pdf" target="_blank" rel="noreferrer">AXM2C</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AKSI2D.pdf" target="_blank" rel="noreferrer">IRIG2J</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AKSI2D.pdf" target="_blank" rel="noreferrer">MZL2A</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AKSI2D.pdf" target="_blank" rel="noreferrer">MATR2A</a></th>
          </tr>      
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 19</th>                      
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AXM3D.pdf" target="_blank" rel="noreferrer">AXM3D</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/AXM3D.pdf" target="_blank" rel="noreferrer">IRIG2F</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/ASIK2E.pdf" target="_blank" rel="noreferrer">ASIK2E</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/ASIK2E.pdf" target="_blank" rel="noreferrer">MZL2B</a></th>
          </tr>
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGO/ASIK2E.pdf" target="_blank" rel="noreferrer">MATR2C</a></th>
          </tr>

          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 01</th>                      
          </tr>
         
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 19</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 01</th>                      
          </tr>
          
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 19</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGO/VORA19.pdf" target="_blank" rel="noreferrer">VOR A</a></th>
          </tr>
          
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Cartago;