import { handleClick } from "../easeInOutExpo";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Alen Eftimov</h1>
            <div className="page-scroll" onClick={handleClick}>
              <p className="job-title">Full Stack Web Developer</p>
              <a href="#contact" className="btn btn-fill ">
                Hire me
              </a>
              <div className="clearfix visible-xxs"></div>
              <a href="#portfolio" className="btn btn-border">
                Explore more
              </a>
            </div>
          </div>

          <div className="col-md-6 text-right">
            <img src="assets/img/alen5.png" alt="alen-eftimov" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
