import { useEffect, useState } from "react";
import { handleScrollToTop } from "../easeInOutExpo";

const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer id="colophon" className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <a
              className="icon linkedin-bg"
              href="https://www.linkedin.com/in/eftimov-alen"
            >
              <i className="icon-linkedin"></i>
            </a>
            <a
              className="icon github-circled-bg"
              href="https://github.com/Alen-Eftimov"
            >
              <i className="icon-github-circled"></i>
            </a>
            <a
              className="icon xing-bg"
              href="https://www.xing.com/profile/Alen_Eftimov3/cv"
            >
              <i className="icon-xing"></i>
            </a>
          </div>
          <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
            <p className="copyright">&copy; Copyright {year} Alen Eftimov</p>
          </div>
          <div className="col-sm-4 col-xs-3">
            <div className="text-right page-scroll">
              <btn
                className="icon icon-up-bg"
                href="#hero"
                onClick={handleScrollToTop}
              >
                <i className="icon-up" />
              </btn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
