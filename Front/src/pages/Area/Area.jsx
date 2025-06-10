import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import './Area.css';

const Area = () => {
  const { specialty } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:8800/doctors/${specialty}`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [specialty]);

  return (
    <div className="area-page">
      <div className="container">
        <div className="area-header">
          <h1>{specialty}</h1>
          <p>Encontre os melhores especialistas em {specialty}</p>
        </div>

        {loading ? (
          <p>Carregando médicos...</p>
        ) : doctors.length > 0 ? (
          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <p>Não há médicos disponíveis nesta especialidade.</p>
        )}
      </div>
    </div>
  );
};

export default Area;
