import { useNavigate } from "react-router-dom";
import {
  Container,
  ContainerContent,
  ContainerImage,
  Content,
  Subtitle,
  Title,
  Button
} from "./HomePage.styles";



const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/users");
  };
  return (
    <Container>
      <ContainerImage>
        <Title>
          Train Hard.
          <br />
          Enjoy the day.
        </Title>
        <Subtitle>Click here to start</Subtitle>
        <Button onClick={handleClick}>Start training</Button>
      </ContainerImage>
      <ContainerContent>

      <Content>
      Strength training by levels, start from scratch to expert with different materials.Start a free trial by signing up here
      </Content>
      <Button onClick={handleClick}>Start now</Button>
      </ContainerContent>
      
    </Container>
  );
};

export default HomePage;
