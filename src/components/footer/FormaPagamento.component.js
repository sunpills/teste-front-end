function FormaPagamento() {
  return (
    <section className="formaPagamento">
      <div className="card">
        <p className="card__title">Formas de pagamento</p>
        <ul className="card__list">
          <li>
            <img src="img/icons/Group-826.png" />
          </li>
        </ul>
      </div>
      <div className="security">
        <p className="security__title">Segurança</p>
        <img className="security__img" src="./img/icons/Group-830.png" />
      </div>
      <span className="span__bottom"></span>
    </section>
  );
}
export default FormaPagamento;
