import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 80vw;
    margin: 24px auto;

    > h1 {
      margin-top: 24px;
      font-size: 24px;
      font-weight: 400;
    }
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  margin: 24px auto;
`;

export const Form = styled.form`
  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 16px;
    margin: 24px auto;
  }
  .title {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
  .tags {
    display: flex;
  margin-bottom: 24px;    
  gap: 24px;
  }

  .disabled{
    background-color: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  footer{
    display: flex;
    gap:24px
  }
`;
