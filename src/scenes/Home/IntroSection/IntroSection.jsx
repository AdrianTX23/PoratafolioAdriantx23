import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            PERMITEME<span className={s.purple}> PRESENTARME </span>{' '}
            
          </h1>

          <div className={s.description}>
            <p>
              Soy  Ingeniero de sistemas - Desarrollador Front End <br />
              Con Experiencia en Desarrollo de paginas web, Desarrollo Mobil Android
            </p>

            <p>
              Mis Habilidades Incluyen {' '}
              <i>
                <b className={s.purple}>
                  Html, React, JavaScript,
                </b>
              </i>
              <br />
               Desarrollo de aplicasiones con realidad aumentada
               con Unity, <br />
               Desarrollo de aplicasiones mobiles con xamarin form
            </p>

            <p>
              My campo de interes es la construccion De
              <i>
                <b className={s.purple}>  Nuevas tecnologias y productos</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Redes Sociales</h1>
        <p>
          Ponte en  <span className={s.purple}> contacto</span> con
          Migo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/vsnaichuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/volodymyr-snaichuk-74a389124/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
