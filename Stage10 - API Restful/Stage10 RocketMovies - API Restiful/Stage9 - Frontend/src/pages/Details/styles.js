import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 80vw;
    margin: 2px auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  margin: 24px auto;

  section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  img {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  > p {
    font-size: 16px;
    margin-top: 20px;
    text-align: justify;
    margin-bottom: 24px;
  }

  > .tags {
    display: flex;
    margin-bottom: 1px;
    gap: 10px;
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
    margin-bottom: 10px;
  }
`;

export const Clock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.PINK};
`;
