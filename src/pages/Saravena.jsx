import React from 'react';
import './Cali.css'; 

const Saravena = () => {
  return (
   <div>
    <div className='Espacio-titulo'>
      <h1><a className='Titulo' href="/aip/SKSA.pdf" target="_blank" rel="noreferrer">Aeropuerto Colonizadores</a></h1>
    </div>

    <div className='containeraeropuertos'>
      
      <div className='subcontaineraeropuertos'>
        <h1>SID</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 16</th>                      
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/EKOL1A.pdf" target="_blank" rel="noreferrer">EKOL1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/EKOL1A.pdf" target="_blank" rel="noreferrer">ISRO1B</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/EKOL1A.pdf" target="_blank" rel="noreferrer">SIPI1A</a></th>
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/EKOL1A.pdf" target="_blank" rel="noreferrer">TME1H</a></th>
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/AUC1F.pdf" target="_blank" rel="noreferrer">AUC1F</a></th>
          </tr>  
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/AUC1F.pdf" target="_blank" rel="noreferrer">EKOL1B</a></th>
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/AUC1F.pdf" target="_blank" rel="noreferrer">ISRO1F</a></th>
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/AUC1F.pdf" target="_blank" rel="noreferrer">REMI1F</a></th>
          </tr> 
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos1'>
              <th className="pista">PISTA 34</th>                      
          </tr>
          
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>STAR</h1>
        <div className='container-tablas'>
          <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 16</th>                      
          </tr>
         
          </table>

          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos2'>
              <th className="pista">PISTA 34</th>                      
          </tr>
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/NETK1B.pdf" target="_blank" rel="noreferrer">NETK1B</a></th>
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/NETK1B.pdf" target="_blank" rel="noreferrer">SIPI1B</a></th>
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/NETK1B.pdf" target="_blank" rel="noreferrer">ISRO1E</a></th>
          </tr> 
          </table>
        </div> 
      </div>

      <div className='subcontaineraeropuertos'>
        <h1>IAC</h1>
        <div className='container-tablas'>
           <table className='tabla-aeropuertos1'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 16</th>                      
          </tr>
         
          </table>
          <table className='tabla-aeropuertos2'>
          <tr className='divisoraeropuertos3'>
              <th className="pista">PISTA 34</th>                      
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/RNP34.pdf" target="_blank" rel="noreferrer">RNP</a></th>
          </tr> 
          <tr>
            <th className='Procedimientos'><a href="/regionales/SKSA/VORA34.pdf" target="_blank" rel="noreferrer">VOR A</a></th>
          </tr>
          </table>
        </div>
      </div>

    </div>

  </div>
  );
};
export default Saravena;