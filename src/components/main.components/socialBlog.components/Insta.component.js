import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../../service/Options.service";

function InstaComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(options.urlCarousselInsta)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <section>
      <div className="insta__cover">
        <p className="insta__title">Instagram</p>
        <a className="insta__link" href="#">
          + Seguir
        </a>
      </div>

      <div className="insta">
        <Splide
          options={{
            type: "loop",
            perPage: 6,
            breakpoints: {
              1000: {
                perPage: 3,
                autoplay: true,
              },
            },
          }}
        >
          {data.map((item, id) => {
            const { img } = item;
            return (
              <SplideSlide key={id}>
                <div>
                  <img className="insta__img" src={img} />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
export default InstaComponent;
