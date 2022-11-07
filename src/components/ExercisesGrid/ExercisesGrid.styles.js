import styled from "styled-components";
const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const MainTitle = styled.h1`
  font-size: 40px;
  padding: 0 20px;
  color: #3c4048;

  ${mobile} {
    font-size: 25px;
    padding: 0 15px;
  }
`;

export const ContainerGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 200px;
  background-color: #3c4048;
  padding: 20px;

  ${mobile} {
    min-width: 40%;
    margin: 20px;
  }
`;

export const TitleGrid = styled.h2`
  color: #ff6d28;
  font-size: 30px;

  ${mobile} {
    font-size: 25px;
  }
`;

export const TextGrid = styled.p`
  letter-spacing: 2px;
  font-size: 15px;
  line-height: 1.6;
  width: 60%;
  color: white;

  ${mobile} {
    width: 100%;
    font-size: 12px;
  }
`;

export const Span = styled.span`
  font-size: 20px;

  ${mobile} {
    font-size: 15px;
  }
`;
