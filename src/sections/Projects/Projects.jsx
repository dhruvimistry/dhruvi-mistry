import styles from './ProjectsStyles.module.css';
import calculatorImg from '../../assets/gpa-calculator.png';
import loginPgImg from '../../assets/login-page.png';
import serveTogetherImg from '../../assets/serve-together.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={calculatorImg}
          link="https://github.com/dhruvimistry/GTU-Calculator"
          h3="SPI & CPI Calculator"
          p="Grade Calculator"
        />
        <ProjectCard
          src={loginPgImg}
          link="https://github.com/dhruvimistry/Login-Page"
          h3="Login Page"
          p="With Password Strength check"
        />
        <ProjectCard
          src={serveTogetherImg}
          link="https://github.com/dhruvimistry/Serve-Together"
          h3="Serve Together"
          p="Connecting Volunteers and NGOs"
        />
      </div>
    </section>
  );
}

export default Projects;
