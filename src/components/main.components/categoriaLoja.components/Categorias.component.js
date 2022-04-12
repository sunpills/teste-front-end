import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../../service/Options.service";

function CategoriasComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(options.urlCarousselCategorias)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <>
      <section>
        <h2 className="title">Categorias</h2>
        <div className="categoria">
          <Splide
            options={{
              type: "loop",
              perPage: 4,
              width: 1200,
              breakpoints: {
                1000: {
                  perPage: 2,
                  autoplay: true,
                },
              },
            }}
          >
            {data.map((item) => {
              const { id, img, title } = item;
              return (
                <SplideSlide key={id}>
                  <div className="categoria__cover">
                    <ul className="categoria__imgCover">
                      <li className="categoria__list">
                        <img className="categoria__img" src={img} />
                      </li>
                    </ul>
                    <p className="categoria__title">{title}</p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </section>
    </>
  );
}

export default CategoriasComponent;
