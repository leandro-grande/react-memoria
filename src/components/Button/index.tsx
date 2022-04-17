
import { Container } from './styles'

type ButtonProps = {
  text: string;
  icon?: string;
  onClick: () => void;
}

export const Button = ({text, icon, onClick}: ButtonProps) => {
  return (

    <Container onClick={onClick}>
      <div><img src={icon} /></div>
      <div>{text}</div>
    </Container>
  );
}