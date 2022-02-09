import {
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import Login from "./pages/Login";
import CadastroPasso1 from "./pages/Cadastro/CadastroPasso1";
import CadastroPasso2 from "./pages/Cadastro/CadastroPasso2";
import EsqueceuPasso1 from "./pages/EsqueceuSenha/EsqueceuSenhaPasso1";
import EsqueceuPasso2 from "./pages/EsqueceuSenha/EsqueceuSenhaPasso2";
import EsqueceuPasso3 from "./pages/EsqueceuSenha/EsqueceuSenhaPasso3";
import EsqueceuPasso4 from "./pages/EsqueceuSenha/EsqueceuSenhaPasso4";
import HomePaciente from "./pages/HomePacientes";

function App(){

    return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/create" element={<CadastroPasso1 />} />
              <Route path="/create-address" element={<CadastroPasso2 />}/>
              <Route path="/identify" element={<EsqueceuPasso1 />}/>
              <Route path="/identify/recover" element={<EsqueceuPasso2 />}/>
              <Route path="/identify/recover/authentic" element={<EsqueceuPasso3 />}/>
              <Route path="/identify/recover/authentic/new-password" element={<EsqueceuPasso4 />}/>
            </Routes>
          <Routes>
            <Route path="/home-paciente" element={<HomePaciente />}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;