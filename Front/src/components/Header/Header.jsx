import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">MedCare</Link>
        
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar médicos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Buscar</button>
        </form>
        
        <Link to="/menu" className="profile-icon">
          <div className="profile-circle"></div>
        </Link>
      </div>
    </header>
  );
};

export default Header;