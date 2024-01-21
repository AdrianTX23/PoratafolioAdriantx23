import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromoImg from '../../assets/about-promo.svg';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              ¿Quien  <b className={s.purple}>Soy?</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Habilidades <b className={s.purple}>Profesionales</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          Codigos por  <b className={s.purple}>Dia</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
