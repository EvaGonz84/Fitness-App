import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import ValidationForm from "../../components/ValidationForm/ValidationForm";
import { Container, Title, Text, GlobalStyle } from "./UsersPage.styles";

const UsersPage = () => {
  const localEmail = localStorage.getItem("userEmail");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    if (JSON.stringify(event) === localEmail) {
      console.log(`Bienvenido usuario con email:${JSON.stringify(event)}`);
      setUser(true);
      navigate("/training");
    } else {
      console.log("Aún no estás registrado,crea una cuenta");
      navigate("/signup");
    }
  };

  return (
    <>
    <GlobalStyle/>
      <Container>
        <Title>Welcome!Are you ready?</Title>
        <Text>Enter your registration email and start!</Text>
      </Container>
      <ValidationForm onSubmit={onSubmit}></ValidationForm>
    </>
  );
};

export default UsersPage;
