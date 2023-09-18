import styled from "styled-components";

export const Container = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;

  padding: 0.4rem 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 0.4rem;

  /* margin-right: 0.8rem; */
`;