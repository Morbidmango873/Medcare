import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  return (
    <Link to={`/medico/${doctor.id}`} className="doctor-card">
      <div className="doctor-avatar"></div>
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.nome}</h3>
        <p className="doctor-specialty">{doctor.Especialidade}</p>
        <StarRating rating={doctor.rating} />
      </div>
    </Link>
  );
};

export default DoctorCard;