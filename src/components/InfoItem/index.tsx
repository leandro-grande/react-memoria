
import { Container } from './styles'

type InfoItemProps = {
  label: string;
  value: string;
}

export const InfoItem = ({label, value}: InfoItemProps) => {
  return (
    <Container>
      <h2>{label}</h2>
      <p>{value}</p>
    </Container>
  )
}