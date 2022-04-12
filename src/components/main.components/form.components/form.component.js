function Form() {
  return (
    <section className="form">
      <div className="form__coverImg">
        <img
          className="form__img"
          src={
            "https://s3-alpha-sig.figma.com/img/d86c/4325/a4d7026d81c45b86a6259cbd9b78bc54?Expires=1650240000&Signature=hVimCY-8TaR2aVrkQ3AtKYPIYcm5xeRjPAxYQrl8woKPs0aEVcrZo4rYTxmJv8JIllE3jBEVfRLftNrFxREDmD8HXQ9urSII2IE7CHrEuDgYMI~vms93GSi3caF0EZeVmTvtWuVvRUkQzsyPIw8ZqYfUp~cM92fJJ2TZwvmHxpPACEKMSCw~jPQUdITwr6V2ZVV3ZBME~Si3y-8b9xthkovbs~25ktWCFt4LcfKJwdpry1y1rPEAEfsS7QIRwyoV~faExj~tvpUp7nzjbMeurnHyxLBrybbePDkkMEqGdFWBPtReDyt8pDpHNCT7CMPt8UVgoAEpHgqrX7AgoRopAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          }
        />
      </div>
      <div className="form__cover">
        <p className="form__title">
          Se inscreva para receber novidades e promoções
        </p>
        <div className="form__input">
          <div className="form__CoverInputName">
            <input className="form__name" placeholder="Digite seu nome" />
            <img className="form__imgName" src="img/icons/icons-user2.png" />
          </div>
          <div className="form__CoverInputEmail">
            <input className="form__email" placeholder="Digite seu e-mail" />
            <img
              className="form__imgEmail"
              src="./img/icons/icons-secured.png"
            />
          </div>
          <button className="form__bnt">Enviar</button>
        </div>
      </div>
    </section>
  );
}
export default Form;
