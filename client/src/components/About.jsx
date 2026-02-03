const About = () => {
  return (
    <section id="about" className="site-section section-about text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>About</h2>
            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            <p>
              Hello! I'm Alen, a Full Stack developer and a trained Electrical
              engineer in the field of Telecommunications with more than 10
              years of professional experience in various technical fields. I
              was constantly able to fulfil my work on time and to adhere to
              very high quality standards. In 2019, I decided to switch my
              career path to embrace programming, which always used to be my
              goal, by joining a full stack web development course at DCI based
              on the MERN Stack. I am looking forward to applying my work ethic
              and analytic abilities that I developed in my career in the field
              of web development.
            </p>
            <a
              href="./assets/img/alen_eftimov_CV.pdf"
              className="btn btn-fill"
              target="_blank"
              download
            >
              Download my cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
