import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import ValidationForm from "../components/ValidationForm/ValidationForm";

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
      <h3>CREATE YOUR ACCOUNT</h3>
      <ValidationForm onSubmit={onSubmit}></ValidationForm>
    </>
  );
};

export default SignUpPage;
