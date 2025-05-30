import SpecialtyCard from '../../components/SpecialtyCard/SpecialtyCard';
import './Specialties.css';

// Mock data - prepared for future MySQL integration
const allSpecialties = [
  { id: 1, name: 'Cardiologia', slug: 'cardiologia' },
  { id: 2, name: 'Ortopedia', slug: 'ortopedia' },
  { id: 3, name: 'Pediatria', slug: 'pediatria' },
  { id: 4, name: 'Dermatologia', slug: 'dermatologia' },
  { id: 5, name: 'Neurologia', slug: 'neurologia' },
  { id: 6, name: 'Oftalmologia', slug: 'oftalmologia' },
  { id: 7, name: 'Ginecologia', slug: 'ginecologia' },
  { id: 8, name: 'Urologia', slug: 'urologia' },
  { id: 9, name: 'Psiquiatria', slug: 'psiquiatria' },
  { id: 10, name: 'Otorrinolaringologia', slug: 'otorrinolaringologia' },
  { id: 11, name: 'Endocrinologia', slug: 'endocrinologia' },
  { id: 12, name: 'Gastroenterologia', slug: 'gastroenterologia' },
];

const Specialties = () => {
  return (
    <div className="specialties-page">
      <div className="container">
        <h1>Todas as Especialidades</h1>
        <p className="page-description">
          Explore todas as especialidades médicas disponíveis no MedCare
        </p>
        
        <div className="specialties-full-grid">
          {allSpecialties.map(specialty => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;