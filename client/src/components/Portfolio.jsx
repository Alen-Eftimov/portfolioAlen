// import { useState } from "react";
import { portfolio } from "../data";

const Portfolio = ({ onOpenModal }) => {
  // const [showMore, setShowMore] = useState(false);
  // const visiblePortfolio = showMore ? portfolio : portfolio.slice(0, 6);

  const handleOpenModal = (dataTarget) => {
    const id = dataTarget.replace("#", "");
    onOpenModal(id);
  };

  return (
    <section id="portfolio" className="site-section section-portfolio">
      <div className="container">
        <div className="text-center">
          <h3>My recent Works</h3>
          <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        </div>

        <div className="row">
          {/* {visiblePortfolio.map((item) => ( */}
          {portfolio.slice(0, 6).map((item) => (
            <div className="col-md-4 col-xs-6" key={item.id}>
              <div
                className="portfolio-item"
                onClick={() => handleOpenModal(item.data_target)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={item.img}
                  className="img-res img-portfolio-round"
                  alt={item.alt}
                />

                <div className="portfolio-item-info">
                  <h4>{item.title}</h4>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(item.data_target);
                    }}
                  >
                    <span className="glyphicon glyphicon-eye-open" />
                  </button>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="glyphicon glyphicon-link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* {portfolio.length > 6 && (
          <div className="text-center" style={{ marginTop: '20px' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Portfolio;
