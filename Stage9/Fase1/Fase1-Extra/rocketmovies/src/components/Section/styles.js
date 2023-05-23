import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 24px;

  > h2 {
    padding-top: 1px;
    margin-bottom: 15px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >p{
    font-size: 16px;
    margin: 15px auto;
  }
`;
