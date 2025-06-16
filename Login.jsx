import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuarioEmail, setUsuarioEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const navigate = useNavigate();

  const matriculaCadastrada = localStorage.getItem("matricula");
  const senhaCadastrada = localStorage.getItem("senha");

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuarioEmail !== matriculaCadastrada) {
      setMensagemErro("Matrícula/Usuário/E-mail não encontrado!");
    } else if (senha !== senhaCadastrada) {
      setMensagemErro("Senha incorreta!");
    } else {
      alert("Login realizado com sucesso!");
      navigate("/registrar-ocorrencia");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#e8f1f2", // NOVO background
        color: "#13293d", // NOVA cor do texto
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#e8f1f2", // caixa branca pra contraste
          color: "#13293d",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "10px" }}>
            <label>Matrícula/Usuário/E-mail:</label>
            <input
              type="text"
              value={usuarioEmail}
              onChange={(e) => setUsuarioEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1.5px solid #ccc",
                outline: "none",
                boxSizing: "border-box",
                color: "#13293d", // NOVA cor do texto
                backgroundColor: "#e8f1f2", // fundo input
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1.5px solid #ccc",
                outline: "none",
                boxSizing: "border-box",
                color: "#13293d",
                backgroundColor: "#e8f1f2",
              }}
            />
          </div>

          <button id="btn" type="submit" style={{ width: "100%" }}>
            Entrar
          </button>
        </form>

        {mensagemErro && (
          <p style={{ color: "red", marginTop: "12px" }}>{mensagemErro}</p>
        )}
      </div>

      <style>{`
        button {
          --blue: #1b98e0; /* NOVA cor azul */
          font-size: 15px;
          padding: 0.7em 2.7em;
          letter-spacing: 0.06em;
          position: relative;
          font-family: inherit;
          border-radius: 0.6em;
          overflow: hidden;
          transition: all 0.3s;
          line-height: 1.4em;
          border: 2px solid var(--blue);
          background: linear-gradient(to right, rgba(27, 152, 224, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 152, 224, 0.1) 100%);
          color: var(--blue);
          box-shadow: inset 0 0 10px rgba(27, 152, 224, 0.4), 0 0 9px 3px rgba(27, 152, 224, 0.1);
          cursor: pointer;
        }

        button:hover {
          color: #13293d; /* texto escuro no hover */
          box-shadow: inset 0 0 10px rgba(27, 152, 224, 0.6), 0 0 9px 3px rgba(27, 152, 224, 0.2);
        }

        button:before {
          content: "";
          position: absolute;
          left: -4em;
          width: 4em;
          height: 100%;
          top: 0;
          transition: transform 0.4s ease-in-out;
          background: linear-gradient(to right, transparent 1%, rgba(27, 152, 224, 0.1) 40%, rgba(27, 152, 224, 0.1) 60%, transparent 100%);
          pointer-events: none;
        }

        button:hover:before {
          transform: translateX(15em);
        }
      `}</style>
    </div>
  );
};

export default Login;
