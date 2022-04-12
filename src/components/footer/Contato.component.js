function Contato() {
  return (
    <section className="contato">
      <div className="contato__coverSocio">
        <ul>
          <li>
            <a href="#" className="contato__assinatura">
              Assinatura
            </a>
          </li>
          <li>
            <a href="#" className="contato__parceiros">
              Parceiros
            </a>
          </li>
        </ul>
      </div>
      <div className="institucional">
        <p className="institucional__title">Institucional</p>
        <ul className="institucional__list">
          <li>
            <a href="#">Quem somos</a>
          </li>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
          <li>
            <a href="#">Política comercial</a>
          </li>
          <li>
            <a href="#">Política de devolução</a>
          </li>
          <li>
            <a href="#">Regras de frete</a>
          </li>
        </ul>
      </div>
      <div className="atendimento">
        <p className="atendimento__title">Atendimento</p>
        <ul className="atendimento__list">
          <li>
            <p>Fale conosco</p>
          </li>
          <li className="atendimento__tel">
            <img src="img/icons/fi_phone.png" />
            <p>(11)97212-1314</p>
          </li>
          <li>
            <p>ocaoselheiro@ocaoselheiro.com.br</p>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Contato;
