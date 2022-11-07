import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import ValidationForm from "../../components/ValidationForm/ValidationForm";
import {
  Container,
  Title,
  Text,
  GlobalStyle,
  LinkSignUp,
} from "./UsersPage.styles";
import swal from "sweetalert";

const UsersPage = () => {
  const localEmail = localStorage.getItem("userEmail");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    if (JSON.stringify(event) === localEmail) {
      swal({
        title: `Welcome to training`,
        text: `${JSON.stringify(event)}`,
        icon: "success",
        button: "Accept",
      });
      setUser(true);
      navigate("/training");
    } else {
      swal({
        title: "You are not registered?",
        text: "This email doesn't correspond to any registered account",
        icon: "warning",
        button: "OK",
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Welcome!Are you ready?</Title>
        <Text>Enter your registration email and start!</Text>
      </Container>
      <ValidationForm onSubmit={onSubmit}></ValidationForm>

      <Container>
        <Text>
          If you are not registered yet{" "}
          <LinkSignUp to={"/signup"}>SIGN UP NOW</LinkSignUp>
        </Text>
      </Container>
    </>
  );
};

export default UsersPage;
