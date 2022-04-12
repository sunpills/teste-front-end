function Modal(props) {
  return (
    <>
      <div
        className={"modal__overlayer " + props.show}
        onClick={props.hidden}
      ></div>
      <div className={"modal__content " + props.show}>
        <div className="close">
          <a onClick={props.hidden}>X</a>
        </div>
        <div className="modal__cover">
          <div>
            <img className="modal__img" src={props.data.photo} />
          </div>
          <div className="modal__info">
            <ul>
              <li>
                <p className="modal__title">{props.data.productName}</p>
              </li>
              <li>
                <p className="modal__price">R${props.data.price}</p>
              </li>
              <li>
                <p className="modal__description">
                  {props.data.descriptionShort}
                </p>
              </li>
              <li>
                <a className="modal__link" href="#">
                  Veja mais detalhes do produto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
