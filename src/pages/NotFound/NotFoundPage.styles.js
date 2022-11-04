import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
 
`;

export const NotFoundMessage = styled.h1`
    color: #3C4048;
    letter-spacing: 2px;
    font-size: 60px;
    ${mobile} {
      font-size: 30px;
    }

`;

export const SpanNotFound = styled.span`
color: #ff6d28;
`;
