import { 
  StyleProp, 
  ViewStyle 
} from "react-native";
import { Container } from "./styles";

type ScreenProps = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

export default function Screen({ children, style }: ScreenProps) {
  return (
    <Container style={style}>
      { children }
    </Container>
  )
}