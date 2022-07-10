import { Container } from "./styles";

type ScreenProps = {
  children: JSX.Element | JSX.Element[];
}

export default function Screen({ children }: ScreenProps) {
  return (
    <Container>
      { children }
    </Container>
  )
}