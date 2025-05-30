import './Emergency.css';

const Emergency = () => {
  return (
    <div className="emergency-page">
      <div className="container">
        <h1>Atendimento de Emergência</h1>
        <div className="emergency-map">
          {/* Placeholder for map */}
          <div className="map-placeholder">
            <p>Mapa de Unidades de Emergência</p>
          </div>
        </div>
        <div className="emergency-info">
          <h2>Locais Próximos de Atendimento</h2>
          <div className="emergency-locations">
            <div className="location-card">
              <h3>Hospital Santa Clara</h3>
              <p>Av. Principal, 1000</p>
              <p>2.5 km de distância</p>
              <button className="directions-button">Como Chegar</button>
            </div>
            <div className="location-card">
              <h3>Pronto Socorro Central</h3>
              <p>Rua das Flores, 500</p>
              <p>3.8 km de distância</p>
              <button className="directions-button">Como Chegar</button>
            </div>
            <div className="location-card">
              <h3>UPA 24h Zona Norte</h3>
              <p>Av. dos Estados, 750</p>
              <p>5.2 km de distância</p>
              <button className="directions-button">Como Chegar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;