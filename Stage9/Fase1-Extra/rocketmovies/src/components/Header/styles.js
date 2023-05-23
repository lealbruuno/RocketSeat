import styled from "styled-components";

export const Container = styled.header`
  grid-area: header; //Fixar o cabeçalho e não rolar com a pág.

  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

  input{
    height: 56px;
    width: 100vh;
    padding: 19px 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 64px;
    }

   div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 18px;
    text-align: right;
   }

    span {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;
