import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iniciar from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import PostCard from "paginas/PostsCards";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Menu />

      <Routes>
      <Route path="/" element={<PaginaPadrao />}>
      <Route path="/" element={<Iniciar/>} />
      <Route path="/sobremim" element={<SobreMim/>} />
      </Route>

      <Route path="posts/:id" element={<PostCard />}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
