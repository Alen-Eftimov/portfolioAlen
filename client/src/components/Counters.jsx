import { useEffect, useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = document.getElementById("infinity").offsetTop;

      if (window.scrollY > offset - 1000 && !hasCounted) {
        setHasCounted(true);

        const interval = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasCounted]);

  return (
    <section className="site-section section-counters text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <p
              id="infinity"
              className="counter"
              data-from="0"
              data-to="1"
              data-speed="1000"
            >
              {count}
            </p>
            <h4>
              Seconds on this site!
              <br />
              What are you waiting for?
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
