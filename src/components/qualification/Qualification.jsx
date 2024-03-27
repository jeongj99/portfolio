import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">
        Qualification
      </h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={`qualification__button button--flex ${toggleState === 1 ? "qualification__active" : ""}`} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div className={`qualification__button button--flex ${toggleState === 2 ? "qualification__active" : ""}`} onClick={() => toggleTab(2)} >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={`qualification__content ${toggleState === 1 ? "qualification__content-active" : ""}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Cloud Computing Technologies</h3>
                <span className="qualification__subtitle">George Brown College</span>
                <div className="qualification__timeline">
                  <i className="uil uil-calendar-alt" /> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diploma Full-Stack Web Development</h3>
                <span className="qualification__subtitle">Lighthouse Labs</span>
                <div className="qualification__timeline">
                  <i className="uil uil-calendar-alt" /> 2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Honours Bachelor of Sciences</h3>
                <span className="qualification__subtitle">University of Toronto</span>
                <div className="qualification__timeline">
                  <i className="uil uil-calendar-alt" /> 2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div className={`qualification__content ${toggleState === 2 ? "qualification__content-active" : ""}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-Stack Web Developer</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__timeline">
                  <i className="uil uil-calendar-alt" /> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Field Sales Representative</h3>
                <span className="qualification__subtitle">Quartermaster</span>
                <div className="qualification__timeline">
                  <i className="uil uil-calendar-alt" /> 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sales Associate</h3>
                <span className="qualification__subtitle">Eataly Toronto</span>
                <div className="qualification__timeline">
                  <i className="uil uil-calendar-alt" /> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;