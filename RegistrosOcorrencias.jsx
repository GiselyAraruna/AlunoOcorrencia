import React, { useState, useEffect } from "react";

const RegistrosOcorrencias = () => {
  const [ocorrencias, setOcorrencias] = useState([]);

  useEffect(() => {
    const ocorrenciasSalvas = JSON.parse(localStorage.getItem("ocorrencias")) || [];
    setOcorrencias(ocorrenciasSalvas);
  }, []);

  const excluirOcorrencia = (index) => {
    const novasOcorrencias = ocorrencias.filter((_, i) => i !== index);
    setOcorrencias(novasOcorrencias);
    localStorage.setItem("ocorrencias", JSON.stringify(novasOcorrencias));
    alert("Ocorrência excluída com sucesso!");
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
      <div id="root" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <h2>Registros de Ocorrências</h2>

        {ocorrencias.length === 0 ? (
          <p>Nenhuma ocorrência registrada.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
            {ocorrencias.map((ocorrencia, index) => (
              <li key={index} style={{
                marginBottom: "20px",
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "#0a1f44",
                color: "#cde9ff",
                boxShadow: "0 2px 8px rgba(0, 37, 85, 0.3)"
              }}>
                <p><strong>Aluno:</strong> {ocorrencia.aluno}</p>
                <p><strong>Professor:</strong> {ocorrencia.professor}</p>
                <p><strong>Data:</strong> {ocorrencia.data}</p>
                <p><strong>Motivo:</strong> {ocorrencia.motivo}</p>
                <button
                  onClick={() => excluirOcorrencia(index)}
                  style={{
                    backgroundColor: "#c62828",
                    color: "#fff",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginTop: "10px",
                    fontWeight: "bold",
                    transition: "background-color 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#b71c1c"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#c62828"}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RegistrosOcorrencias;
