import Contato from "./Contato.component";
import Copy from "./Copy.component";
import FormaPagamento from "./FormaPagamento.component";
import SobreNos from "./SobreNos.component";

function FooterIndexComponent() {
  return (
    <div className="footer">
      <SobreNos />
      <div className="footer__cover">
        <Contato />
        <FormaPagamento />
        <Copy />
      </div>
    </div>
  );
}
export default FooterIndexComponent;
