import { useNavigate } from "react-router-dom";
import { Button } from "../../pages/HomePage/HomePage.styles";
import { ContenedorModal, Overlay } from "./Modal.styles";
const Modal = () => {
  
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/users");
  };

  return (
    <>
      <Overlay>
        <ContenedorModal>
          <h2>
            Are you looking for trainings?Login now to start your workout{" "}
          </h2>
          <Button onClick={handleClickLogin}>Log in</Button>
        </ContenedorModal>
      </Overlay>
    </>
  );
};

export default Modal;
