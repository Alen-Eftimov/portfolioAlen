import { useEffect } from "react";
import { modal } from "../data";

const Modal = ({ activeId, onClose }) => {
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeId]);

  return (
    <>
      {modal.map((item) => {
        const isOpen = item.id === activeId;

        return (
          <div
            id={item.id}
            key={item.id}
            className={`modal fade ${isOpen ? "in" : ""}`}
            role="dialog"
            style={{ display: isOpen ? "block" : "none" }}
            onClick={onClose}
          >
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={onClose}>
                    <span className="glyphicon glyphicon-remove" />
                  </button>
                  <img className="img-res" src={item.img} alt={item.alt} />
                </div>

                <div className="modal-body">
                  <h4 className="modal-title">{item.title}</h4>
                  <p>{item.description_1}</p>
                  <h3>{item.subtitle}</h3>

                  {Array.isArray(item.description_2) ? (
                    <ul className="modal-list">
                      {item.description_2.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description_2}</p>
                  )}
                </div>

                <div className="modal-footer">
                  <a
                    href={item.href}
                    className="btn btn-fill"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Modal;
