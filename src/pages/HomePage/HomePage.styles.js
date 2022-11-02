import styled from "styled-components";
import img from "../../images/img-home.jpg";

const desktopStartWidth = 996;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});

  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${mobile} {
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  color: white;
  padding: 15px;
  margin-top: -5px;
  letter-spacing: 2px;

  ${mobile} {
    font-size: 40px;
    padding: 0px;
  }
`;

export const Subtitle = styled.p`
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin: 0px;
  letter-spacing: 2px;
  ${mobile} {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  width: 150px;
  font-size: 20px;
  letter-spacing: 1px;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  &:hover {
    background-color: #ff6d28;
    color: white;
    transition: 0.6s all ease;
  }

  ${mobile} {
    width: 120px;
    font-size: 15px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  line-height: 1.6;
  padding-top: 60px;
  width: 50%;
  color: rgba(0, 0, 0, 0.8);

  ${mobile} {
    width: 80%;
    font-size: 20px;
  }
`;
