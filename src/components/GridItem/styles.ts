import styled from 'styled-components';

type GridItemProps = {
  showBackgroud: boolean;
}

type IconProps = {
  opacity?: number;
}

export const Container = styled.div<GridItemProps>`
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${props => props.showBackgroud ? '#1550FF' : '#E2E3E3'};
`;

export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;

  opacity: ${props => props.opacity ?? props.opacity }
`;