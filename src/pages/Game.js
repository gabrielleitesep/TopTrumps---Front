import styled from 'styled-components';
import img1 from "../assets/images/1.png"
import img2 from "../assets/images/cardback.png"
import logo from "../assets/images/logo3.jpg"

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
  border-radius: 17px;
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

const SuperTrunfo = () => {
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
        <Select>
          <option value="atributo1">Ataque</option>
          <option value="atributo2">Defesa</option>
          <option value="atributo3">Mana</option>
          <option value="atributo3">Estilo</option>
        </Select>
      </SelectWrapper>
    </Container>
  );
};

export default SuperTrunfo;