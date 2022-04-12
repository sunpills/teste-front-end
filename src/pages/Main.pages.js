import CategoriasLojaIndex from "../components/main.components/categoriaLoja.components/CategoriasLojaIndex.component";
import IndexForm from "../components/main.components/form.components/indexForm.component";
import MarcasParceriasIndex from "../components/main.components/marcasParcerias.components/MarcasParceriasIndex.component";
import SocialBlog from "../components/main.components/socialBlog.components/indexSocialBlog.component";

function MainPages() {
  return (
    <>
      <CategoriasLojaIndex />
      <MarcasParceriasIndex />
      <SocialBlog />
      <IndexForm />
    </>
  );
}

export default MainPages;
