import { Link } from 'react-router-dom';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import SpecialtyCard from '../../components/SpecialtyCard/SpecialtyCard';
import './Home.css';

// Mock data - prepared for future MySQL integration
const specialties = [
  { id: 1, name: 'Cardiologia', slug: 'cardiologia' },
  { id: 2, name: 'Ortopedia', slug: 'ortopedia' },
  { id: 3, name: 'Pediatria', slug: 'pediatria' },
  { id: 4, name: 'Dermatologia', slug: 'dermatologia' },
];

const doctors = [
  { id: 1, name: 'Dr. Carlos Silva', specialty: 'Cardiologia', rating: 4.5 },
  { id: 2, name: 'Dra. Ana Souza', specialty: 'Ortopedia', rating: 5 },
  { id: 3, name: 'Dr. Roberto Mendes', specialty: 'Pediatria', rating: 4 },
  { id: 4, name: 'Dra. Mariana Costa', specialty: 'Dermatologia', rating: 4.8 },
];

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        {/* Emergency Button */}
        <Link to="/emergencia" className="emergency-button">
          Emergência
        </Link>
        
        {/* Specialties Section */}
        <section className="specialties-section">
          <div className="section-header">
            <h2>Especialidades</h2>
            <Link to="/especialidades" className="view-all">
              Ver todas as especialidades
            </Link>
          </div>
          
          <div className="specialties-grid">
            {specialties.map(specialty => (
              <SpecialtyCard key={specialty.id} specialty={specialty} />
            ))}
          </div>
        </section>
        
        {/* Doctors Section */}
        <section className="doctors-section">
          <h2>Médicos em Destaque</h2>
          <div className="doctors-grid">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;