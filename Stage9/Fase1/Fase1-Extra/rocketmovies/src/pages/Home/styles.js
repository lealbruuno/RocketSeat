import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80vw;
    margin: 24px auto;

    > h1 {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;

export const Contant = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  
`;

export const AddButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   border: none;
   padding: 14px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.COLORS.PINK};
`
