import React, { useState } from 'react';
import './App.css';

const CadastroEnd = () => {
  const estadosCidades = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
    AM: ["Manaus", "Parintins", "Itacoatiara"],
    AP: ["Macapá", "Santana", "Laranjal do Jari"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    CE: ["Fortaleza", "Juazeiro do Norte", "Sobral"],
    DF: ["Brasília"],
    ES: ["Vitória", "Vila Velha", "Serra"],
    GO: ["Goiânia", "Anápolis", "Aparecida de Goiânia"],
    MA: ["São Luís", "Imperatriz", "Caxias"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
    PA: ["Belém", "Santarém", "Ananindeua"],
    PB: ["João Pessoa", "Campina Grande", "Patos"],
    PE: ["Recife", "Caruaru", "Olinda"],
    PI: ["Teresina", "Parnaíba", "Picos"],
    PR: ["Curitiba", "Londrina", "Maringá"],
    RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
    RN: ["Natal", "Mossoró", "Parnamirim"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
    SC: ["Florianópolis", "Joinville", "Blumenau"],
    SE: ["Aracaju", "Itabaiana", "Nossa Senhora do Socorro"],
    SP: ["São Paulo", "Campinas", "Santos"],
    TO: ["Palmas", "Araguaína", "Gurupi"]
  };
  

  const [formData, setFormData] = useState({
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: '',
    cep: '',
    pontorefere: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleEstadoChange = (e) => {
    const estadoSelecionado = e.target.value;
    setFormData({ ...formData, estado: estadoSelecionado, cidade: '' });
  };

  const handleCidadeChange = (e) => {
    setFormData({ ...formData, cidade: e.target.value });
  };

  const cidades = estadosCidades[formData.estado] || [];

  return (
    <div className="container">
      <div className="scrollView">
        <div className="header">
          <img src="/logoaelin.png" alt="Logo" className="logo" />
          <h1 className="title">Finalize o cadastro</h1>
          <p className="aviso">Agora, preciso que nos informe seu endereço.</p>
        </div>


        <div className="stepsContainer">
        <p className="step">Passo 1 </p> 
        <p className="step1">Passo 2</p>
        <p className="step">Passo 3</p>
      </div>

        <div className="form">
          <div className="inputRowCentered">
            <div className="inputGroupWide">
              <label className="label">Rua</label>
              <input
                className="input"
                value={formData.endereco}
                onChange={(e) => handleInputChange('endereco', e.target.value)}
                placeholder="Rua Tralala dos Andes"
              />
            </div>
          </div>

          <div className="inputRow">
            <div className="inputGroup">
              <label className="label">Número</label>
              <input
                className="inputsNumComple"
                value={formData.numero}
                onChange={(e) => handleInputChange('numero', e.target.value)}
                placeholder="ex: 12"
                type='number'
              />
            </div>

            <div className="inputGroup">
              <label className="label">Complemento</label>
              <input
                className="inputsNumComple"
                value={formData.complemento}
                onChange={(e) => handleInputChange('complemento', e.target.value)}
                placeholder="ex: Apto, bloco, etc."
              />
            </div>
          </div>

          <div className="inputRowCentered">
            <div className="inputGroupWide">
              <label className="label">Bairro</label>
              <input
                className="input"
                value={formData.bairro}
                onChange={(e) => handleInputChange('bairro', e.target.value)}
                placeholder="ex: Jardim das Oliveiras"
              />
            </div>
          </div>

          <div className="inputRow">
            <div className="inputGroup">
              <label className="label">Estado</label>
              <select
                className="inputEstadoCidade"
                value={formData.estado}
                onChange={handleEstadoChange}
              >
                <option value="">Selecione o Estado</option>
                {Object.keys(estadosCidades).map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>

            <div className="inputGroup">
              <label className="label">Cidade</label>
              <select
                className="inputEstadoCidade"
                value={formData.cidade}
                onChange={handleCidadeChange}
                disabled={!formData.estado}
              >
                <option value="">Selecione a Cidade</option>
                {cidades.map((cidade) => (
                  <option key={cidade} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="inputRow">
            <div className="inputGroup">
              <label className="label">CEP</label>
              <input
                className="inputsCepPontoR"
                value={formData.cep}
                onChange={(e) => handleInputChange('cep', e.target.value)}
                placeholder="XXXXX-XXX"
                type='number'
              />
            </div>

            <div className="inputGroup">
              <label className="label">Ponto de referência</label>
              <input
                className="inputsCepPontoR"
                value={formData.pontorefere}
                onChange={(e) => handleInputChange('pontorefere', e.target.value)}
                placeholder="ex: Próximo ao Colégio Visão"
              />
            </div>
          </div>

         
    <button className="button">Avançar</button>
  </div>

        </div>
      </div>
  );
};

export default CadastroEnd;