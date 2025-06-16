import React, { useState } from "react";

const Ocorrencia = () => {
    const [dados, setDados] = useState({
        aluno: "",
        professor: "",
        matricula: "",
        data: "",
        motivo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados({ ...dados, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ocorrência registrada:", dados);
        alert(`Ocorrência registrada com sucesso!\nAluno: ${dados.aluno}\nProfessor: ${dados.professor}\nMatrícula: ${dados.matricula}\nData: ${dados.data}\nMotivo: ${dados.motivo}`);
    };

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", backgroundColor: "black", color: "white"
        }}>
            <div style={{
                width: "350px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#242424"
            }}>
                <h2>Registro de Ocorrência</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Aluno:</label>
                        <input type="text" name="aluno" value={dados.aluno} onChange={handleChange} required />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Professor:</label>
                        <input type="text" name="professor" value={dados.professor} onChange={handleChange} required />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Matrícula:</label>
                        <input type="text" name="matricula" value={dados.matricula} onChange={handleChange} required />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Data:</label>
                        <input type="date" name="data" value={dados.data} onChange={handleChange} required />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Motivo:</label>
                        <textarea name="motivo" value={dados.motivo} onChange={handleChange} required />
                    </div>

                    <button type="submit">Salvar Ocorrência</button>
                </form>
            </div>

            {/* Exibição dos dados preenchidos */}
            <div style={{
                marginTop: "20px", width: "350px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px",
                backgroundColor: "#242424"
            }}>
                <h2>Dados da Ocorrência:</h2>
                <p><strong>Aluno:</strong> {dados.aluno}</p>
                <p><strong>Professor:</strong> {dados.professor}</p>
                <p><strong>Matrícula:</strong> {dados.matricula}</p>
                <p><strong>Data:</strong> {dados.data}</p>
                <p><strong>Motivo:</strong> {dados.motivo}</p>
            </div>
        </div>
    );
};

export default Ocorrencia;
