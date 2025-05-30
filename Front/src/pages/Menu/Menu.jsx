import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="container">
        <div className="user-profile">
          <div className="user-avatar"></div>
          <h2>Usuário</h2>
          <p>usuario@email.com</p>
        </div>
        
        <div className="menu-options">
          <div className="menu-section">
            <h3>Conta</h3>
            <ul>
              <li><button className="menu-button">Editar Perfil</button></li>
              <li><button className="menu-button">Minhas Consultas</button></li>
              <li><button className="menu-button">Histórico Médico</button></li>
              <li><button className="menu-button">Métodos de Pagamento</button></li>
            </ul>
          </div>
          
          <div className="menu-section">
            <h3>Configurações</h3>
            <ul>
              <li><button className="menu-button">Notificações</button></li>
              <li><button className="menu-button">Privacidade</button></li>
              <li><button className="menu-button">Ajuda e Suporte</button></li>
              <li><button className="menu-button">Sobre o MedCare</button></li>
            </ul>
          </div>
          
          <button className="logout-button">Sair</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;