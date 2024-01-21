import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hola A todos, Soy{' '}
        <span className={s.purple}> Adrian Pico   </span>
        Soy De<span className={s.purple}> Barranquilla, Colombia.</span>
        <br />
       Ingeniero de Sistemas en Experiencia en Desarrollo multiplataforma{' '}
        <br />
        Usando React .
        <br />
        <br />
         Tengo un Minor en Ingenieria de Software De la Universidad Simon Bolivar
        <br />
         Certificado en Power BI y Excel Avanzado De la Academia Udemy y Grupo Ninja.
        <br />
        <br />
        Ademas de Programar, ¡hay otras actividades que me encanta hacer!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Jugar Videojuegos
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Leer 
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Viajar
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
