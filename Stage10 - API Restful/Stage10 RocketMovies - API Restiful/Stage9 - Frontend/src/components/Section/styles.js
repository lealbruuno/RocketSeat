import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: grid;
  text-align: left;
  border: none;

  > h3 {
    width: 100%;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.2rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 14px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 1rem 0;

    word-wrap: normal;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    height: 40px;
  }

  > footer:last-child {
    align-self: end;
  }
`;
