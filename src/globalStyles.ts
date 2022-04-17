import styled, { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: sans-serif;
  }
`

export const Container = styled.main`
  max-width: 850px;
  margin: 0 auto;
  display: flex;

  padding: 3rem 2rem;


  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
  }

  & > div {
    width: 100%;
  }


  @media (max-width: 750px) {
    align-items: center;
    margin-bottom: 3rem;


    & > div {
      display: flex;
      justify-content: space-around;
      text-align: center;

    }
  }

`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;


  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;