import './StarRating.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={`star ${index < rating ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;