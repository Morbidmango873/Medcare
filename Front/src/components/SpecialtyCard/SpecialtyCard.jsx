import { Link } from 'react-router-dom';
import './SpecialtyCard.css';

const SpecialtyCard = ({ specialty }) => {
  return (
    <Link
      to={`/area/${specialty.slug}`}
      className="specialty-card"
      style={{ backgroundImage: `url(${specialty.img})` }}
    >
      <div className="overlay">
        <h3 className="specialty-name">{specialty.name}</h3>
      </div>
    </Link>
  );
};

export default SpecialtyCard;
