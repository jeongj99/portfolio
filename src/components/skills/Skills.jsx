import "./skills.css";
import Languages from "./Languages";
import SystemsAndDatabases from "./SystemsAndDatabases";
import FrameworkAndLibraries from "./FrameworkAndLibraries";
import Testing from "./Testing";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">
        Skills
      </h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Languages />
        <FrameworkAndLibraries />
        <SystemsAndDatabases />
        <Testing />
      </div>
    </section>
  );
};

export default Skills;