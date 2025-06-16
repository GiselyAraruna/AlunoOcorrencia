import React, { useState } from "react";

const RegistrarOcorrencia = () => {
  const [dados, setDados] = useState({
    aluno: "",
    professor: "",
    data: "",
    motivo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ocorrenciasSalvas = JSON.parse(localStorage.getItem("ocorrencias")) || [];
    localStorage.setItem("ocorrencias", JSON.stringify([...ocorrenciasSalvas, dados]));
    alert("Ocorrência registrada com sucesso!");
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
        <h2>Registrar Ocorrência</h2>
        <form onSubmit={handleSubmit} className="login-card">
          <input
            type="text"
            name="aluno"
            placeholder="Aluno"
            value={dados.aluno}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="professor"
            placeholder="Professor"
            value={dados.professor}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="data"
            value={dados.data}
            onChange={handleChange}
            required
          />
          <textarea
            name="motivo"
            placeholder="Motivo"
            value={dados.motivo}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              margin: "12px 0",
              fontSize: "1rem",
              border: "1.5px solid #3f7abf",
              borderRadius: "10px",
              outline: "none",
              backgroundColor: "#0a1f44",
              color: "#cde9ff"
            }}
          />
          <button type="submit">Registrar Ocorrência</button>
        </form>
      </div>

      {/* Exibição dos dados preenchidos */}
      <div id="root" style={{ marginTop: "30px" }}>
        <h2>Dados da Ocorrência</h2>
        <p><strong>Aluno:</strong> {dados.aluno}</p>
        <p><strong>Professor:</strong> {dados.professor}</p>
        <p><strong>Data:</strong> {dados.data}</p>
        <p><strong>Motivo:</strong> {dados.motivo}</p>
      </div>
    </div>
  );
};

export default RegistrarOcorrencia;
