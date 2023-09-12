import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ isBigSize }) => (isBigSize ? "center" : "start")};
  gap: 0.5rem;

  svg {
    font-size: ${({ isBigSize }) => (isBigSize ? "2.2rem" : "1.0rem")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;