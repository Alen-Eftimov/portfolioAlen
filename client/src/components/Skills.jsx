import { useEffect, useRef, useState } from "react";
import { skills } from "../data";
import { chunkArray } from "../easeInOutExpo";

const Skills = () => {
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionPosition = sectionRef.current.offsetTop;

        if (scrollPosition > sectionPosition) {
          setAnimateBars(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBarStyle = (level) => ({
    width: animateBars ? `${level}%` : "0%",
    transition: "width 1s ease-in-out",
  });

  const columns = chunkArray(skills, 4);

  return (
    <section className="site-section section-skills" ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <h3>My Skills</h3>
          <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        </div>
        <div className="row">
          {columns.map((columnSkills, colIndex) => (
            <div className="col-md-4" key={colIndex}>
              {columnSkills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <h4>{skill.name}</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={getBarStyle(skill.level)}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
