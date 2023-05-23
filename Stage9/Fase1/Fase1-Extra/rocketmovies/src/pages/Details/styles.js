import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

    ::-webkit-scrollbar {
      width: 10px;
    };    
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 5px;
    }
  }
`;

export const Content = styled.div`
  max-width: 80vw;
  margin: 0 auto;

  section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
  }

  img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;

export const Star = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 20px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;
    margin-bottom: 24px;
  }
`;

export const Clock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.PINK};
`;
