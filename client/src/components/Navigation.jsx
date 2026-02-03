import { useEffect, useState } from "react";
import { handleClick, handleScrollToTop } from "../easeInOutExpo";

const Navigation = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentActiveSection, setCurrentActiveSection] = useState("");

  const handleToggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    const getActiveSection = () => {
      const sections = ["hero", "about", "service", "portfolio", "contact"];
      let currentSection = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { offsetTop, clientHeight } = sectionElement;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + clientHeight
          ) {
            currentSection = section;
          }
        }
      });
      return currentSection;
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setCurrentActiveSection(getActiveSection());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const interpolate = (min, max, value) => {
    return Math.min(Math.max(value, min), max);
  };

  const maxScroll = 962;
  const normalizedScroll = scrollY / maxScroll;

  const backgroundAlpha = interpolate(
    0,
    1,
    Math.min(normalizedScroll * 1.1, 1),
  );
  const paddingValue = `${interpolate(10, 30, 30 - normalizedScroll * 30)}px 0`;
  const boxShadowAlpha = interpolate(
    0,
    0.2,
    Math.min(normalizedScroll * 0.22, 1),
  );

  const headerStyle = {
    background: `rgba(255, 255, 255, ${backgroundAlpha})`,
    padding: paddingValue,
    boxShadow: `0px 0px 20px 6px rgba(0, 0, 0, ${boxShadowAlpha})`,
  };

  return (
    <header
      id="masthead"
      className="site-header"
      data-anchor-target=".hero"
      data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
      data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
      style={headerStyle}
    >
      <nav id="primary-navigation" className="site-navigation">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className={`navbar-toggle ${isMenuActive ? "act" : ""} collapsed`}
              onClick={handleToggleMenu}
              data-target="#portfolio-perfect-collapse"
              aria-expanded="false"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <btn href="#hero" className="site-logo" onClick={handleScrollToTop}>
              <img src="assets/img/logo.png" alt="logo" />
            </btn>
          </div>
          {/* <!-- /.navbar-header --> */}
          <div
            className={`main-menu ${isMenuActive ? "act" : ""}`}
            id="portfolio-perfect-collapse"
          >
            <ul className="nav navbar-nav navbar-right" onClick={handleClick}>
              <li
                className={`page-scroll ${currentActiveSection === "hero" ? "active" : ""}`}
              >
                <a href="#hero">Home</a>
              </li>
              {["about", "service", "portfolio", "contact"].map(
                (section, index) => (
                  <li
                    key={index}
                    className={`page-scroll ${currentActiveSection === section ? "active" : ""}`}
                  >
                    <a href={`#${section}`}>{section}</a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
