import { portfolio } from "../data";

const Portfolio = ({ onOpenModal }) => {
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
          {portfolio.map((item) => (
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
      </div>
    </section>
  );
};

export default Portfolio;
