import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StarRating from '../../components/StarRating/StarRating';
import './Doctor.css';

const Doctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8800/medico/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do médico');
        }
        return response.json();
      })
      .then((data) => {
        setDoctor(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="doctor-loading">
        <div className="container">
          <h2>Carregando...</h2>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="doctor-not-found">
        <div className="container">
          <h2>Médico não encontrado</h2>
          <Link to="/" className="back-link">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="doctor-page">
      <div className="container">
        <div className="doctor-profile">
          <div className="doctor-avatar-large"></div>
          <h1 className="doctor-name">{doctor.nome}</h1>
          <p className="doctor-specialty">{doctor.Especialidade}</p>
          <div className="doctor-rating">
            <StarRating rating={doctor.rating} />
            <span className="rating-value">{doctor.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="doctor-details">
          <div className="doctor-info-card">
            <h2>Sobre o Médico</h2>
            <p>{doctor.bio}</p>
          </div>

          <div className="doctor-info-card">
            <h2>Informações de Atendimento</h2>
            <div className="info-item">
              <strong>Local:</strong> {doctor.localizacao}
            </div>
            <div className="info-item">
              <strong>Valor da Consulta:</strong> {doctor.preco}
            </div>
            <div className="info-item">
              <strong>Disponibilidade:</strong> {doctor.disponibilidade}
            </div>
          </div>

          <Link to={`/agendar/${doctor.id}`} className="schedule-button">
            Agendar Consulta
          </Link>
        </div>

        <div className="doctor-comments">
          <h2>Avaliações de Pacientes</h2>
          <div className="comment-card">
            <div className="comment-header">
              <div className="commenter">Maria S.</div>
              <StarRating rating={5} />
            </div>
            <p>Excelente profissional! Muito atencioso e competente. Recomendo!</p>
          </div>
          <div className="comment-card">
            <div className="comment-header">
              <div className="commenter">João P.</div>
              <StarRating rating={4} />
            </div>
            <p>Bom atendimento, explicou tudo com clareza e paciência.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
