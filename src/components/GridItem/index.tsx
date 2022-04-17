
import { Container, Icon } from './styles'

import b7Svg from '../../assets/b7.svg'

import { items } from '../../data/items'

type GridItem = {
  item: number | null;
  shown: boolean;
  permanentShown: boolean;
}

type GridItemProps = {
  item: GridItem;
  onClick: () => void;
}



export const GridItem = ({item, onClick}: GridItemProps) => {
  return (
    <Container  
      showBackgroud={item.permanentShown || item.shown}
      onClick={onClick}>
      {item.permanentShown === false && item.shown === false
      ?
        <Icon src={b7Svg} alt="Carta oculta" opacity={0.1}></Icon>
      :
      <Icon src={item.item !== null ? items[item.item].icon : ''} alt="Item memória"></Icon>
      }
    </Container>
  );
}