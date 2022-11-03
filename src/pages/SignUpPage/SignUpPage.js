import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import ValidationForm from "../../components/ValidationForm/ValidationForm";
import { Container, Title, Text, GlobalStyle } from "../UsersPage/UsersPage.styles";

const SignUpPage = () => {
  const localEmail = localStorage.getItem("userEmail");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    if (JSON.stringify(event) === localEmail) {
      console.log("Ya estás registrado");
      navigate("/users");
    } else {
      localStorage.setItem("userEmail", JSON.stringify(event));
      console.log(`Bienvenido usuario con email:${JSON.stringify(event)}`);
      setUser(true);
      navigate("/training");
    }
  };

  return (
    <>
    <GlobalStyle/>
      <Container>
        <Title>Create your account</Title>
        <Text>Register an email to be able to access the trainings</Text>
      </Container>
      <ValidationForm onSubmit={onSubmit}></ValidationForm>
    </>
  );
};

export default SignUpPage;
