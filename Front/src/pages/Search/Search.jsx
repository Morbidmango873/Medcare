import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import './Search.css';

// Mock data - prepared for future MySQL integration
const allDoctors = [
  { id: 1, name: 'Dr. Carlos Silva', specialty: 'Cardiologia', rating: 4.5 },
  { id: 2, name: 'Dra. Ana Souza', specialty: 'Ortopedia', rating: 5 },
  { id: 3, name: 'Dr. Roberto Mendes', specialty: 'Pediatria', rating: 4 },
  { id: 4, name: 'Dra. Mariana Costa', specialty: 'Dermatologia', rating: 4.8 },
  { id: 5, name: 'Dra. Beatriz Almeida', specialty: 'Cardiologia', rating: 4.7 },
  { id: 6, name: 'Dr. Ricardo Santos', specialty: 'Ortopedia', rating: 4.8 },
  { id: 7, name: 'Dra. Carla Oliveira', specialty: 'Pediatria', rating: 4.9 },
  { id: 8, name: 'Dr. Lucas Ferreira', specialty: 'Dermatologia', rating: 4.3 },
];

const Search = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      const results = allDoctors.filter(doctor => 
        doctor.name.toLowerCase().includes(query.toLowerCase()) || 
        doctor.specialty.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(allDoctors);
    }
  }, [location.search]);

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-header">
          {searchQuery ? (
            <h1>Resultados para: "{searchQuery}"</h1>
          ) : (
            <h1>Todos os Médicos</h1>
          )}
        </div>
        
        {searchResults.length > 0 ? (
          <div className="search-results">
            {searchResults.map(doctor => (
              <div key={doctor.id} className="search-result-item">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Nenhum médico encontrado para "{searchQuery}"</p>
            <p>Tente buscar por nome ou especialidade</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;