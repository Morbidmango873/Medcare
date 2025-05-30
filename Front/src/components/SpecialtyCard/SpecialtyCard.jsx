import { Link } from 'react-router-dom';
import './SpecialtyCard.css';

const SpecialtyCard = ({ specialty }) => {
  return (
    <Link to={`/area/${specialty.slug}`} className="specialty-card">
      <div className="specialty-icon"></div>
      <h3 className="specialty-name">{specialty.name}</h3>
    </Link>
  );
};

export default SpecialtyCard;