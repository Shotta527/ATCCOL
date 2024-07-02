import React from 'react';
import './Cali.css'; 

const Guabito = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
    <h1><p className='Guabito'>Base aérea Marco Fidel Suarez</p></h1>
    </div>
    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 07</th>                      
          </tr>   
          <tr>
          <th className='Procedimientos'><a href="/regionales/SKGB/ULQ1H SKGB.pdf" target="_blank" rel="noreferrer">ULQ1H</a></th>
          </tr>      
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 25</th>                      
          </tr>             
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 07</th>                      
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 25</th>                      
          </tr>
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 07</th>                      
          </tr>
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 25</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKGB/VOR A SKGB.pdf" target="_blank" rel="noreferrer">VOR A</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Guabito;