import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const UsersPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogin = () => {
    setUser(true);
    navigate("/training");
  };

  const handleClickLogout = () => {
    setUser(false);
    navigate("/users");
  };

  return (
    <>
      <div>UsersPage</div>
      {!user ? (
        <button onClick={handleClickLogin}>Log in</button>
      ) : (
        <button onClick={handleClickLogout}>Log out</button>
      )}
    </>
  );
};

export default UsersPage;
