import styled from "styled-components";

export const Container = styled.a`
display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.PINK};

&:disabled{
    opacity: 0.5;
}
`;
