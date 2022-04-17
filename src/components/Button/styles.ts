import styled from 'styled-components';

export const Container = styled.button`
  width: 200px;
  height: 50px;
  background-color: #1550FF;
  border-radius: 10px;
  color: #FFF;
  opacity: 1;
  border: 0;
  cursor: pointer;
  transition: opacity 0.3s;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  div:first-child {
    height: inherit;
    border-right: 1px solid rgba(255, 255, 255, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.2rem;

    img {
      width: 20px;
    }
  }

  div:last-child { 
    flex: 1;
  }


`;