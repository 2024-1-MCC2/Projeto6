import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import intImage1 from "../assets/roendo.png";



const Section2Container = styled.section`
  min-height: calc(75vh - 114px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color:#031634;

`;

const InformacoesStyle = styled.div`
  flex-wrap: nowrap;
  width: 80%;
  height: 70%;
  border-radius: 10px;
  padding: 50px; 
  box-shadow: 23px 5px 20px 14px rgba(99, 96, 96, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  color: black;
  background-color: #d1eaee;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
`;

const Informacao = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  height: 100%;
  width: 100%;
  align-items: start;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-right: gray solid;
  padding: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: gray solid;
    padding-bottom: 20px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;


const InformacaoH1 = styled.h1`
color: #BLACK;
font-family: Blippo, fantasy;
font-size: 70px;

  
`;

const InformacaoH2 = styled.h2`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InformacaoP = styled.p`
  width: 100%;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const BoxIntImg = styled.img`
  margin-top: 40px;
  width: 90%;
  height: 70%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50%;
    height: 30%;
  }
`;

function Informacoes() {
  return (
    <Section2Container>
      <InformacoesStyle>
        <Informacao>
          <BoxIntImg src={intImage1} alt="" />
        </Informacao>
        <Informacao>
          <InformacaoH1>Resultado questionário</InformacaoH1>
          <InformacaoP>
            Se você realizou o questionário de sintomas de ansiedade e está se perguntando o que os resultados significam, aqui está uma análise para ajudá-lo:

            Se a soma dos seus valores está entre 0 e 10, isso sugere que você está dentro do limite mínimo de ansiedade. Isso significa que você pode estar experimentando alguns sintomas de ansiedade, mas eles não estão causando um impacto significativo em sua vida diária.

            Se sua soma está entre 11 e 19, isso indica ansiedade leve. Você pode estar enfrentando sintomas que são perceptíveis e podem estar causando um desconforto leve, mas ainda assim gerenciável.

            Para aqueles com uma soma entre 20 e 30, isso sugere ansiedade moderada. Neste ponto, os sintomas estão começando a interferir mais significativamente em sua vida cotidiana e podem requerer atenção e intervenção para ajudar a reduzir o impacto.

            Se sua soma é entre 31 e 63, isso indica ansiedade grave. Nesse estágio, os sintomas estão causando um impacto significativo em sua vida e bem-estar, e é importante buscar apoio profissional para ajudar a lidar com a ansiedade.

            Independentemente do resultado, é importante lembrar que a ansiedade é uma condição comum e tratável. Se você estiver enfrentando sintomas de ansiedade, não hesite em procurar ajuda de um profissional de saúde mental qualificado. Eles podem oferecer apoio, orientação e tratamentos para ajudá-lo a lidar com seus sintomas e melhorar sua qualidade de vida.

          </InformacaoP>
        </Informacao>

      </InformacoesStyle>
    </Section2Container>
  );
}

export default Informacoes;