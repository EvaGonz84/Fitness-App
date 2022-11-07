import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 50px;
  background-color: #3c4048;
  color: #ff6d28;

  h2 {
    text-align: center;
  }

  ${mobile} {
    width: 200px;
    
  }
`;
