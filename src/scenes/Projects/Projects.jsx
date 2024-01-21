import s from './Projects.module.scss';
import projects from '../../data/projects';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          Mis Proyectos <strong className={s.purple}>Aqui</strong>
        </h1>
        <p className={s.subtitle}>
          En esta Secion podras ver mis proyecto realizados 
          independientemene 
        </p>

        <ul className={s.projects}>
          {projects.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
