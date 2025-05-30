import { useParams } from 'react-router-dom';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import './Area.css';

// Mock data - prepared for future MySQL integration
const specialtiesData = {
  cardiologia: {
    name: 'Cardiologia',
    doctors: [
      { id: 1, name: 'Dr. Carlos Silva', specialty: 'Cardiologia', rating: 4.5 },
      { id: 5, name: 'Dra. Beatriz Almeida', specialty: 'Cardiologia', rating: 4.7 },
      { id: 9, name: 'Dr. Fernando Gomes', specialty: 'Cardiologia', rating: 4.2 },
    ]
  },
  ortopedia: {
    name: 'Ortopedia',
    doctors: [
      { id: 2, name: 'Dra. Ana Souza', specialty: 'Ortopedia', rating: 5 },
      { id: 6, name: 'Dr. Ricardo Santos', specialty: 'Ortopedia', rating: 4.8 },
      { id: 10, name: 'Dra. Juliana Lima', specialty: 'Ortopedia', rating: 4.6 },
    ]
  },
  pediatria: {
    name: 'Pediatria',
    doctors: [
      { id: 3, name: 'Dr. Roberto Mendes', specialty: 'Pediatria', rating: 4 },
      { id: 7, name: 'Dra. Carla Oliveira', specialty: 'Pediatria', rating: 4.9 },
      { id: 11, name: 'Dr. Paulo Martins', specialty: 'Pediatria', rating: 4.4 },
    ]
  },
  dermatologia: {
    name: 'Dermatologia',
    doctors: [
      { id: 4, name: 'Dra. Mariana Costa', specialty: 'Dermatologia', rating: 4.8 },
      { id: 8, name: 'Dr. Lucas Ferreira', specialty: 'Dermatologia', rating: 4.3 },
      { id: 12, name: 'Dra. Camila Dias', specialty: 'Dermatologia', rating: 4.7 },
    ]
  }
};

const Area = () => {
  const { specialty } = useParams();
  const specialtyData = specialtiesData[specialty] || { name: 'Especialidade não encontrada', doctors: [] };

  return (
    <div className="area-page">
      <div className="container">
        <div className="area-header">
          <h1>{specialtyData.name}</h1>
          <p>Encontre os melhores especialistas em {specialtyData.name}</p>
        </div>
        
        {specialtyData.doctors.length > 0 ? (
          <div className="doctors-grid">
            {specialtyData.doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="no-doctors">
            <p>Não há médicos disponíveis nesta especialidade no momento.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Area;