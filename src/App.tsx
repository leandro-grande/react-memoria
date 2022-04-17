import { useEffect, useState } from 'react';
import { formatTimeElapsed } from './utils/formatTimeElapsed';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';

import logoDevMemory from './assets/devmemory_logo.png';
import RestartImgfrom from './assets/restart.svg';

import { items } from './data/items'

import {GlobalStyles, Container, Info, GridArea, Grid } from './globalStyles';



type GridItem = {
  item: number | null;
  shown: boolean;
  permanentShown: boolean;
}

export const App = () => {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  // play
  useEffect(() => {
    handleCreateRestart();
  }, []);

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  // verify if opened are equal
  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if (opened.length === 2 ) {
        // v1 - if both are equal, make every "shown" permanent

        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          // v2 - if they are not equal, close all "shown"
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for(let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }

        setMoveCount(moveCount + 1);
      }
    }

  }, [shownCount, gridItems]);

  // verify if game is over
  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]) 

  const handleCreateRestart = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Criar grid vazio
    let tmpGrid: GridItem[] = []
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
         while( pos < 0 || tmpGrid[pos].item !== null ) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }   
        tmpGrid[pos].item = i;
      }
    }

    // começar
    setGridItems(tmpGrid);
    setPlaying(true);
  }

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGrid);
    }
  }

  return (
    <>
     <Container>
       <Info>
        <img src={logoDevMemory} alt="Logo da aplicação" />
        
        <div>
          <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label='Movimentos' value={String(moveCount)} />
        </div>
        
        <Button text='Reiniciar' icon={RestartImgfrom} onClick={handleCreateRestart} />

       </Info>

       <GridArea>
          <Grid>
            {gridItems.map((item, index) => (
              <GridItem
                key={index}
                item={item}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </Grid>
       </GridArea>
     </Container>
    
    <GlobalStyles />
    </>
   
  )
}

export default App
