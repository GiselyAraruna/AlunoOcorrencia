import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./componentes/Login.jsx";
import Cadastro from "./componentes/Cadastro";
import RegistrarOcorrencia from "./componentes/RegistrarOcorrencia";
import RegistrosOcorrencias from "./componentes/RegistrosOcorrencias";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px", padding: "10px", color: "white" }}>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/registrar-ocorrencia">Ocorrência</Link>
        <Link to="/registros-ocorrencias">Registros da Ocorrências</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/registrar-ocorrencia" element={<RegistrarOcorrencia />} />
         <Route path="/registros-ocorrencias" element={<RegistrosOcorrencias />} />
      </Routes>
    </Router>
  );
}

export default App;
