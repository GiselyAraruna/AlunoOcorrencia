import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    localStorage.setItem("matricula", matricula);
    localStorage.setItem("senha", senha);
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh",
      padding: "2rem"
    }}>
      <div id="root">
        <h2>Cadastro</h2>
        <form onSubmit={handleCadastro} className="login-card">
          <div style={{ width: "100%" }}>
            <label>Matrícula/Usuário/E-mail:</label>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
