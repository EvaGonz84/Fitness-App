import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/training");
  };

  const handleClickLogout = () => {
    setUser(false);
    sessionStorage.removeItem("userEmail");
    navigate("/users");
  };

  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/training">Training</NavLink>
        </li>

        {!user ? (
          <>
            <li>
              <NavLink onClick={handleClickLogin} to="/users">
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </>
        ) : (
          <button onClick={handleClickLogout}>Log out</button>
        )}
      </ul>
    </>
  );
};

export default Navbar;
