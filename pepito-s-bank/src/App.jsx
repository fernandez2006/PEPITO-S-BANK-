import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; 
import { Container } from 'react-bootstrap';
import Index from './pages/Index'
import Categoria from './pages/forms/Categoria';
import Gasto from './pages/forms/Gasto.';
import MetodoPago from './pages/forms/MetodoPago';
import Usuario from './pages/forms/Usuario';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        {/* Define las rutas */}
        <Container>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categoria" element={<Categoria/>}/>
            <Route path="/gasto" element={<Gasto/>}/>
            <Route path="/metodopago" element={<MetodoPago/>}/>
            <Route path="/usuario" element={<Usuario/>}/>
          </Routes>
        </Container>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
