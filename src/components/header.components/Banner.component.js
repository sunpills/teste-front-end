import { useEffect, useState } from "react";
import options from "../../service/Options.service";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function BannerComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(options.urlCarousselApi)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <section className="banner">
      <Splide
        options={{
          type: "loop",
        }}
      >
        {data.map((item) => {
          const { id, img, title } = item;
          return (
            <SplideSlide key={id}>
              <div className="banner__img">
                <span className="banner__shadow"></span>
                <img src={img} />
              </div>
              <div className="banner__cover">
                <h1 className="banner__cover__title">{title}</h1>
                <a href="#">Confira</a>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="banner__show__cover">
        <span className="banner__show">
          <a href="#">
            <img src="img/icons/icons-arrow.png" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default BannerComponent;
