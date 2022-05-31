import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from "./pages/login/login/index";
import { CadastroPasso1 } from "./pages/login/cadastroPasso1/index";
import { CadastroPasso2 } from "./pages/login/cadastroPasso2/index";
import { EsqueceuPasso1 } from "./pages/login/esqueceuSenhaPasso1/index";
import { EsqueceuPasso2 } from "./pages/login/esqueceuSenhaPasso2/index";
import { EsqueceuPasso3 } from "./pages/login/esqueceuSenhaPasso3/index";
import { EsqueceuPasso4 } from "./pages/login/esqueceuSenhaPasso4/index";

import { HomePaciente } from "./pages/paciente/home/index";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<CadastroPasso1 />} />
        <Route path="/create-address" element={<CadastroPasso2 />} />
        <Route path="/identify" element={<EsqueceuPasso1 />} />
        <Route path="/identify/recover" element={<EsqueceuPasso2 />} />
        <Route path="/identify/recover/authentic" element={<EsqueceuPasso3 />} />
        <Route path="/identify/recover/authentic/new-password" element={<EsqueceuPasso4 />} />
      </Routes>
      <Routes>
        <Route path="/home-paciente" element={<HomePaciente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;