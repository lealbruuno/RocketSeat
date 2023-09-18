import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 38px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 22px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    margin-top: 44px;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-self: center;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
