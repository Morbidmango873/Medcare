import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import './Search.css';

const Search = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q') || '';
    setSearchQuery(query);

    const fetchDoctors = async () => {
      try {
        const url = query 
          ? `http://localhost:8800/search?q=${encodeURIComponent(query)}`
          : 'http://localhost:8800/select';

        const res = await fetch(url);
        const data = await res.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
      }
    };

    fetchDoctors();
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
