import styles from './SkillsStyles.module.css';
import reactIcon from '../../assets/react-icon.svg';
import htmlIcon from '../../assets/html-logo.svg';
import angularIcon from '../../assets/angular-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import nodejsIcon from '../../assets/nodejs-icon.svg';
import gitIcon from '../../assets/git-icon.svg';
import reduxIcon from '../../assets/redux-icon.svg';
import viteIcon from '../../assets/vite-icon.svg';
import bootstrapIcon from '../../assets/bootstrap-icon.svg';
import javascriptIcon from '../../assets/javascript-icon.svg';
import jupyterIcon from '../../assets/jupyter-icon.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmlIcon} skill="HTML" />
        <SkillList src={cssIcon} skill="CSS" />
        <SkillList src={javascriptIcon} skill="JavaScript" />
        <SkillList src={nodejsIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={angularIcon} skill="Angular" />
        <SkillList src={reduxIcon} skill="Redux" />
        <SkillList src={bootstrapIcon} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={viteIcon} skill="Vite" />
        <SkillList src={gitIcon} skill="Git" />
        <SkillList src={jupyterIcon} skill="Jupyter" />
      </div>
    </section>
  );
}

export default Skills;
