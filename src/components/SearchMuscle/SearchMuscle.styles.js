import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerSearchMuscle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  ${mobile} {
    margin: 20px;
  }
`;

export const Text = styled.p`
  letter-spacing: 1px;
  line-height: 1.6;
  font-size: 30px;
  width: 50%;
  text-align: center;
  color: #3c4048;
  ${mobile} {
    width: 100%;
    font-size: 20px;
  }
`;

export const Line = styled.hr`
  margin-top: 50px;
  border: 1px solid #3c4048;
  width: 25%;
  ${mobile} {
    width: 50%;
  }
`;
