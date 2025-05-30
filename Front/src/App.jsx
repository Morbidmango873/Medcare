import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header/Header';

// Import pages
import Home from './pages/Home/Home';
import Emergency from './pages/Emergency/Emergency';
import Area from './pages/Area/Area';
import Doctor from './pages/Doctor/Doctor';
import Appointment from './pages/Appointment/Appointment';
import Search from './pages/Search/Search';
import Menu from './pages/Menu/Menu';
import Specialties from './pages/Specialties/Specialties';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergencia" element={<Emergency />} />
            <Route path="/area/:specialty" element={<Area />} />
            <Route path="/medico/:id" element={<Doctor />} />
            <Route path="/agendar/:doctorId" element={<Appointment />} />
            <Route path="/buscar" element={<Search />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/especialidades" element={<Specialties />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;