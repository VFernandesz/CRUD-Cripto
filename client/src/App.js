import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [criptoName, setCriptoName] = useState("");
  const [criptoDesc, setCriptoDesc] = useState("");
  const [criptoCotacao, setCriptoCotacao] = useState(0);

  const [criptoList, setCriptoList] = useState([]);

  const [newCotacao, setNewCotacao] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setCriptoList(response.data);
    });
  }, [criptoList]);

  const submitCripto = () => {
    Axios.post("http://localhost:3001/api/insert", {
      criptoName: criptoName,
      criptoDesc: criptoDesc,
      criptoCotacao: criptoCotacao,
    });

    setCriptoList([
      ...criptoList,
      {
        nm_cripto: criptoName,
        ds_cripto: criptoDesc,
        qt_cotacao_cripto: criptoCotacao,
      },
    ]);
  };

  const updateCotacao = (id) => {
    Axios.put("http://localhost:3001/api/update", {
      criptoCotacao: newCotacao,
      criptoId: id,
    });
  };

  const deleteCripto = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
  };

  const searchName = (name) => {
    Axios.get(`http://localhost:3001/api/search/${name}`);
  };

  return (
    <div className="App">
      <h1>CRUD Cripto</h1>

      <div className="form">
        <label>Nome Cripto: </label>
        <input
          type="text"
          name="nmCripto"
          className="txtType1"
          onChange={(e) => {
            setCriptoName(e.target.value);
          }}
        ></input>

        <label>Cotação Cripto:</label>
        <input
          type="number"
          name="qtCotacao"
          className="txtType1"
          onChange={(e) => {
            setCriptoCotacao(e.target.value);
          }}
        ></input>

        <label>Descrição Cripto: </label>
        <input
          type="text"
          name="dsCripto"
          className="txtType2"
          onChange={(e) => {
            setCriptoDesc(e.target.value);
          }}
        ></input>
        <button onClick={submitCripto}>Criar</button>
        {criptoList.map((val) => {
          return (
            <div className="infoCripto">
              <div>
                <b>Cripto Name:</b>
                <p> {val.nm_cripto}</p>

                <b>Descrição Cripto:</b>
                <p> {val.ds_cripto}</p>

                <b>Cotação Cripto:</b>
                <p> {val.qt_cotacao_cripto} BRL</p>
              </div>
              <div className="updtDel">
                <input
                  type="number"
                  name="updateCotacao"
                  placeholder="Atualizar Cotação"
                  onChange={(e) => {
                    setNewCotacao(e.target.value);
                  }}
                ></input>
                <button
                  onClick={() => {
                    updateCotacao(val.id_cripto);
                  }}
                >
                  Atualizar Cotação
                </button>

                <button
                  onClick={() => {
                    deleteCripto(val.id_cripto);
                  }}
                >
                  DELETAR MOEDA
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
