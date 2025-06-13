import SpecialtyCard from '../../components/SpecialtyCard/SpecialtyCard';
import './Specialties.css';
import ImgCardio from "../../img/Cardiologia.png";
import ImgOrtopedia from "../../img/Ortopedia.png";
import ImgPediatria from "../../img/Pediatria.jpg";
import ImgDermatologia from "../../img/Dermatologia.png";
import ImgNeuro from "../../img/Neurologia.png";
import ImgOftalmo from "../../img/Ofta.png";
import ImgGineco from "../../img/Ginecologia.png";
import ImgUrologia from "../../img/Urologia.png";
import ImgPsico from "../../img/Psiquiatria.png";
import ImgOtorrino from "../../img/Otorrinolaringologia.png";
import ImgEndocrino from "../../img/Endocrinologia.png";
import ImgGastro from "../../img/Gastroenterologia.jpg";

const allSpecialties = [
  { id: 1, name: 'Cardiologia', slug: 'cardiologia', img: ImgCardio },
  { id: 2, name: 'Ortopedia', slug: 'ortopedia', img: ImgOrtopedia },
  { id: 3, name: 'Pediatria', slug: 'pediatria', img: ImgPediatria },
  { id: 4, name: 'Dermatologia', slug: 'dermatologia', img: ImgDermatologia },
  { id: 5, name: 'Neurologia', slug: 'neurologia', img: ImgNeuro },
  { id: 6, name: 'Oftalmologia', slug: 'oftalmologia', img: ImgOftalmo },
  { id: 7, name: 'Ginecologia', slug: 'ginecologia', img: ImgGineco },
  { id: 8, name: 'Urologia', slug: 'urologia', img: ImgUrologia },
  { id: 9, name: 'Psiquiatria', slug: 'psiquiatria', img: ImgPsico },
  { id: 10, name: 'Otorrinolaringologia', slug: 'otorrinolaringologia', img: ImgOtorrino },
  { id: 11, name: 'Endocrinologia', slug: 'endocrinologia', img: ImgEndocrino },
  { id: 12, name: 'Gastroenterologia', slug: 'gastroenterologia', img: ImgGastro },
];


const Specialties = () => {
  return (
    <div className="specialties-page">
      <div className="container">
        <h1>Todas as Especialidades</h1>
        <p className="page-description">
          Explore todas as especialidades médicas disponíveis no MedCare
        </p>
        
        <div className="specialties-full-grid">
          {allSpecialties.map(specialty => (
            <SpecialtyCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;