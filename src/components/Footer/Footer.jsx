import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Programado ✅ Por Adrian Pico- Pickmaker</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://wa.me/573004307905?text=Hola%20Adrian,%20Acabo%20de%20ver%20tu%20Portafolio%20me%20encanto%20mucho%20"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adrian-gabriel-pico-martinez-68a25b210/?originalSubdomain=co"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
