import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Modal from "../Modal/Modal";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Modal/>;
  }
  
  return children;
};

export default RequireAuth;

