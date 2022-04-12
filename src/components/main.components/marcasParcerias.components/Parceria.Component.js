import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../../service/Options.service";

function ParceriaComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(options.urlCarousselParceiros)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <div className="parceiros">
      <Splide
        options={{
          type: "loop",
          width: 600,
          breakpoints: {
            1000: {
              width: false,
            },
          },
        }}
      >
        {data.map((item, id) => {
          const { img, title, description } = item;
          return (
            <SplideSlide key={id}>
              <section className="parceiros__carousel">
                <span className="parceiros__gradient"></span>
                <img className="parceiros__img" src={img} />
                <div className="parceiros__info">
                  <p className="parceiros__title">{title}</p>
                  <p className="parceiros__description">{description}</p>
                  <a href="#" className="parceiros__confira">
                    Confira
                  </a>
                </div>
              </section>
            </SplideSlide>
          );
        })}
      </Splide>
      <section className="assinatura">
        <div className="assinatura__cover">
          <div className="assinatura__info">
            <p className="assinatura__title">Assinatura Cãoselheiro</p>
            <p className="assinatura__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              adipiscing quis non sed.
            </p>
            <a href="#" className="assinatura__link">
              Saiba mais
            </a>
          </div>
          <div>
            <img
              className="assinatura__img"
              src={
                "https://s3-alpha-sig.figma.com/img/648a/5a0f/22561a658b30476d3512307592e2852f?Expires=1650240000&Signature=Antg7WUhwEo~l-kdO-su-XVwDhTUodUcEi6x~0N92Jf8iZrhdl8DrIYDgvfPqU9C0Xj4ahnpa~fP7gBcE05BnGqeg3LhElMr4osWdikTzfTwEu6E-F7hewkS59uTncSs2IOTk-4cWfn6SoCE3Y3bddjpm0fWwAtZ1iYGHzvX7Duf5AFhvLibxeb2kZzlkggZAszF7B0WvuIGLXakSEXtG8SKz~0nXvPYoazyiaNp1n3Ygde2hgOrEMzIsMaqqQN2cH-U1CuFS9o4eAtYOADb5cph7JmabS2DsJ-0-g2ZI9jeiiWWsa0dlge-yLwczBtn~h0CBONcKGH-vf-3811E6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default ParceriaComponent;
