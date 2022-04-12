import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../../service/Options.service";
function MarcasComponents() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(options.urlCarousselMarcas)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <section>
      <div className="marcas__header">
        <p className="marcas__title">Principais marcas</p>
        <a href="#" className="marcas__link">
          Ver todos
        </a>
      </div>
      <div className="marcas">
        <Splide
          options={{
            type: "loop",
            perPage: 6,
            width: 1200,
            breakpoints: {
              1000: {
                autoplay: true,
                perPage: 3,
              },
            },
          }}
        >
          {data.map((item, id) => {
            const { img } = item;
            return (
              <SplideSlide key={id}>
                <div className="marcas__cover">
                  <img className="marcas__img" src={img} />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
export default MarcasComponents;
