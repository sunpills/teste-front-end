import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import options from "../../../service/Options.service";
import Modal from "./Modal.component";

function LojaComponent() {
  const [userData, setUserData] = useState();
  const [useModal, setUseModal] = useState("");
  const [productModal, setProductModal] = useState("");
  const [categorySelected, setCategorySelected] = useState("É agitado");

  const categorySelectedHandler = (category) => {
    return categorySelected === category ? "active" : "";
  };
  const callCategory = (e, category) => {
    e.preventDefault();
    setCategorySelected(category);
  };

  const showModal = (p) => {
    setUseModal("show");
    setProductModal(p);
  };

  const hiddenModal = () => {
    setUseModal("");
    setProductModal("");
  };
  useEffect(() => {
    fetch(options.urlCarousselLoja)
      .then((response) => response.json())
      .then(setUserData)
      .catch((err) => {
        console.log("Ocorreu um erro!" + err);
      });
  }, []);

  return (
    <section className="loja">
      <div className="loja__coverTitle">
        <p className="loja__title">Meu Cachorro...</p>
        <Splide
          options={{
            width: 650,
            type: "loop",
          }}
        >
          <SplideSlide>
            <ul className="loja__list">
              <li>
                <a
                  className={`loja__category ${categorySelectedHandler(
                    "É agitado"
                  )}`}
                  onClick={(e) => callCategory(e, "É agitado")}
                  href="#"
                >
                  É agitado
                </a>
              </li>
              <li>
                <a
                  className={`loja__category ${categorySelectedHandler(
                    "Morde"
                  )}`}
                  onClick={(e) => callCategory(e, "Morde")}
                  href="#"
                >
                  Morde
                </a>
              </li>
              <li>
                <a
                  className={`loja__category ${categorySelectedHandler(
                    "Late muito"
                  )}`}
                  onClick={(e) => callCategory(e, "Late muito")}
                  href="#"
                >
                  Late muito
                </a>
              </li>
              <li>
                <a
                  className={`loja__category ${categorySelectedHandler(
                    "É ansioso"
                  )}`}
                  onClick={(e) => callCategory(e, "É ansioso")}
                  href="#"
                >
                  É ansioso
                </a>
              </li>
              <li>
                <a
                  className={`loja__category ${categorySelectedHandler(
                    "É estressado"
                  )}`}
                  onClick={(e) => callCategory(e, "É estressado")}
                  href="#"
                >
                  É estressado
                </a>
              </li>
            </ul>
          </SplideSlide>
        </Splide>
      </div>
      <div className="main">
        <Splide
          className="slide"
          options={{
            perPage: 4,
            type: "loop",
            width: 1200,
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
            breakpoints: {
              1000: {
                perPage: 2,
                autoplay: true,
              },
            },
          }}
        >
          {userData?.products.map((product, index) => (
            <SplideSlide key={index}>
              <div
                className="itens"
                onClick={() => {
                  showModal(product);
                }}
              >
                <figure className="itens__cover">
                  <div className="itens__coverImg">
                    <img className="itens__img" src={product?.photo} />
                  </div>
                  <div className="itens__detail">
                    <p className="itens__discount">40% OFF</p>
                    <img
                      className="itens__favorite"
                      src="img/icons/icons-heart.png"
                    />
                  </div>
                  <figcaption className="itens__info">
                    <p className="itens__title">{product?.productName}</p>
                    <p className="itens__pricePrev">De R$ 96,69</p>
                    <p className="itens__price">Por R$ 90,69</p>
                    <p className="itens__priceSub">
                      {product?.price}{" "}
                      <p className="itens__inscrito">Para assinantes</p>
                    </p>
                  </figcaption>
                  <div className="itens__addCover">
                    <a href="#" className="itens__add">
                      Adicionar
                    </a>
                  </div>
                </figure>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <a href="#" className="loja__link">
        Ver todos
      </a>
      <Modal show={useModal} hidden={hiddenModal} data={productModal} />
    </section>
  );
}

export default LojaComponent;
