import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../../service/Options.service";

function BlogComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(options.urlCarousselBlogs)
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <section>
      <p className="blog__title">Confira o nosso Blog</p>
      <div className="blog">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            width: 1200,
          }}
        >
          {data.map((item, id) => {
            const { img, title, description } = item;
            return (
              <SplideSlide key={id}>
                <div className="blog__cover">
                  <img className="blog__img" src={img} />

                  <div className="blog__info">
                    <p className="blog__subTitle">{title}</p>
                    <p className="blog__description">{description}</p>
                    <div className="blog__linkCover">
                      <a href="#" className="blog__link">
                        Ler artigo
                      </a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
export default BlogComponent;
