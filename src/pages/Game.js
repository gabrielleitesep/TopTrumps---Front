import styled from 'styled-components';
import img1 from "../assets/images/9.png"
import img2 from "../assets/images/cardback.png"
import logo from "../assets/images/logo3.jpg"
import { useState } from 'react';
import deck from '../constants/deck';
import { useEffect } from 'react';

function SuperTrunfo() {

  const [playerDeck, setPlayerDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [currentRound, setCurrentRound] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  useEffect(() => {
    const gg = deck
    shuffleAndDistributeCards(gg);
  }, []);
  function shuffleAndDistributeCards() {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    const deck1 = shuffledDeck.slice(0, 5);
    const deck2 = shuffledDeck.slice(5, 10);

    setPlayerDeck(deck1);
    setComputerDeck(deck2);
    console.log(deck1)
  }
  
  const handleAttributeSelect = (event) => {
    setSelectedAttribute(event.target.value);
  };
  
  const handleNextRound = () => {
    setCurrentRound(currentRound + 1);
  }

  const compareAttributes = (playerCard, computerCard, selectedAttribute) => {
    const playerAttributeValue = `${playerCard}.${selectedAttribute}`;
    const computerAttributeValue = `${computerCard}.${selectedAttribute}`;

    if (playerAttributeValue > computerAttributeValue) {
      setPlayerScore(playerScore + 1);
      alert("Venceu!");
    } else if (playerAttributeValue < computerAttributeValue) {
      setComputerScore(computerScore + 1);
      alert("Perdeu!");
    } else {
      alert("Empate!");
    }
  }

  return (
    <Container>
      <Cover>
      <CoverImage src={logo} alt="Carta 1" />
      </Cover>
      <CardWrapper>
        <Card>
          <CardTitle>Jogador</CardTitle>
          <CardImage src={img1} alt="Carta 1" />
        </Card>
        <ButtonWrapper>
          <Button>Começar Jogo</Button>
          <Button>Próxima Rodada</Button>
        </ButtonWrapper>
        <Card>
          <CardTitle>Oponente</CardTitle>
          <CardBackImage src={img2} alt="Carta 2" />
        </Card>
      </CardWrapper>
      <SelectWrapper>
        <SelectLabel>Escolha o Atributo:</SelectLabel>
        <Select  onChange={handleAttributeSelect}>
          <option value="ataque">Ataque</option>
          <option value="vida">Vida</option>
          <option value="mana">Mana</option>
          <option value="raridade">Raridade</option>
        </Select>
        <p>Você selecionou o atributo: {selectedAttribute}</p>
      </SelectWrapper>
    </Container>
  );
};

export default SuperTrunfo;

//Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Cover = styled.div`
  height: 30%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoverImage = styled.img`
  width: 600px;
  height: 800px;
  object-fit: contain;
  border-radius: 17px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  padding: 0 20px;
  background-color: black;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100%;
  background-color: black;
  border-radius: 5px;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  color: gold;
  font-family: 'Oswald', sans-serif;
  margin-top: 20px;
`;

const CardImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: contain;
  border-radius: 17px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const CardBackImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: contain;
  margin-bottom: 10px;
  padding-top: 25px;
  margin-top: 20px;
  border-radius: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

const Button = styled.button`
  width: 200px;
  height: 52px;
  background-color: green;
  border-radius: 7px;
  color: #300300;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin: 20px;
  border: solid 3px darkgreen;
  cursor: pointer;

  :hover {
    transform: scale(0.97);
    opacity: 0.6;
  }

  :disabled {
    transform: scale(0.95);
    opacity: 0.3;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  background-color: black;
`;

const SelectLabel = styled.label`
  font-size: 24px;
  padding-right: 30px;
  color: gold;
  font-family: 'Oswald', sans-serif;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 20px;
  background-color: gold;
  font-family: 'Oswald', sans-serif;
  border: 3px solid darkgoldenrod;
  border-radius: 10px;
`;