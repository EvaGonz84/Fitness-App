import styled ,{ createGlobalStyle }from "styled-components";


const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`
	body {
		background-color:#3C4048 ;
	}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 120px;
  

  
`;

export const Title = styled.h1`
  letter-spacing: 2px;
  font-size: 40px;
  color:#FF6D28;

  ${mobile} {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  letter-spacing: 2px;
  font-size: 20px;
  color:white;

  ${mobile} {
    font-size: 15px;
    width: 80%;
  }
`;
