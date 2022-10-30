import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
	body {
        font-family: Helvetica, Arial, sans-serif;
  background-color: rgb(234, 234, 234);
        width: 100%;
        height: 70px;
        margin:0px;
        
    
	}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  background-color: white;
`;

export const LogoContainer = styled.div`
  padding: 15px;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const LinkLogo = styled(NavLink)`
  margin-left: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Menu = styled.ul`
  background-color: white;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile} {
    position: absolute;
    top: 35px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    padding: 0;
    width: 100%;
    height: 90vh;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItems = styled.li`
  height: 100%;
  list-style: none;

  ${mobile} {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemsLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  height: 100%;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #e0144c;
    transition: 0.5s all ease;
  }

  ${mobile} {
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  ${mobile} {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;

    svg {
      fill: #e0144c;
      margin-right: 0.5rem;
    }
  }
`;
