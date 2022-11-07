import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import {
  Container,
  ContainerContent,
  ContainerImage,
  Content,
  Subtitle,
  Title,
  Button,
} from "./HomePage.styles";

const HomePage = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const handleClick = () => {
    if (!user) {
      navigate("/signup");
    } else {
      navigate("/training");
    }
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
        <Button onClick={handleClick}>Let's go</Button>
      </ContainerImage>
      <ContainerContent>
        <Content>
          Strength training by levels, start from scratch to expert with
          different materials.Start a free trial by signing up here
        </Content>
        <Button onClick={handleClick}>Start Now</Button>
      </ContainerContent>
    </Container>
  );
};

export default HomePage;
