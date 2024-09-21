import './App.css';
import { NavBarComp } from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { Nosotros } from '../src/pages/Nosotros';
import { Contacto } from '../src/pages/Contacto';
import { Conmmutadores } from './pages/Conmmutadores';
function App() {
  
  return (
    <div className="Contenedor-app-padre">
      <NavBarComp />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Nosotros" element={<Nosotros />}></Route>
      <Route path="/Contacto" element={<Contacto />}></Route>
      <Route path="/Conmmutadores" element={<Conmmutadores />}></Route>
      </Routes>
    </div>
  )
}

export default App
