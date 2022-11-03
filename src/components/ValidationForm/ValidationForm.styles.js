import styled from "styled-components";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InputEmail = styled.input`
  width: 30%;
  padding: 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 20px;
  color: #ff6d28;

  &:focus {
    border-color: white;
    caret-color: #ff6d28;
  }
  ${mobile} {
    width: 60%;
    font-size: 12px;
  }
`;

export const Span = styled.span`
  color: red;
  font-size: 20px;
  letter-spacing: 1px;
  display: block;
  margin-top: 10px;

  ${mobile} {
    font-size: 15px;
  }
`;
