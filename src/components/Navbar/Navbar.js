import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import {
  Container,
  GlobalStyle,
  LogoContainer,
  Menu,
  MenuItems,
  MenuItemsLink,
  MobileIcon,
  LinkLogo,
} from "./Navbar.styles";
import { FaDumbbell, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClickLogin = () => {
    setShowMobileMenu(!setShowMobileMenu);
    navigate("/training");
  };

  const handleClickLogout = () => {
    setUser(false);
    sessionStorage.removeItem("userEmail");
    navigate("/users");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <LogoContainer>
          <FaDumbbell />
          <LinkLogo to={"/"}>Fitness App</LinkLogo>
        </LogoContainer>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItems>
            <MenuItemsLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/"
            >
              Home
            </MenuItemsLink>
          </MenuItems>
          <MenuItems>
            <MenuItemsLink
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              to="/training"
            >
              Training
            </MenuItemsLink>
          </MenuItems>

          {!user ? (
            <>
              <MenuItems>
                <MenuItemsLink onClick={handleClickLogin} to="/users">
                  Log in
                </MenuItemsLink>
              </MenuItems>
              <MenuItems>
                <MenuItemsLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  to="/signup"
                >
                  Sign Up
                </MenuItemsLink>
              </MenuItems>
            </>
          ) : (
            <MenuItems>
              <MenuItemsLink onClick={handleClickLogout}>Log out</MenuItemsLink>
            </MenuItems>
          )}
        </Menu>
      </Container>
    </>
  );
};

export default Navbar;
