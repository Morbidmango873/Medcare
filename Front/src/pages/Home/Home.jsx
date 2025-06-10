import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import SpecialtyCard from '../../components/SpecialtyCard/SpecialtyCard';
import './Home.css';
import ImgCardio from "../../img/Cardiologia.png";
import ImgOrtopedia from "../../img/Ortopedia.png";
import ImgPediatria from "../../img/Pediatria.jpg";
import ImgDermatologia from "../../img/Dermatologia.png";

const specialties = [
  { id: 1, name: 'Cardiologia', slug: 'cardiologia', img: ImgCardio },
  { id: 2, name: 'Ortopedia', slug: 'ortopedia', img: ImgOrtopedia },
  { id: 3, name: 'Pediatria', slug: 'pediatria', img: ImgPediatria },
  { id: 4, name: 'Dermatologia', slug: 'dermatologia', img: ImgDermatologia },
];


const Home = () => {
  
  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [errorDoctors, setErrorDoctors] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:8800/select');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        setErrorDoctors('Não foi possível carregar os médicos. Tente novamente mais tarde.');
      } finally {
        setLoadingDoctors(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        {/* Botão de Emergência */}
        <Link to="/emergencia" className="emergency-button">
          Emergência
        </Link>

        {/* Seção de Especialidades (ainda usa dados mockados) */}
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

        {/* Seção de Médicos em Destaque (agora busca do servidor) */}
        <section className="doctors-section">
          <h2>Médicos em Destaque</h2>
          <div className="doctors-grid">
            {loadingDoctors ? (
              <p>Carregando médicos...</p> // Mensagem de carregamento
            ) : errorDoctors ? (
              <p className="error-message">{errorDoctors}</p> // Mensagem de erro
            ) : doctors.length > 0 ? (
              doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            ) : (
              <p>Nenhum médico em destaque encontrado.</p> // Nenhum médico retornado
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;