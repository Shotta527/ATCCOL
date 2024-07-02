import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Documentacion from './pages/Documentacion';
import Cartas from './pages/Cartas';
import './App.css';
import Footer from './components/Footer';
import Buenaventura from './pages/Buenaventura';
import Cali from './pages/Cali';
import Tumaco from './pages/Tumaco';
import Guapi from './pages/Guapi';
import Ipiales from './pages/Ipiales';
import Popayan from './pages/Popayan';
import Pasto from './pages/Pasto';
import Guabito from './pages/Guabito';
import Carepa from './pages/Carepa';
import Asis from './pages/Asis';
import Tea from './components/Player1';
import Pereira from './pages/Pereira';
import Cartago from './pages/Cartago';
import Armenia from './pages/Armenia';
import Arauca from './pages/Arauca';
import Barrancabermeja from './pages/Barrancabermeja';
import Barranquilla from './pages/Barranquilla';
import Bucaramanga from './pages/Bucaramanga';
import Villavicencio from './pages/Villavicencio';
import Cartagena from './pages/Cartagena';
import Corozal from './pages/Corozal';
import Cucuta from './pages/Cucuta';
import Yopal from './pages/Yopal';
import Florencia from './pages/Florencia';
import Girardot from './pages/Girardot';
import Ibague from './pages/Ibague';
import Leticia from './pages/Leticia';
import Manizales from './pages/Manizales';
import Mariquita from './pages/Mariquita';
import Medellin from './pages/Medellin';
import Mitu from './pages/Mitu';
import Neiva from './pages/Neiva';
import Monteria from './pages/Monteria';
import Providencia from './pages/Providencia';
import Carreno from './pages/Carreno';
import Quibdo from './pages/Quibdo';
import Riohacha from './pages/Riohacha';
import Rionegro from './pages/Rionegro';
import SanAndres from './pages/SanAndres';
import SanJose from './pages/SanJose';
import Saravena from './pages/Saravena';
import SantaMarta from './pages/SantaMarta';
import Tame from './pages/Tame';
import Valledupar from './pages/Valledupar';
import Bogota from './pages/Bogota';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Routes>
          <Route path="/Documentacion" element={<Documentacion/>} />
          <Route path="/cartas" element={<Cartas/>} />
          <Route path="/tea" element={<Tea/>} />
          <Route path="/" element={<Cali/>} />
          <Route path="/skbu" element={<Buenaventura/>} />
          <Route path="/skco" element={<Tumaco/>} />        
          <Route path="/skgp" element={<Guapi/>} />               
          <Route path="/skip" element={<Ipiales/>} />                         
          <Route path="/skpp" element={<Popayan/>} />               
          <Route path="/skps" element={<Pasto/>} />               
          <Route path="/skgb" element={<Guabito/>} />             
          <Route path="/sklc" element={<Carepa/>} />                      
          <Route path="/skas" element={<Asis/>} />
          <Route path="/skpe" element={<Pereira/>} />          
          <Route path="/skar" element={<Armenia/>} />           
          <Route path="/skgo" element={<Cartago/>} />
          <Route path="/skuc" element={<Arauca/>} />
          <Route path="/skej" element={<Barrancabermeja/>} />
          <Route path="/skbq" element={<Barranquilla/>} />          
          <Route path="/skbg" element={<Bucaramanga/>} />                   
          <Route path="/skvv" element={<Villavicencio/>} />                            
          <Route path="/skcg" element={<Cartagena/>} />                          
          <Route path="/skcz" element={<Corozal/>} />                         
          <Route path="/skcc" element={<Cucuta/>} />                        
          <Route path="/skyp" element={<Yopal/>} />                        
          <Route path="/skfl" element={<Florencia/>} />                     
          <Route path="/skgi" element={<Girardot/>} />                    
          <Route path="/skib" element={<Ibague/>} />                   
          <Route path="/sklt" element={<Leticia/>} />                  
          <Route path="/skmz" element={<Manizales/>} />               
          <Route path="/skqu" element={<Mariquita/>} />               
          <Route path="/skmd" element={<Medellin/>} />               
          <Route path="/skmu" element={<Mitu/>} />             
          <Route path="/sknv" element={<Neiva/>} />            
          <Route path="/skmr" element={<Monteria/>} />         
          <Route path="/skpv" element={<Providencia/>} />       
          <Route path="/skpc" element={<Carreno/>} />      
          <Route path="/skui" element={<Quibdo/>} />     
          <Route path="/skrh" element={<Riohacha/>} />   
          <Route path="/skrg" element={<Rionegro/>} /> 
          <Route path="/sksp" element={<SanAndres/>} />
          <Route path="/sksj" element={<SanJose/>} />
          <Route path="/sksa" element={<Saravena/>} />
          <Route path="/sksm" element={<SantaMarta/>} />
          <Route path="/sktm" element={<Tame/>} />
          <Route path="/skvp" element={<Valledupar/>} />
          <Route path="/skbo" element={<Bogota/>} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
