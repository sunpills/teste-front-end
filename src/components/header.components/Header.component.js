import { useState } from "react";

function HeaderComponent() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <section>
        <div className="header__coverList">
          <ul className="header__list">
            <li className="header__list__info">
              <img src="./img/icons/icons-shield.png" />
              Comprar <b>100% seguro</b>
            </li>
            <li className="header__list__info">
              <img src="./img/icons/icons-truck.png" />
              <b>Frete gratis</b> acima de R$200
            </li>
            <li className="header__list__info">
              <img src="./img/icons/icons-credit-card.png" />
              <b>Parcele</b> suas compras
            </li>
            <li></li>
          </ul>
          <div className="header__list__logo">
            <img src="./img/ocaoselheir-logo.webp" />
          </div>
        </div>
      </section>
      <section className="header__perfil">
        <div className="header__perfil__logo">
          <img src="./img/ocaoselheir-logo.webp" />
        </div>
        <div className="header__perfil__search">
          <input placeholder="O que você está buscando?"></input>
          <img src="./img/icons/icons-search.png" />
        </div>
        <div className="header__perfil__user">
          <ul>
            <li>
              <a href="#">
                <img className="box" src="img/icons/Group.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="user" src="img/icons/Heart.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="user" src="img/icons/UserCircle.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="user" src="img/icons/ShoppingCart.png" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <nav className="header__navBar">
          <div className="header__navBar__menu" onClick={handleClick}>
            <div className="header__navBar__line1"></div>
            <div className="header__navBar__line2"></div>
            <div className="header__navBar__line3"></div>
          </div>
          <ul
            className={
              click ? "header__navBar__list active" : "header__navBar__list"
            }
          >
            <li onClick={closeMobileMenu}>
              <a href="#">brincar</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">morder</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">comer</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">passear</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">casa e conforto</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">educação</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">ofertas</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#"><img className="fashion" src="img/icons/Vector-Crown.png" /> coleção de outono</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default HeaderComponent;
