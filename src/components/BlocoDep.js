import React from "react";
import styled from "styled-components";


const MainContainer = styled.div`
  position: relative;
  padding: 70px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 20 1 100%;
  background-size: cover;
  background-color: #d3fdf2;


  @media (max-width: 768px) {
    height: 700px;
  }
`;

const SecondContainer = styled.div`
  background: rgba( 105, 168, 244, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 50px;
  border: 2px solid rgba( 255, 255, 255, 0.18 );
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const TextMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  position: absolute;
  padding: 20px;
  max-width: 40%;
  text-align: center;
  z-index: 1;
  max-height: 80%;
  @media (max-width: 768px) {
    text-align:center;
    align-items: center;
    justify-content: center;
    top:auto;
    max-width: 100%;
    padding: 10px;
  }
`;

const TextMainH1 = styled.h1`
  margin-top: 5rem;
  color: #BLACK;
  font-family: Asap;
  font-size: 80px;
  text-align: center;
  font-family: Asap;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;

const TextMainP = styled.p`
  margin-bottom: 0;
  color: BLACK;
  font-family: Asap;
  font-size: 23px;
  font-style: italic;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
  max-width: 100%;
  word-break: break-word;
  padding: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align:center;
    align-items: center;
    justify-content: center;
  }
`;
const Main = () => {
  return (
    <MainContainer>
      <TextMain>
        <TextMainH1>Depoimentos</TextMainH1>
        <SecondContainer>
          <TextMainP>
          A jornada contra a depressão pode ser difícil e solitária, mas você não está sozinho. Aqui, compartilhamos histórias reais de pessoas que enfrentaram a depressão e encontraram força e esperança. Suas palavras inspiradoras nos lembram que é possível encontrar luz nos momentos mais sombrios e que, com o apoio certo, a recuperação é alcançável.          </TextMainP>
        </SecondContainer>
      </TextMain>


    </MainContainer>
  );
};

export default Main;